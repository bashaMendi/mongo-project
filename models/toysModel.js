const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
name:String,
info:String,
category:String,
img_url:String,
price:Number,
user_id:String,
},{timestamps:true})
exports.toysModel = mongoose.model("toys",schema)

exports.validateToys = (_reqBody) => {
let joiSchema = Joi.object({
name:Joi.string().min(2).max(50).required(),
info:Joi.string().min(2).max(500).required(),
category:Joi.string().min(2).max(20).required(),
img_url: Joi.string().min(2).max(400).allow(null, ""),
price:Joi.number().min(1).max(9999).required(),
})
return joiSchema.validate(_reqBody)
}

