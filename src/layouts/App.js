import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>{<Header />}</header>

          <section className="blog">{<Page />}</section>

          <aside>{<Navigation />}</aside>
        </div>
      </Router>
    );
  }
}

export default App;
