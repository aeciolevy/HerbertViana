// Model
const mongoose = require('mongoose');

// Files
const { Schema: { Types }, Schema } = mongoose;

const leadSchemaOptions = {
    timestamps: {
        updatedAt: 'meta.updatedAt',
        createdAt: 'meta.createdAt',
    },
};

// Define user Model
const leadSchema = new Schema({
    name: {
        type: String,
    },
    nameLower: {
        type: String,
        lowercase: true,
        trim: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: (val => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)),
            message: '{VALUE} is not a valid email!',
        },
    },
}, leadSchemaOptions);

// Create the model class
const ModelLead = mongoose.model('lead', leadSchema);

module.exports = ModelLead;
