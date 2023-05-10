const mongoose = require('mongoose');
const contactsSchema = new mongoose.Schema(
    {
        firstName:{
        type: String,
        required: [true, 'firstName is required'],
        },
        lastName:{
        type: String,
        required: [true, 'lastName is required'],
        },
        email:{
        type: String,
        required: [true, 'email is required'],
        },
        favoriteColor:{
        type: String,
        required: [true, 'favoriteColor is required'],
        },
        birthday:{
        type: String,
        required: [true, 'birthday is required'],
        }
    },
    {
        timestamps: true,
    }
);

const contacts = mongoose.model('contacts', contactsSchema);
module.exports = contacts;