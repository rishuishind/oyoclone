import connectDB from "../../../../../db";
import User from '../../../../../models/user-model.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function GET() {
    await connectDB();
    return new Response("Hey I'm connected to my DB");
}
export async function POST(request) {
    await connectDB();
    const { name, email, password } = await request.json();
    if (!name || !email || !password) {
        return new Response('All fields are mandatory', {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 400
        });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        return new Response('User already created', {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 400
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    const result = await newUser.save();
    const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    return new Response(JSON.stringify({ msg: 'User registered succesfully', token }), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    })
}