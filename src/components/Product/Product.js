import React from "react";
import { projekts } from "../../pages/ProductsListPage";
import classes from "./Product.module.css";

const Product = (props) => {
  const index = projekts
    .map(function (obj) {
      return obj.name;
    })
    .indexOf(`${props.name}`);
  console.log(projekts[index].text);

  const images = projekts[index].img.map((src) => (
    <img key={src} src={src} alt={src}></img>
  ));
  return (
    <article className={classes.product}>
      <h1>{props.name}</h1>
      <h1>{projekts[index].text}</h1>
      <div className={classes.galery}>{images}</div>
    </article>
  );
};

export default Product;
