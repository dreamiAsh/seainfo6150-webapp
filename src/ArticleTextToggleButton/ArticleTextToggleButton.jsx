import React, { useState } from "react";
import styles from "./ArticleTextToggleButton.module.css";

var expanded = true;

// const showMore = () => {
//     expanded = true;
// }

const ArticleTextToggleButton = (props) => {
  const [value, setValue] = useState();

  return (
      <div onClick={() => setValue(!value)}>
        {value ? 
        (<div>
            <p className={styles.content}>{props.shortText}</p>
            <p className={styles.date}>{props.date}</p>
            <button className={styles.button}>Show less</button>
        </div>) : 
        (<button className={styles.button}>Show more</button>)}
      </div>
  );
};

export default ArticleTextToggleButton;
