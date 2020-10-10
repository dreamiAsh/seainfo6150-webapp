import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <h1>{props.article.title}</h1>
      <address class="author">by {props.article.author} (<a rel="author" href={props.article.authorEmail}> kate.farley@nytimes.com</a>)</address>
      <datetime>{props.article.displayDate}</datetime>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
