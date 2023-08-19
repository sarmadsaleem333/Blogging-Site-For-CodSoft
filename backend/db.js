const mongoose = require("mongoose");
const mongoURI = ""; //ad your url here of mongodb string
const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to mongodb successfully");        //connecting to mongodb 
        })
        .catch((error) => {
            console.log("Erorr connecting mongo db :", error);
        })
}

module.exports = connectToMongo;