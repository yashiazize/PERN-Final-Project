import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <Link to="/travelPackages">Nomadix</Link>
      <Link to="/travelPackages/new">Create new Package</Link>
    </nav>
  );
};

export default NavBar;
