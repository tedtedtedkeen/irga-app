import React from "react";
import { More } from "../More";
import styles from "./BigProject.module.scss";

const BigProject = ({
	data 
}) => {
  return (
    <div className={styles.main}>
      <img src={data.img} alt="Image" />
      <h3 className={styles.title}>{data.title}</h3>
      <p className={styles.category}>{data.category}</p>
      <More 
				id={data.id}
      />
    </div>
  );
};

export { BigProject };
