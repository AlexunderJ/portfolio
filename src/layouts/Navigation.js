import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/Navigation.module.css";

const list = [
  { name: "kontakt", path: "/contact" },
  { name: "portfolio", path: "/portfolio" },
  { name: "o mnie", path: "/about" },
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
      <div className={classes.strip}></div>
    </nav>
  );
};

export default Navigation;
