import mongoose from "mongoose";
const menuitemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type:  String,
        
        enum:['spicy','sweet','sour','bitter'],
        required: true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type: Array,
        required: true,
        
    },
    num_sales:{
        type:Number,
       default:0
    }

});
const menuItem = mongoose.model('menuItem',menuitemSchema)
export default menuItem;