import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const PackagesEditForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const API = apiURL();

  const [tripPackage, setTripPackage] = useState({
    package_name: "",
    description: "",
    img_url: "",
    location: "",
    in_stock: true,
    price: "",
  });

  const updatePackage = async (updatedPackage) => {
    try {
      await axios.put(`${API}/travelpackages/${id}`, updatedPackage);
      history.push(`/travelpackages/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const editPackage = async () => {
      try {
        const res = await axios.get(`${API}/travelpackages/${id}`);
        setTripPackage(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    editPackage();
  }, [id, API]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePackage(tripPackage, id);
  };

  const handleTextChange = (e) => {
    setTripPackage({ ...tripPackage, [e.target.id]: e.target.value });
  };

  const handleCheckBox = () => {
    setTripPackage({ ...tripPackage, in_stock: !tripPackage.in_stock });
  };
  return (
    <section className="editFormContainer">
      <h3> Edit Package Form</h3>
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleCheckBox}
          />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PackagesEditForm;
