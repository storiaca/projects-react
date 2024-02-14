import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/albums"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Albums
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
