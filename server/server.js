    require('dotenv').config(); 
    const express = require('express');
    const cors = require('cors');
    const mongoose = require('./config/db'); 
    const Catering=require('./routes/cateringRoute')
    const dancecrews=require('./routes/dancecrewsRoute')
    const eventhalls=require('./routes/eventhallsRouter')
    const eventplanner=require('./routes/eventplannerRoute')
    const makeup=require('./routes/makeupRoute')
    const marriagehalls=require('./routes/marriagehallsRoute')
    const music=require('./routes/musicRoute')
    const photography=require('./routes/photographyRoute')
    const priests=require('./routes/priestsRoute')
    const vendor=require('./routes/vendorRoutes')
    
    const gallery=require('./routes/galleryrouter')

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use('/caterings', Catering)
    app.use('/dancecrews', dancecrews)
    app.use('/eventplanner', eventplanner)
    app.use('/eventhalls', eventhalls)
    app.use('/makeup', makeup)
    app.use('/marriagehalls', marriagehalls)
    app.use('/photography', music)
    app.use('/photography', photography)
    app.use('/priests', priests)

    app.use('/gallery', gallery)

    app.use('/vendor', vendor)


    
    const port = process.env.PORT || 8888;

   
    app.get('/', (req, res) => {
        res.status(200).json({ message: "Hello world" });
    });


    app.listen(port, () => {
        console.log(`Server running on: http://localhost:${port}`);
    });
