import axios from "axios"
import { useState } from "react";
import { apiURL } from "../util/apiURL";
import { useHistory } from "react-router-dom";

const API = apiURL();

const PackagesNewForm = () => {
    const [tripPackage, setTripPackage] = useState({
        package_name: "", 
        description: "", 
        img_url: "",
        location:"", 
        in_stock: true, 
        price: ""
    })
let history = useHistory();

    const addNewPackage = async (newPackage) => {
        try {
            await axios.post(`${API}/travelpackages`, newPackage);
            history.push("/travelpackages");
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setTripPackage({...tripPackage, [e.target.id]: e.target.value});
    }

    const handleCheckbox = () => {
        setTripPackage({...tripPackage, in_stock: !tripPackage.in_stock})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addNewPackage(tripPackage);
        history.push("/travelpackages");
    }
    return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="package_name">Package Name:</label>
        <input
          id="package_name"
          value={tripPackage.package_name}
          type="text"
          onChange={handleChange}
          placeholder="Package Name"
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          required
          value={tripPackage.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="img_url">Image Url:</label>
        <input
          id="img_url"
          type="text"
          name="img_url"
          value={tripPackage.img_url}
          placeholder="Url"
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
       <input
         id="location"
         type="text"
         name="location"
         value={tripPackage.location}
         placeholder="Location"
         onChange={handleChange}
       />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          placeholder="Price"
          value={tripPackage.price}
          onChange={handleChange}
        />
        <label htmlFor="in_stock">In stock:</label>
        <input
          id="in_stock"
          type="checkbox"
          name="in_stock"
          checked={tripPackage.in_stock}
          onChange={handleCheckbox}
        />
        <br/>
        <input type="submit" />
      </form>
    </section>
    )
}

export default PackagesNewForm;