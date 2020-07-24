import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <div>
        <h1>Product</h1>
      </div>
      <Product name={match.params.name} />
      <Link to="/portfolio">Lista Projektów</Link>
    </>
  );
};

export default ProductPage;
