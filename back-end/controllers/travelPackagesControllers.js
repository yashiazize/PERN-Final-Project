const express = require("express");
const travelpackages = express.Router();
const travelReviewsController = require("./travelReviewsControllers")
const {
  fetchAllPackages,
  fetchPackage,
  newPackage,
  updatePackage, deletePackage
} = require("../queries/travelPackages");

travelpackages.use('/:packageId/travelreviews', travelReviewsController)

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
  const createdPackage = await newPackage(req.body);
  res.json(createdPackage);
});

travelpackages.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPackage = await updatePackage(id, req.body);
  res.json(updatedPackage);
});

travelpackages.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPackage = await deletePackage(id)
  res.json(deletedPackage)
});

module.exports = travelpackages;
