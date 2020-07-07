import React from "react";
import Article from "../components/Article/Article";

//Api rest

const articles = [
  {
    id: 1,
    title: "Kim jesteśmy",
    author: "Jankowski Olek",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus blanditiis, facilis similique iusto, expedita aspernatur quos, eligendi soluta placeat minima sapiente! Ea, veniam ducimus soluta cumque fugit cupiditate sed ipsum.oremipsum",
  },
  {
    id: 2,
    title: "Do kąd zmierzamy",
    author: "Jankowski Olek",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus blanditiis, facilis similique iusto, expedita aspernatur quos, eligendi soluta placeat minima sapiente! Ea, veniam ducimus soluta cumque fugit cupiditate sed ipsum.oremipsum",
  },
  {
    id: 3,
    title: "Skąd przychodzimy",
    author: "Jankowski Olek",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus blanditiis, facilis similique iusto, expedita aspernatur quos, eligendi soluta placeat minima sapiente! Ea, veniam ducimus soluta cumque fugit cupiditate sed ipsum.oremipsum",
  },
];

const HomePage = () => {
  const articleList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div>{articleList}</div>;
};

export default HomePage;
