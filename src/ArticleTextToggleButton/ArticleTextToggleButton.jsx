import React, { useState } from "react";
import styles from "./ArticleTextToggleButton.module.css";

var expanded = true;

// const showMore = () => {
//     expanded = true;
// }

const ArticleTextToggleButton = (props) => {
  const [value, setValue] = useState();

  return (
    <div>
      <div onClick={() => setValue(!value)}>
        {value ? 
        (<div>
            <p>{props.shortText}</p>
            <p className={styles.date}>{props.date}</p>
            <button className={styles.button}>Show less</button>
        </div>) : 
        (<button className={styles.button}>Show more</button>)}
      </div>
    </div>
  );
};

export default ArticleTextToggleButton;
