import React from 'react';
import styles from "./Project.module.scss";
import { MoreButton } from "../../../ui/MoreButton";
import { Link } from 'react-router-dom';

const Project = ({
  id,
  title,
  img,
  category,
  big,
  main = false,
  route = ""
}) => {

  let page = "";

  if (main) {
    page = "projects";
  } else {
    page = route;
  }

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
          page={page}
          id={id}
        />
      </section>
  );
};

export { Project };