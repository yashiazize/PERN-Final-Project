const express = require('express')
const reviews = express.Router({
    mergeParams: true
});
const { getAllReviews, getReview, createReview, updateReview,deleteReview } = require('../queries/travelReviews')

reviews.get('/', async (req, res) => {
    const { packageId } = req.params
    const reviews = await getAllReviews(packageId)
    res.json(reviews)
})


reviews.get('/:reviewId', async(req, res) =>{
    const { reviewId } = req.params;
    const review = await getReview(reviewId);
    res.json(review)
})

reviews.post('/', async (req, res) => {
    const newReview = req.body;
    const { packageId } = req.params
    const createdReview = await createReview(packageId, newReview);
    res.json(createdReview)
})

reviews.put('/:reviewId', async(req, res) => {
    const review = req.body
    const { reviewId } = req.params;
    const editedReview = await updateReview(reviewId, review);
    res.json(editedReview);
})

reviews.delete('/:reviewId', async (req,res) =>{
    const { reviewId} = req.params;
    const deletedReview = await deleteReview(reviewId);
    res.json(deletedReview);
});

module.exports = reviews