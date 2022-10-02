import React from 'react';
import { More } from '../../../../../ui/More';
import styles from "./LilScience.module.scss";

const LilScience = ({
  data,
  pad = false
}) => {
  return (
    <div
      className={pad ? styles.science : styles.main}
    >
      <img 
        src={data.img} 
        alt="image" 
      />
      <h3>
        {data.title}
      </h3>
      <p
        className={styles.p}
      >
        {data.category}
      </p>
      <More 
        id={data.id}
        page={""}
      />
    </div>
  );
};

export { LilScience };