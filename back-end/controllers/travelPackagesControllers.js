const express = require("express");
const travelpackages = express.Router();

const {
    fetchAllPackages
} = require("../queries/travelPackages");

travelpackages.get("/", async (req, res) => {
    const allPackages = await fetchAllPackages();
    res.json(allPackages)
});


















module.exports = travelpackages