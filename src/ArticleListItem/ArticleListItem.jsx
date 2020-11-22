import React from "react";
import styles from "./ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import ArticleImage from "../ArticleImage/ArticleImage"

const ArticleListItem = (props) => {
  return (
    <article className={styles.box} onClickCapture={()=> {}}>
      <ArticleImage url={props.article.image._url} title={props.article.title}/>
      <h1 className={styles.header}>{props.article.title}</h1>
      <ArticleTextToggleButton date={props.article.displayDate} shortText={props.article.shortText}/>
    </article>
  );
};

export default ArticleListItem;
