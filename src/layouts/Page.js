import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";

import ProductsListPage from "../pages/ProductsListPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio" exact component={ProductsListPage} />
        <Route path="/portfolio/:name" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={ErrorPage} />;
      </Switch>
    </>
  );
};

export default Page;
