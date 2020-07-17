import React from "react";
import classes from "../styles/AboutPage.module.css";
import name from "../images/logos/logo_name.svg";

const ContactPage = () => {
  return (
    <div className={classes.about_wraper}>
      <div className={classes.heroe}>
        <h1>mnie</h1>
        <img src={name} alt="name_moje" />
      </div>
      <div className={classes.omnie}>
        <h1>Cześć</h1>
        <h3>Nazywam się Aleksander Jankowski i uwielbiam tworzyć. </h3>
        <p>
          Zawsze zajmowałem się „kreatywnymi” rzeczami, od szkicowania przez
          pisanie do projektowania. Podczas mojego podróży przez życie zawodowe
          udało mi się zdobyć kilka unikatowych umiejętności, zrealizować trochę
          niezwykłych projektów i poznać wspaniałych ludzi.{" "}
        </p>
        <p>
          Moja przygoda z projektowaniem zaczęła się od tworzenia elementów
          marketingowych od strony technologicznej i zawsze związana była z
          wytworzeniem nośników reklamy. W raz z rozwojem projektów zmieniały
          się potrzeby projektowania. Przez wizualizację 3D, rysunki techniczne,
          a nawet korzystanie z maszyn CNC przeszedłem do projektów graficznych.
          Na tym polu też zawsze związany byłem z techniczną stroną wdrożenia
          moich projektów.{" "}
        </p>
        <p>
          Aktualnie najmocniej eksploatuję medium jakim jest internet, coraz
          głębiej poznaję jego możliwości. Ponieważ całe moje doświadczenie od
          samego początku jest komercyjne, szybko nauczyłem się, że z klientami
          łączy mnie cel, dlatego świetnie nam się współpracuje.{" "}
        </p>
        <p>Zapraszam do współpracy.</p>
      </div>
    </div>
  );
};

export default ContactPage;
