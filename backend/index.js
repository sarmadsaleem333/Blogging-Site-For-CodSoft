const connectToMongo = require("./db");
const express = require("express");
const app = express();                    //making imports 
var cors = require("cors");
const port = 5000;


connectToMongo();                 //connecting to MongoDb database 

app.use(express.json());
app.use(cors());
app.use('/blogging/auth', require('./Routes/auth'));       //providing route for authentication 
app.use('/blogging/posts', require('./Routes/posts'));       //providing route for posts
app.use('/facebook/reaction', require('./Routes/reaction'));       //providing route for reaction

app.listen(port, () => {
    console.log(`My Blogging App is listening on port http://localhost:${port}`);
});
