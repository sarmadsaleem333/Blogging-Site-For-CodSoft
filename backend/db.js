const mongoose = require("mongoose");
const mongoURI = "add your url here";

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