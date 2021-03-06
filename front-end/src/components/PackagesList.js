import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useState, useEffect } from "react";
import PackageListItem from "./PackageListItem";
const API = apiURL();

const PackagesList = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getAllPackages = async () => {
      try {
        const res = await axios.get(`${API}/travelpackages`);
        setPackages(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPackages();
  }, []);
  return (
    <section className="packagesList">
      {packages
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((packageObj) => {
          return (
            <PackageListItem key={packageObj.id} packageObj={packageObj} />
          );
        })}
    </section>
  );
};

export default PackagesList;
