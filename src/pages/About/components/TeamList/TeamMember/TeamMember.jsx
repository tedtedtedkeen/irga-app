import React from 'react';
import styles from "./TeamMember.module.scss";

const TeamMember = ({ 
  id, 
  name, 
  surName, 
  img, 
  position 
}) => {
  return (
    <div
      className={id % 3 == 0 
        ? styles.main
        : styles.subMain
      }
    >
      {
        img
          ? <img 
            className={styles.image}
            src={img}
            alt="Image"
          />
          : <div
            className={styles.noImage}
          ></div>
      }
      <h4>
        {name} {surName}
      </h4>
      <p>
        {position}
      </p>
    </div>
  )
}

export { TeamMember };