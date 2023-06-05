const { Schema, model } = require('mongoose');

const boxSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        description: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        image: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        products: [{
            // This will hold the information of three seperate items always remaining the same 
            // I will be able to complete this through my server seed data
        }]
    }
);

const Box = model('Box', boxSchema);

module.exports = Box;