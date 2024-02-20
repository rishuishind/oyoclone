import mongose from 'mongoose';

const UserSchema = mongose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true});

export default mongose.model?.User || mongose.model("User",UserSchema);