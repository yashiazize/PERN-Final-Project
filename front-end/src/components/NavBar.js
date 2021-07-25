import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Nomadix</Link>
      <Link className="newLink" to="/travelpackages/new">
        Create New Package
      </Link>
    </nav>
  );
};

export default NavBar;
