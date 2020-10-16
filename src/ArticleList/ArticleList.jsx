import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    const myList = props.list
    const mappedList = myList.map((listItem) => (
        <li><ArticleListItem article = {listItem}/></li>
    ))
  return (
    <article>
        <ul>{mappedList}</ul>
    </article>
  );
};

export default ArticleList;
