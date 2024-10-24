import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar mt-4">
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
            to="/results"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Results
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
