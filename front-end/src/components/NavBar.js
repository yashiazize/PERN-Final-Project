import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/travelPackages">Nomadix</Link>
      <button>
        <Link className="newButton" to="/travelPackages/new">Create new Package</Link>
      </button>
    </nav>
  );
};

export default NavBar;
