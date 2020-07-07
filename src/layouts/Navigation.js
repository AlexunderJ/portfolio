import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/Navigation.module.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contact" },
  { name: "panel admin", path: "/admin" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeClassName={classes.active}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={classes.main}>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
