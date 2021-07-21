const db = require("../db/dbConfig");

const fetchAllPackages = async () => {
  try {
    const allPackages = await db.any("SELECT * FROM travel_packages");
    console.log(allPackages);
    return { success: true, payload: allPackages };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const fetchPackage = async (id) => {
  try {
    const onePackage = await db.one(
      "SELECT * FROM travel_packages WHERE id=$1",
      id
    );
    return { success: true, payload: onePackage };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const newPackage = async (package) => {
  const { package_name, description, img_url, location, in_stock, price } =
    package;
  try {
    const createdPackage = await db.one(
      `INSERT INTO travel_packages (package_name, description, img_url, location, in_stock, price) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [package_name, description, img_url, location, in_stock, price]
    );
    return { success: true, payload: createdPackage };
  } catch (error) {
    console.log(error)
    return { success: false, payload: error }
  }
};

module.exports = { fetchAllPackages, fetchPackage, newPackage };
