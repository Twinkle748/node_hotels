import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        
    },
    work:{
        type:String,
        enum: ['Chef','Waiter','Manager'],
        required : true
    },
    mobile:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true

    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    salary:{
        type: Number,
        required: true
    }
});

//create person model

const Person = mongoose.model('person',personSchema);
export default Person;