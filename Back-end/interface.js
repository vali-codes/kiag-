// start: npm run dev

const express = require("express");
const app = express();
const thisPort = 5000;

app.get("/api", (req, res) => {
    res.json("500");

})

app.listen(thisPort, () => {console.log("backend Server started at Port: " + thisPort)});