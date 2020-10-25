import React from "react";
import styles from "./ArticleList.module.css";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    const myList = props.list
    const mappedList = myList.map((listItem) => (
        <li><ArticleListItem article = {listItem}/></li>
    ))
  return (
    <article className={styles.container}>
        <ul className={styles.list}>{mappedList}</ul>
    </article>
  );
};

export default ArticleList;
