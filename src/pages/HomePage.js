import React from "react";
import logo from "../images/logos/logo_full.svg";
import pos from "../images/logos/POS.svg";
import branding from "../images/logos/BRANDING.svg";
import reklama from "../images/logos/napis.svg";
import webdesign from "../images/logos/webdesign.svg";
import logoSVG from "../images/logos/LOGO.svg";
import classes from "../styles/HomePage.module.css";

//Api rest

const HomePage = () => {
  return (
    <div className={classes.wraper}>
      <div className={classes.logoHero}>
        <img alt="logo" src={logo} />
      </div>
      <div className={classes.words}>
        <img className={classes.n1} alt="rek" src={reklama}></img>
        <img className={classes.n2} alt="logoSVG" src={logoSVG}></img>
        <img className={classes.n3} alt="pos" src={pos}></img>
        <img className={classes.n4} alt="webdesign" src={webdesign}></img>
        <img className={classes.n5} alt="branding" src={branding}></img>
      </div>
    </div>
  );
};

export default HomePage;
