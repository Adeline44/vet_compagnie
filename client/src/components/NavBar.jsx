import { NavLink } from "react-router-dom";
import "./styles_components/NavBar.css";

function navBar() {
  return (
      <div className="navbar-vet">
        <NavLink to="/" className="texts-navbar">
          {" "}
          Accueil{" "}
        </NavLink>
        <NavLink to="/l'equipe" className="texts-navbar">
          {" "}
          L'Équipe{" "}
        </NavLink>
        <NavLink to="/services" className="texts-navbar">
          {" "}
          Services{" "}
        </NavLink>
        <NavLink to="/hospitalisations" className="texts-navbar">
          {" "}
          Hospitalisations{" "}
        </NavLink>
        <NavLink to="/contact" className="texts-navbar">
          {" "}
          Contact{" "}
        </NavLink>
      </div>
  );
}

export default navBar;
