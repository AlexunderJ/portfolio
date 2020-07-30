import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/icons/arrow.svg";
import classes from "../styles/ProductsListPage.module.css";

function importAll(r) {
  return r.keys().map(r);
}

const bunnyImages = importAll(
  require.context("../images/projekty/bunny/", false, /\.(png|jpe?g|svg)$/)
);
const fashionImages = importAll(
  require.context("../images/projekty/fashion/", false, /\.(png|jpe?g|svg)$/)
);
const magazynImages = importAll(
  require.context("../images/projekty/magazyn/", false, /\.(png|jpe?g|svg)$/)
);
const kidlabImages = importAll(
  require.context("../images/projekty/kidlab/", false, /\.(png|jpe?g|svg)$/)
);
const obrazyImages = importAll(
  require.context("../images/projekty/obrazy/", false, /\.(png|jpe?g|svg)$/)
);
const socialImages = importAll(
  require.context("../images/projekty/social/", false, /\.(png|jpe?g|svg)$/)
);

export const projekts = [
  {
    name: "bunny",
    text:
      "Identyfikacja wizualna firmy organizującej obozy i eventy dla dzieci",
    img: bunnyImages,
  },
  {
    name: "oakao",
    text:
      "Logo dla marki ubraniowej - praca prywatna, wykonana jako trening projektowania. Założeniem była marka ubrań wchodząca na rynek z luksusowymi ubraniami. Klient od razu wiedziała że chce logo z typografii swojej nazwy. To prezentacja mojej propozycji.",
    img: fashionImages,
  },
  {
    name: "LAYOUT MAGAZYNU",
    text:
      "Okładki i układ artykułu wewnątrz magazynu dobór zdjęć, kompozycja oraz łamanie tekstu. Praca prywatna",
    img: magazynImages,
  },
  {
    name: "kidlab",
    text:
      "Branding dla firmy, która organizuje eksperymenty naukowe dla dzieci praca obejmowała projekt logo którego powstanie i proces prezentuję. Logo sugerujące naukowe zacięcie zajęć i charakterem pokazujące zabawę dla najmłodszych. W procesie tworzenia logotyp nazywany przeze mnie probówką przez klienta został ujęty jako NUREK. Nazwa podłapana przez innych oddaje charakter.",
    img: kidlabImages,
  },
  {
    name: "social Media",
    text: "grafiki do wykorzystania w mediach społecznościowych",
    img: socialImages,
  },
  {
    name: "hobby",
    text: "malowanie technikami tradycyjnymi",
    img: obrazyImages,
  },
];

const ProductsListPage = () => {
  const list = projekts.map((projekt) => (
    <div key={projekt.name} className={classes.project}>
      <Link to={`/portfolio/${projekt.name}`}>
        <div className={classes.foto}>
          <img src={projekt.img[0]} alt={projekt.img[0]}></img>
        </div>
        <div className={classes.fotoName}>{projekt.name}</div>
      </Link>
    </div>
  ));

  return (
    <div className={classes.productList}>
      <div>
        <div>
          P<span>O</span>R
        </div>
        <div>
          TF<span className={classes.full}>O</span>
        </div>
        <div>
          LI<span>O</span>
        </div>
        <img src={arrow} alt="arrow" className={classes.arrow} />
      </div>
      <div className={classes.list}>{list}</div>
    </div>
  );
};

export default ProductsListPage;
