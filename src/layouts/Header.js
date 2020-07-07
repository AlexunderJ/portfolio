import React from "react";
import { Route, Switch } from "react-router-dom";

import classes from "../styles/Header.module.css";

import img_gory from "../images/projekty/obrazy/góry1.png";
import img_1234 from "../images/projekty/obrazy/1234.jpg";
import img_grafiti from "../images/projekty/obrazy/grafiti.jpg";

const Header = () => {
  return (
    <>
      <div className={classes.Header}>
        <Switch>
          <Route
            path="/products"
            render={() => <img alt="orbrazek" src={img_1234} />}
          />
          <Route
            path="/contact"
            render={() => <img alt="orbrazek" src={img_grafiti} />}
          />
          <Route
            path="/"
            render={() => <img alt="orbrazek" src={img_gory} />}
          />
        </Switch>
      </div>
    </>
  );
};

export default Header;
