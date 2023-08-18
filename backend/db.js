const mongoose = require("mongoose");
// const mongoURI = "mongodb+srv://sarmadsaleem333:umHzyrR9VgYiREFr@cluster0.7zh2nli.mongodb.net/";
const mongoURI = "mongodb+srv://sarmadsaleem333:umHzyrR9VgYiREFr@cluster0.7zh2nli.mongodb.net/bloggingSite";

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