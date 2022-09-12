import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      <h1>Articles</h1>
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Article 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Article 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Article 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
