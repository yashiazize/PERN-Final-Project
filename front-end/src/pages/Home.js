import React from "react";
import barcelona_img from "../assets/barcelona.png";
import berlin_img from "../assets/berlin.png";
import brooklyn_img from "../assets/brooklyn.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="background">
        <div className="card" style={{width: "45rem"}}>
          <div className="card-body">
            <h5 className="card-title">Make the world your home</h5>
            <p className="card-text">
              
            </p>
            <Link to="/travelpackages">
              <button>Become a Nomad</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img className="homeImg" src={barcelona_img} alt="barcelona_img" />
        <img className="homeImg" src={berlin_img} alt="berlin_img" />
        <img className="homeImg" src={brooklyn_img} alt="brooklyn_img" />
      </div>
      <div className="est">
          <p> © 2021 Nomadix, Inc.</p>
      </div>
    </section>
  );
}

export default Home;
