import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/learning">
            Learning & Growth
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
