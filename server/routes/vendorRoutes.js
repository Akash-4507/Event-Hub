const express = require('express')
const router = express.Router();
const vendorData = require('../models/vendor')

 
    //   name rating price thumbnail description availability location 

router.get('/all', async (req, res) => {
    try {
        const fetcheddata = await vendorData.find()
        res.status(200).json(fetcheddata)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/add', async (req, res) => {
    try {
        const newvendorData = new vendorData(req.body)
        const { service } = newvendorData
        if ( !service ) {
            res.status(400).json({ message: " Required" })
        }
        const savedata = await newvendorData.save()
        res.status(200).json(savedata)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router;