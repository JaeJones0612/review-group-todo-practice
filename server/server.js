const express = require("express");
const Parser = require("body-parser");
const App = express();

App.use(parser);

App.get("/", (req, res) => {
    res.send("Hello World!")
})

App.listen(3000, () => {
    console.log("Connected on port 3000!")
});

