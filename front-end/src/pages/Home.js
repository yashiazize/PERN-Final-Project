import React from "react";
import barcelona_img from "../assets/barcelona.png";
import berlin_img from "../assets/berlin.png";
import brooklyn_img from "../assets/brooklyn.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="background">
        <div className="card" style={{ width: "50vw"}}>
          <div className="card-body">
            <h5 className="card-title">Make the world your home</h5>
            <p className="card-text">
            </p>
            <Link className="linkButton" to="/travelpackages">
              <button className="nomadButton">Become a Nomad</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img className="brooklyn_img" src={brooklyn_img} alt="brooklyn_img" />
        <img className="berlin_img" src={berlin_img} alt="berlin_img" />
        <img className="barcelona_img" src={barcelona_img} alt="barcelona_img" />
      </div>
      <div className="est">
          <p> © 2021 Nomadix, Inc.</p>
      </div>
    </section>
  );
}

export default Home;
