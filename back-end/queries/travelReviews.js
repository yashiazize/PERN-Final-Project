const db = require("../db/dbConfig");

const getAllReviews = async (packageId) => {
    try {
        console.log(packageId)
        const allReviews = await db.any('SELECT * FROM travel_reviews WHERE travel_package_id = $1', packageId)
        return { success: true, payload: allReviews };
    } catch (error) {
        console.log(error)
        
        return { success: false, payload: error };
    }
}

module.exports = { getAllReviews }