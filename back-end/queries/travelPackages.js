const db = require("../db/dbConfig")


const fetchAllPackages = async () => {
    try {
        const allPackages = await db.any("SELECT * FROM travel_packages");
        console.log(allPackages)
        return { success: true, payload: allPackages };
    } catch (error){
        console.log(error)
        return { success: false, payload: error };
    }
};

module.exports = { fetchAllPackages }