import React, { useEffect, useState } from 'react';
import { useDatabase } from "../../../../store/DataProvider";
import { MainProject } from "../MainProject";
import styles from "./MainProjectsList.module.scss";

const MainProjectsList = () => {
  const { useCategory } = useDatabase();
  const projects = useCategory("projects");
  const [current, setCurrent] = useState(1);
  console.log(current);

  const nextSlide = (ide) => {
    if (ide == projects.filter(item => item.isMain).length) {
      setCurrent(1)
    } else {
      setCurrent(current + 1)
    }
    console.log(current);
  };

  const render = (current) => {
    return projects && 
    projects.map((item) => {
      console.log(projects.filter(item => item.isMain).length);
      return item.ide == current
        ? <MainProject
            key={item.id}
            total={projects.filter(item => item.isMain).length}
            {...item}
            nextSlide={nextSlide}
          />
        : null
    })
  }

  return (
    <div className={styles.slider}>
      {
        render(current)
      }
    </div>
  );
}

export { MainProjectsList }