import React from "react";
import styles from "./ArticleImage.module.css";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleImage = (props) => {
  return (
    <div className={styles.imgBox}>
        <img className={styles.img} src={props.url} alt={props.title}/>
    </div>
  );
};

export default ArticleImage;
