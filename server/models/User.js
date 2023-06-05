const { Schema, model } = require('mongoose');

const userModel = new Schema( 
    {
        // I want the user to sign up with an email and a password and once their account is created, 
        // they will have the option to create a username
        username: {
            type: String,
            trim: true,
            unique: true,
        }
    },
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        }
    },
    {
        password: {
            type: String,
            requried: true,
            trim: true,
            minlength: 5,
        }
    },
    {
        order: [{
            // This will need to be comprised of both Blends and Boxes
        }]
    },
);

const User = model('User', userModel);

module.exports = User;