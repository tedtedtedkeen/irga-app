import React from 'react';
import styles from "./Project.module.scss";
import { MoreButton } from "../../../ui/MoreButton";
import { Link } from 'react-router-dom';

const Project = ({
  id,
  title,
  img,
  category
}) => {
  return (
    <Link to="project">
      <section>
        <img 
          src={img} 
          alt="Project Image" 
        />
        <h3>
          { title }
        </h3>
        <Link to="category">
          <p>
            { category }
          </p>
        </Link>
        <MoreButton 
          page={"project"}
        />
      </section>
    </Link>
  );
};

export { Project }