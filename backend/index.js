const connectToMongo = require("./db");
const express = require("express");
const app = express();                    //making imports 
var cors = require("cors");
const port = 5000;


connectToMongo();                 //connecting to MongoDb database 

app.use(express.json());
app.use(cors());
app.use('/facebook/auth', require('./Routes/auth'));       //providing route for authentication 
app.use('/facebook/posts', require('./Routes/posts'));       //providing route for posts
app.use('/facebook/request', require('./Routes/request'));       //providing route for request
app.use('/facebook/reaction', require('./Routes/reaction'));       //providing route for reaction

app.listen(port, () => {
    console.log(`My Facebook App is listening on port http://localhost:${port}`);
});
