//  if you double check code ,read this comment blow
//  for the love of god; are you lost 😐🤨😡😠🤬 oh right, we read this one more time


// ok honey we make our functions to give theme to routes 
// so routes can be go to server.js and run 
// basically we just create a fow functions 
//  and export them why make it so hard for your self😐

const Contact = require('../modules/ContactModules')
const asyncHandler = require('express-async-handler')

//  @desc get all contacts
//  @route GET /api/contacts
//  @desc public
const getContacts =asyncHandler( async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})



//  @desc Create contacts
//  @route POST  /api/contacts
//  @desc public
const postContact =asyncHandler( async (req,res)=>{
    const {name,email,phone}=req.body
    console.log(name)
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error('fields are unComplete')
    }

    const contact = await Contact.create({
        name,email,phone
    });

    res.status(201).json(contact);
})



//  @desc get one contacts
//  @route GET /api/contacts
//  @desc public
const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message :'Get one contacts'})
})



//  @desc Update contacts
//  @route PUT  /api/contacts
//  @desc public
const putContact =asyncHandler( async (req,res)=>{
    res.status(201).json({message:`update contact with id ${req.params.id}`})
}
)


//  @desc DELETE contacts
//  @route DELETE  /api/contacts
//  @desc public
const DeleteContact =asyncHandler( async (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
})

module.exports= {getContacts,postContact , getContact,putContact,DeleteContact}
