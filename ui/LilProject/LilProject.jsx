import React from "react";
import { More } from "../More";
import styles from "./LilProject.module.scss";
// import { Link } from "react-router-dom";

const LilProject = ({ 
  data, 
  pad = false,
  page
}) => {
  console.log(data.id);
  return (
    <div 
      className={pad ? styles.subMain : styles.main}
    >
      <img 
        className={styles.img} 
        src={data.img} 
        alt="Image" 
      />
      <h3 
        className={styles.title}
      >
        {data.title}
      </h3>
      <p 
        className={styles.category}
      >
        {data.category}
      </p>
			<More
        page={page}
				id={data.id}
			/>
    </div>
  );
};

export { LilProject };
