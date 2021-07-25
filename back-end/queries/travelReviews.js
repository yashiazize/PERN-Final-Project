const db = require("../db/dbConfig");

const getAllReviews = async (packageId) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM travel_reviews WHERE travel_package_id = $1",
      packageId
    );
    return { success: true, payload: allReviews };
  } catch (error) {
    console.log(error);

    return { success: false, payload: error };
  }
};

const getReview = async (reviewId) => {
  try {
    const oneReview = await db.one(
      "SELECT * FROM travel_reviews WHERE id = $1",
      reviewId
    );
    return { success: true, payload: oneReview };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const createReview = async (packageId, newReview) => {
  const {title, reviewer, content, date, rating } = newReview;
  try {
    const createdReview = await db.one(
      "INSERT INTO travel_reviews(title , reviewer , content , date , rating,travel_package_id ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, reviewer, content, date, rating, packageId]);
    return { success: true, payload: createdReview };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const updateReview = async (reviewId, review) => {
    const { title, reviewer, content, date, rating, travel_package_id } =
    review;
  try {
    const updatedReview = await db.one(
        "UPDATE travel_reviews SET title = $1 , reviewer = $2 , content = $3 , date = $4 , rating = $5, travel_package_id = $6 WHERE id = $7 RETURNING *",
        [ title, reviewer, content, date, rating, travel_package_id, reviewId]
      );
    return { success: true, payload: updatedReview };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one("DELETE FROM travel_reviews WHERE id = $1 RETURNING *", id)
    return { success: true, payload: deletedReview };
  } catch (error) {
    console.log(error)
    return { success: false, payload: error};
  }
}
module.exports = { getAllReviews, getReview, createReview, updateReview, deleteReview };
