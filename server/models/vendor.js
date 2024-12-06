const mongoose=require('mongoose')
const vendorschema=new mongoose.Schema({
    service:{
        type:String,
        required:true,
    }
})
const vendor=mongoose.model('vendor',vendorschema);
module.exports=vendor;