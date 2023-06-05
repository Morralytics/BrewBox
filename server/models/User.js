const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema( 
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

// Encryption before the schema is saved
// This will trigger on the first document and if the document is modified
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

const User = model('User', userSchema);

module.exports = User;