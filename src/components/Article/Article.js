import React from "react";

import "./Article.module.css";

const Article = ({ title, author, text }) => {
  return (
    <article>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Article;
