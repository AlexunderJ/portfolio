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

export const projekts = [
  {
    name: "bunny",
    text: "bunny text",
    img: bunnyImages,
  },
  {
    name: "oakao",
    text: "oakao text",
    img: fashionImages,
  },
  {
    name: "magazyn",
    text: "magazynImages text",
    img: magazynImages,
  },
  {
    name: "kidlab",
    text: "kidlab text",
    img: kidlabImages,
  },
  {
    name: "obrazy",
    text: "obrazy text",
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
        <div className={classes.fotoName}>{projekt.text}</div>
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
