const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true ,'Please add th contact name'],
    },
    email:{
        type:String,
        required:[true,"Please add the contact email address"]
    },
    phone:{
        type:String,
        required:[true,"Please add the contact phone number"]
    },
},
  {
    timestamps: true
  }
)


module.exports =mongoose.models.Contact||mongoose.model('Contact',contactSchema)