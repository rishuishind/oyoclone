import User from "../../../../../models/user-model";
import connectDB from "../../../../../db";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function POST(req){
    await connectDB();
    const {email,password} = await req.json();
    if(!email || !password) return new Response("All fields are mandatory",{
        headers:{
            'Content-Type':'application/json'
        },
        status:400
    });
    const emailExist = await User.findOne({email});
    if(emailExist){
        const passwordMatched = await bcrypt.compare(password,emailExist.password);
        if(passwordMatched){
            const token = jwt.sign({token:emailExist._id},process.env.JWT_SECRET,{expiresIn:'30d'});
            return new Response(JSON.stringify({msg:'Logged in succesfully',token}),{
                headers:{
                    'Content-Type':'application/json'
                },
                status:200
            })
        }else{
            return new Response(JSON.stringify({msg:'Invalid Credentials'}),{
                headers:{
                    'Content-Type':'application/json'
                },
                status:400
            })
        }
    }else{
        return new Response(JSON.stringify({msg:'Please Register First!!'}),{
            headers:{
                'Content-Type':'application/json'
            },
            status:400
        })
    }
}