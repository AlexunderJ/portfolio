import React from "react";
import clasess from "../styles/ContactPage.module.css";
import classes from "../styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={clasess.contact}>
      <div>KON</div>
      <div>
        TAK<div>T</div>
      </div>

      <div className={classes.dane}>
        <a href="tel:609277699">
          609<span>-</span>277<span>-</span>699
        </a>
        <a href="mailto:aleksanderjankowski88@SpeechGrammarList.com">
          aleksanderjankowski88<span>@</span>gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
