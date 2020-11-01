import React from "react";
import styles from "./ArticleList.module.css";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    const myList = props.list
    var list3 = [];
    var styleFlag = true;

    var box = [];

    function list3BoxStyle(){
      console.log(styleFlag)
      styleFlag = !styleFlag;
    }

    const mappedList = myList.map((listItem) => {
      if(list3.length < 3)
        list3.push(<li><ArticleListItem article = {listItem}/></li>)
      else {
        box.push(<div className={styleFlag === true ? styles.style1 : styles.style2} onClickCapture={list3BoxStyle.bind(this)} 
                  >{list3}</div>)
        list3 = [];
      }
    })
  return (
    <article className={styles.container}>
        <ul className={styles.list}>{box}</ul>
    </article>
  );
};

export default ArticleList;
