const productModel = require("../models/productModel");


//create Product --Admin route
exports.createProduct = async (req,res,next) =>{
    const product = await productModel.create(req.body);
    res.status(201).json({
        success:true,
        product
    });
}

//editProducts--Admin
exports.updateProducts = async(req,res)=>{
    let product = await productModel.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        });
    }

    product = await productModel.findByIdAndUpdate(req.param.id,req.body,{new:true,runValidators:true, useFindAndModify:false});

    res.status(200).json({
        success:true,
        product
    });

}

//deleteProducts --Admin
exports.deleteProduct = async(req,res)=>{
    const product = await productModel.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        });
    }

    await product.remove();
    res.status(200).json({
        success:true,
        massage:"product deleted successfully"
    });
}

//getAllProducts
exports.getAllProducts= async(req,res) =>{
   const allProduct = await productModel.find({});
   res.status(200).json({
    success:true,
    allProduct
   });
}