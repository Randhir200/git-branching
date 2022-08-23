import { NavLink } from "react-router-dom";
const links = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/products/2", title: "Product" },
  { to: "/users", title: "Users" },
  { to: "/contacts", title: "Contacts" },
  { to: "/login", title: "Login" }
];
export default function Navbar() {
  let activeStyle = {
    textDecoration: "none",
    color: "red"
  };
  let baseStyle = {
    textDecoration: "none",
    color: "black"
  };

  return (
    <div className="navbar">
      {links.map((el) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={el.to}
          key={el.to}
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
}
