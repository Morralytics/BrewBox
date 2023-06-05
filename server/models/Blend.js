const { Schema, model } = require('mongoose');

const blendSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
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
        price: {
            type: Number,
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
    }
);

const Blend = model('Blend', blendSchema);

module.exports = Blend;