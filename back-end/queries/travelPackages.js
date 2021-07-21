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

module.exports = { fetchAllPackages, fetchPackage };
