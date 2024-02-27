import mongoose from 'mongoose';

const URI = process.env.MONGO_URI;

const connectDB = async ()=>{
    try{
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('DB connected...');
    }catch(err){
        console.log("Error connecting to MongoDB",err);
        process.exit(1);
    }
    
}

export default connectDB;