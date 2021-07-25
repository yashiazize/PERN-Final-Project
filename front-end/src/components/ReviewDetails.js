import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const ReviewDetails = ({ reviewObj }) => {
  const [review, setReview] = useState({});
  const { id } = useParams();
  let history = useHistory();

  const deleteReview = async () => {
    try {
      await axios.delete(
        `${API}/travelpackages/${id}/travelreviews/${reviewObj.id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      setReview(review);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = async () => {
    await deleteReview();
    history.push(`/travelpackages/${id}`);
  };

  return (
    <section>
      <p>Date: {review.date}</p>
      <p>{review.title}</p>
      <p>Reviewer: {review.reviewer}</p>
      <p>Review:{review.content}</p>
      <p>Rating:{review.rating}</p>
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
};

export default ReviewDetails;
