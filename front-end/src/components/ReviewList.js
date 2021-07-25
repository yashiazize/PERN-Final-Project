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
    const fetchReviews = async () => {
        try {
          const res = await axios.get(`${API}/travelpackages/${id}/travelreviews`);
          setReviews(res.data.payload);
        } catch (error) {
          console.log(error);
        }
      };
      fetchReviews();
  }, [id])


  return (
      <section>
          <h1>Reviews</h1>
          {reviews.map((reviewObj) => {
            return  <ReviewDetails key={reviewObj.id} reviewObj={reviewObj} />
          })}
         <Link to={`/travelpackages/${id}/travelreview/new`}> <button>New Review</button></Link>
      </section>
  )
};

export default ReviewList;
