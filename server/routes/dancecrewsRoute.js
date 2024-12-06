const express = require('express')
const router = express.Router();
const dancecrewsData = require('../models/dancecrews')

 
    //   name rating price thumbnail description availability location 

router.get('/all', async (req, res) => {
    try {
        const fetchedprojects = await dancecrewsData.find()
        res.status(200).json(fetchedprojects)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/add', async (req, res) => {
    try {
        const newdancecrewsData = new dancecrewsData(req.body)
        const { name, rating, price ,thumbnail ,description ,availability ,location } = newdancecrewsData
        if ( !name || !rating || !price || !thumbnail || !description  || !availability || !location ) {
            res.status(400).json({ message: " Required" })
        }
        const savedata = await newdancecrewsData.save()
        res.status(200).json(savedata)

    } catch (error) {
        res.status(500).json(error)
    }
})
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // const { id } = req.params;
        const currentrecord = await dancecrewsData.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const updateProject = await dancecrewsData.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateProject)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await dancecrewsData.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const deleteProject = await dancecrewsData.findByIdAndDelete(id)
        res.status(200).json({ message: "Project Deleted !" })
    } catch (e) {
        res.status(500).json(error)
    }
})

module.exports = router