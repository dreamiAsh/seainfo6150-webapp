import React from "react";
import styles from "./ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

const ArticleListItem = (props) => {
  return (
    <article className={styles.box} onClickCapture={()=> {}}>
      <h1 className={styles.header}>{props.article.title}</h1>
      <ArticleTextToggleButton date={props.article.displayDate} shortText={props.article.shortText}/>
    </article>
  );
};

export default ArticleListItem;
