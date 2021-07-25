import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import ReviewList from "./ReviewList";

const API = apiURL();

const PackageDetails = () => {
  const [tripPackage, setTripPackage] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const deletePackage = async () => {
    try {
      await axios.delete(`${API}/travelpackages/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    await deletePackage();
    history.push("/travelpackages");
  };

  useEffect(() => {
    const getPackageDetails = async () => {
      try {
        const res = await axios.get(`${API}/travelpackages/${id}`);
        setTripPackage(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    getPackageDetails();
  }, [id]);

  return (
    <section className="detailsContainer">
      <div className="detailsButtons">
        <Link to={"/travelpackages"}>
          <button>Go Back</button>
        </Link>
      </div>
      <h4>Package Details</h4>
      <div className="card mb-3" style={{ max_width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={tripPackage.img_url}
              className="img-fluid rounded-start"
              alt={tripPackage.location}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title"> {tripPackage.package_name}</h3>
              <p className="card-text">Location: {tripPackage.location}</p>
              <p className="card-text">
                Description: {tripPackage.description}
              </p>
              <p className="card-text">Price: ${tripPackage.price}</p>
              <p className="card-text">In Stock: {!tripPackage.is_favorite ? (
          <span>✔️</span>
        ) : (
          <span>❌</span>
        )} {tripPackage.in_stock}</p>
              <p class="card-text">
              </p>
        <div className="detailsButtons">
        <Link to={`/travelpackages/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
        </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewList id={id}/>
    </section>
  );
};

export default PackageDetails;
