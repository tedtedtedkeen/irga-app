import React from 'react';
import styles from "./Project.module.scss";
import { MoreButton } from "../../../ui/MoreButton";
import { Link } from 'react-router-dom';

const Project = ({
  id,
  title,
  img,
  category,
  big
}) => {
  return (
      <section
        className={big ? styles.big : styles.little}
      >
        <img
          src={img} 
          alt="Project Image" 
        />
        <h3>
          { title }
        </h3>
        <p className={styles.p}>
          { category }
        </p>
        <MoreButton 
          page={"project"}
        />
      </section>
  );
};

export { Project };