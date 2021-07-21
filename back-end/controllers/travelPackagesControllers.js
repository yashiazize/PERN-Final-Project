const express = require("express");
const travelpackages = express.Router();

const { fetchAllPackages, fetchPackage } = require("../queries/travelPackages");

travelpackages.get("/", async (req, res) => {
  const allPackages = await fetchAllPackages();
  res.json(allPackages);
});

travelpackages.get("/:id", async (req, res) => {
  const { id } = req.params;
  const package = await fetchPackage(id);
  res.json(package);
});

module.exports = travelpackages;
