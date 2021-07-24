import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/travelpackages">Nomadix</Link>
      <Link className="newLink" to="/travelPackages/new">
        Create new package
      </Link>
    </nav>
  );
};

export default NavBar;
