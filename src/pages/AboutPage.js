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
          pisanie aż do projektowania. Podczas mojej podróży przez życie
          zawodowe udało mi się zdobyć kilka unikatowych umiejętności,
          zrealizować wiele niezwykłych projektów i poznać wspaniałych i
          inspirujących ludzi.
        </p>
        <p>
          Moja przygoda z designem zaczęła się od tworzenia elementów
          marketingowych od strony technologicznej i zawsze związana była z
          wytwarzaniem nośników reklamy. Wraz z rozwojem projektów zmieniały się
          potrzeby projektowania. Od wizualizacji 3D, rysunków technicznych, a
          nawet korzystania z maszyn CNC przeszedłem do projektów graficznych.
          Na tym polu również zawsze związany byłem z techniczną stroną
          wdrożenia moich projektów.
        </p>
        <p>
          Aktualnie najmocniej eksploatuję medium jakim jest internet - coraz
          głębiej poznaję jego możliwości.
        </p>
        <p>
          Całe moje doświadczenie, od samego początku, jest komercyjne. Szybko
          nauczyłem się, że z klientami łączy mnie cel, dlatego świetnie nam się
          współpracuje. Doskonale rozumiem wyzwania z jakimi trzeba się zmierzyć
          i dostarczam rozwiązania skrojone dokładnie do potrzeb klienta.
        </p>
        <p>Zapraszam do współpracy.</p>
      </div>
    </div>
  );
};

export default ContactPage;
