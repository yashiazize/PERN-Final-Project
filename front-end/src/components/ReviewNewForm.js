import axios from "axios";
import { useState } from "react";
import { useParams, useHistory } from "react-router";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const ReviewNewForm = () => {
  const { id } = useParams();
  let history = useHistory();
  const [review, setReview] = useState({
    title: "",
    reviewer: "",
    content: "",
    date: "",
    rating: "",
  });

  const addNewReview = async (newReview) => {
    try {
      await axios.post(`${API}/travelpackages/${id}/travelreviews`, newReview);
      history.push(`/travelpackages/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReview({...review, date: dateAndTime()})
    addNewReview(review);
  };

  const handleChange = (e) => {
    setReview({ ...review, [e.target.id]: e.target.value });
  };

  const handleNumber = (e) => {
    setReview({...review, rating: Number(e.target.value)})
  }
  const dateAndTime = () => {
    let dateObj = new Date();
    let dayIndex = dateObj.getDay();
    let weekArray = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = weekArray[dayIndex];
    let monthIndex = dateObj.getMonth();
    let monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = monthArray[monthIndex];
    let date = dateObj.getDate();
    let prefix = "";
    if (date === 1 || date === 21 || date === 31) {
      prefix = "st";
    } else if (date === 2 || date === 22) {
      prefix = "nd";
    } else if (date === 3 || date === 23) {
      prefix = "rd";
    } else {
      prefix = "th";
    }
    let hoursFromObj = dateObj.getHours();
    let hour = "";
    let amPm = "am";
    if (hoursFromObj === 0) {
      hour = "12";
    } else if (hoursFromObj === 12) {
        hour = "12"
        amPm = "pm"
    } else if (hoursFromObj > 12) {
        hour = hoursFromObj - 12
        amPm = "pm"
    } else {
        hour = hoursFromObj
    }
    let minFromObj = dateObj.getMinutes()
    let min = ""
    if (minFromObj === 0) {
        min = "00"
    } else if (minFromObj < 10) {
        min = "0" + minFromObj.toString()
    } else {
        min = minFromObj
    }
    review.date = `${day}, ${month} ${date + prefix} at ${hour}:${min + amPm} `
}

  return (
    <section className="reviewNewContainer">
      <form onSubmit={handleSubmit} className="newFormContainer">
        <h3> New Review Form</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            value={review.title}
            type="text"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb=3">
          <label htmlFor="reviewer" className="form-label">
            Reviewer
          </label>
          <input
            id="reviewer"
            type="text"
            className="form-control"
            required
            value={review.reviewer}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Review Content
          </label>
          <input
            id="content"
            type="text"
            required
            className="form-control"
            value={review.content}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            min="1" 
            max="5"
            id="rating"
            type="number"
            required
            className="form-control"
            value={review.rating}
            onChange={handleNumber}
          />
        </div>
        <input type="submit" />
      </form>
      <div>
      </div>
    </section>
  );
};

export default ReviewNewForm;
