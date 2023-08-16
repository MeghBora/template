const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"]
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
       { 
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
       }
    ],
    category:{
        type:String,
        require:[true,"please Enter Product Category"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('product',productSchema);