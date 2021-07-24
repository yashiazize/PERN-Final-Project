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
    <form onSubmit={handleSubmit}>
        <h1>Package Edit Form</h1>
      <label htmlFor="package_name">Package Name</label>
      <input
        id="package_name"
        value={tripPackage.package_name}
        type="text"
        onChange={handleTextChange}
        required
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        value={tripPackage.description}
        type="text"
        onChange={handleTextChange}
        required
      />
      <label htmlFor="img_url">Image URL</label>
      <input
        id="img_url"
        value={tripPackage.img_url}
        type="text"
        onChange={handleTextChange}
        required
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        value={tripPackage.location}
        type="text"
        onChange={handleTextChange}
        required
      />
      <label htmlFor="in_stock">In Stock</label>
      <input
        id="in_stock"
        value={tripPackage.in_stock}
        type="checkbox"
        onChange={handleCheckBox}
        placeholder="In Stock"
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        value={tripPackage.price}
        type="text"
        onChange={handleTextChange}
        placeholder="Price"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PackagesEditForm;
