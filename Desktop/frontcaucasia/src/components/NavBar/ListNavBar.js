import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const ListNavBar = () => {
  let navItems = [
    { name: "Inicio", ref: "" },
    { name: "Nosotros", ref: "" },
    { name: "Productos", ref: "" },
    { name: "Contacto", ref: "" },
  ];

  return (
    <ul className="list-header">
      {navItems.map((items) => (
        <NavLink to={items.name} key={items.name} className="header-item">
          {items.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default ListNavBar;
