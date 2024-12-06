const express = require('express');
const router = express.Router();
const galleryData = require('../models/gallery');

// GET all gallery items
router.get('/all', async (req, res) => {
    try {
        const fetchedData = await galleryData.find();
        res.status(200).json({ fetchedData });
        console.log(fetchedData);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// POST add a new gallery item
router.post('/add', async (req, res) => {
    try {
        const newData = new galleryData(req.body);
        const { title, image, overview, review, specifications, feedback, contact } = newData;

        // Validate required fields
        if (!title || !image || !overview || !review || !feedback || !specifications || !contact) {
            return res.status(400).json({ message: "All required fields must be provided" });
        }

       
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(500).json({ error: "Error saving data" });
    }
});

// DELETE a gallery item by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        // Check if item exists
        const data = await galleryData.findById(id);
        if (!data) {
            return res.status(404).json({ message: "No data found with this ID" });
        }

        const deletedData = await galleryData.findByIdAndDelete(id);
        res.status(200).json(deletedData);
    } catch (err) {
        res.status(500).json({ error: "Error deleting data" });
    }
});

module.exports = router;
