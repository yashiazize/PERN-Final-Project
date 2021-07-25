import axios from "axios";
// import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const ReviewDetails = ({ reviewObj }) => {
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

  const handleDelete = async () => {
    await deleteReview();
    history.push(`/travelpackages/${id}`);
  };

  return (
    <section className="reviewCard">
      <div className="card" style={{width: "50rem"}}>
        <div className="card-body">
          <p className="card-text">Date: {reviewObj.date}</p>
          <h5 className="card-title">{reviewObj.title}</h5>
          <p className="card-text">Reviewer: {reviewObj.reviewer}</p>
          <p className="card-text">Review:{reviewObj.content}</p>
          <p className="card-text">Rating:{reviewObj.rating}</p>
          <div className="reviewCardButton" >
          <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewDetails;
