const jwt = require('jsonwebtoken');  // export for web token which is used for authentication for further routes
const JWT_secret = ""  //add auth token string For auth token
const fetchuser = (req, res, next) => {

    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Please authentictate by providing the token" });
    }
    try {
        const data = jwt.verify(token, JWT_secret);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authentictate by providing the valid token" });
    }

}

module.exports = fetchuser;