const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Stores the image data as binary
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    specifications: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: false,
    },
    contact: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the creation date
    }
});

// Define the model based on the schema
const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
