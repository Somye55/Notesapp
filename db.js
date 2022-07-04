const mongoose = require('mongoose');
const URI = 'mongodb+srv://ashgreninja:ashgreninja@notesapp.b6q1d.mongodb.net/?retryWrites=true&w=majority'
// const URI = 'mongodb://localhost:27017/notes'


const connectToMongo = () => {
    mongoose.connect(URI,()=>{
        console.log("Connected to Mongodb!")
    })
}
module.exports = connectToMongo

