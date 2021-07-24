const express = require('express')
const reviews = express.Router({
    mergeParams: true
});
const { getAllReviews } = require('../queries/travelReviews')

reviews.get('/', async (req, res) => {
    const { packageId } = req.params
    // console.log(`controllers: ${req.params.id}`)
    const reviews = await getAllReviews(packageId)
    res.json(reviews)
})
module.exports = reviews