import axios from "axios";
import { useState } from "react";
import { apiURL } from "../util/apiURL";
import { useHistory } from "react-router-dom";

const API = apiURL();

const PackagesNewForm = () => {
  const [tripPackage, setTripPackage] = useState({
    package_name: "",
    description: "",
    img_url: "",
    location: "",
    in_stock: true,
    price: "",
  });
  let history = useHistory();

  const addNewPackage = async (newPackage) => {
    try {
      await axios.post(`${API}/travelpackages`, newPackage);
      history.push("/travelpackages");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setTripPackage({ ...tripPackage, [e.target.id]: e.target.value });
  };

  const handleCheckbox = () => {
    setTripPackage({ ...tripPackage, in_stock: !tripPackage.in_stock });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewPackage(tripPackage);
    history.push("/travelpackages");
  };
  return (
    <section className="newFormContainer">
      <h3> New Package Form</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="package_name" className="form-label">
            Package Name
          </label>
          <input
            id="package_name"
            value={tripPackage.package_name}
            type="text"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb=3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            id="location"
            type="text"
            className="form-control"
            required
            value={tripPackage.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img_url" className="form-label">
            Image Url
          </label>
          <input
            id="img_url"
            type="url"
            required
            className="form-control"
            value={tripPackage.img_url}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            type="number"
            className="form-control"
            required
            value={tripPackage.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            required
            className="form-control"
            value={tripPackage.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="in_stock" className="form-check-label">
            In stock
          </label>
          <input
            id="in_stock"
            type="checkbox"
            name="in_stock"
            checked={tripPackage.in_stock}
            onChange={handleCheckbox}
          />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PackagesNewForm;
