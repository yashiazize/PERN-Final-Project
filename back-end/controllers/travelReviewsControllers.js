const express = require('express')
const reviews = express.Router({
    mergeParams: true
});
const { getAllReviews, getReview, createReview, updateReview,deleteReview } = require('../queries/travelReviews')

reviews.get('/', async (req, res) => {
    const { packageId } = req.params
    // console.log(`controllers: ${req.params.id}`)
    const reviews = await getAllReviews(packageId)
    res.json(reviews)
})


reviews.get('/:reviewId', async(req, res) =>{
    const { reviewId } = req.params;
    const review = await getReview(reviewId);
    res.json(review)
})

reviews.post('/', async (req, res) => {
    const newReview = await createReview(req.body);
    res.json(newReview)
})

reviews.put('/:reviewId', async(req, res) => {
    const {reviewId} = req.params;
    const editedReview = await updateReview(reviewId);
    res.json(editedReview);
})

reviews.delete('/:reviewId', async (req,res) =>{
    const { reviewId} = req.params;
    const deletedReview = await deleteReview(reviewId);
    res.json({ success: true, payload: deletedReview });
});

module.exports = reviews