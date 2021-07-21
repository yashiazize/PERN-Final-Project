const express = require("express");
const travelpackages = express.Router();

const { fetchAllPackages, fetchPackage, newPackage } = require("../queries/travelPackages");

travelpackages.get("/", async (req, res) => {
  const allPackages = await fetchAllPackages();
  res.json(allPackages);
});

travelpackages.get("/:id", async (req, res) => {
  const { id } = req.params;
  const package = await fetchPackage(id);
  res.json(package);
});

travelpackages.post("/", async (req, res) => {
  const createdPackage = await newPackage(req.body)
  res.json(createdPackage)
})

module.exports = travelpackages;
