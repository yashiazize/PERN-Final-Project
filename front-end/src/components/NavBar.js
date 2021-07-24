import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/travelpackages">Nomadix</Link>
      <Link className="newLink" to="/travelpackages/new">
        Create new Package
      </Link>
    </nav>
  );
};

export default NavBar;
