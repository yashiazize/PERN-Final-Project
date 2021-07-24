import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom"
import { apiURL } from "../util/apiURL";

const API = apiURL();

const PackageDetails = () => {
  const [tripPackage, setTripPackage] = useState([]);
  const { id } = useParams();
  const history = useHistory()

  const deletePackage = async () => {
    try {
      await axios.delete(`${API}/travelpackages/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
      await deletePackage()
      history.push("/travelpackages")
  }

  useEffect(() => {
    const getPackageDetails = async () => {
        try {
            const res = await axios.get(`${API}/travelpackages/${id}`)
            setTripPackage(res.data.payload)
        } catch (error) {
            console.log(error)
        }
    } 
    getPackageDetails()
  }, [id])

  return (
    <section>
      <h2>Package Details</h2>
      <p>Package Name: {tripPackage.package_name}</p>
      <img src={tripPackage.img_url} alt={tripPackage.location} />
      <p>Description: {tripPackage.description}</p>
      <p>Location: {tripPackage.location}</p>
      <p>In Stock: {tripPackage.in_stock}</p>
      <p>Price: {tripPackage.price}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/travelpackages/${id}/edit`}><button>Edit</button></Link>
     <Link to={"/travelpackages"}><button>Go Back</button></Link> 
    </section>
  );
};

export default PackageDetails;
