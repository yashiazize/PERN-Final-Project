const db = require("../db/dbConfig");

const fetchAllPackages = async () => {
  try {
    const allPackages = await db.any("SELECT * FROM travel_packages");
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
    console.log(error);
    return { success: false, payload: error };
  }
};

const updatePackage = async (id, package) => {
  const { package_name, description, img_url, location, in_stock, price } =
    package;
  try {
    const updatedPackage = await db.one(
      `UPDATE travel_packages SET package_name=$1, description=$2, img_url=$3, location=$4, in_stock=$5, price=$6 WHERE id=$7 RETURNING *`,
      [package_name, description, img_url, location, in_stock, price, id]
    );
    return { success: true, payload: updatedPackage };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deletePackage = async (id) => {
  try {
    const deletedPackage = await db.one(`DELETE FROM travel_packages WHERE id=$1 RETURNING *`, id)
    return { success: true, payload: deletedPackage}
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
}

module.exports = { fetchAllPackages, fetchPackage, newPackage, updatePackage, deletePackage };
