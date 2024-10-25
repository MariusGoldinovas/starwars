import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/films"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Films
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/people"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/planets"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/starships"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            StarShips
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
