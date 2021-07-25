import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import  ReviewDetails from "../components/ReviewDetails";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect (() => {
      fetchReviews();
  }, [id, reviews])

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API}/travelpackages/${id}/travelreviews`);
      setReviews(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <section>
          <h5 className="header5">Reviews</h5>
          <Link to={`/travelpackages/${id}/travelreview/new`}> <button>New Review</button></Link>
          {reviews.map((reviewObj) => {
            return  <ReviewDetails key={reviewObj.id} reviewObj={reviewObj} fetchReviews={fetchReviews} />
          })}
      </section>
  )
};

export default ReviewList;
