const cors = require("cors");
const express = require("express");
const app = express();



app.use(cors());
app.use(express.json());

const travelPackagesController = require("./controllers/travelPackagesControllers");

app.use("/travelpackages", travelPackagesController)


app.get("/", (req, res) => {
  res.send("Welcome to our Travel Packages App");
});

app.get("*", (req, res) => {
    res.status(404).send('Page not Found')
});


module.exports = app;
