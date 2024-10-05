const mongoose =require('mongoose')
mongoose.connect(process.env.MONGOURL)
const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("db connected ")
})

connection.on('error',()=>{
   console.log("db error")
})

module.exports = mongoose
