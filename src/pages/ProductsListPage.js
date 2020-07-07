import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/ProductsListPage.module.css";

const products = ["car", "bike", "motorcycle"];

const ProductsListPage = () => {
  const list = products.map((product) => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className={classes.list}>
      <h1>Lista produktów</h1>
      <div>
        <ul className={classes.list}>{list}</ul>
      </div>
    </div>
  );
};

export default ProductsListPage;
