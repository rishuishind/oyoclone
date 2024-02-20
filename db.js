import mongoose from 'mongoose';

const URI = 'mongodb+srv://hespnod:saras123@project.nv0p6ju.mongodb.net/OYO';

const connectDB = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log('DB connected...');
    }catch(err){
        console.log("Error connecting to MongoDB",err);
        process.exit(1);
    }
    
}

export default connectDB;