import React from "react";
import { Route, Switch } from "react-router-dom";

import classes from "../styles/Header.module.css";

import logo_sygnet from "../images/logos/logo_sygnet.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={classes.Header}>
        <NavLink to="/" exact>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <div className={classes.null_logo}></div>}
            />
            <Route
              path="/"
              render={() => (
                <div className={classes.logo_sygnet}>
                  <img alt="logo" src={logo_sygnet} />
                </div>
              )}
            />
          </Switch>
        </NavLink>
        <a href="https://www.instagram.com/ale3d.info">
          <div className={`${classes.insta} ${classes.social}`}>
            <span>instagram</span>
          </div>
        </a>
        <a href="https://www.facebook.com/ALE3D">
          <div className={`${classes.fb} ${classes.social}`}>
            <span>facebook</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Header;
