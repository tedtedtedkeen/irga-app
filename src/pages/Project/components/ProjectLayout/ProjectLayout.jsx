import React from 'react';
import { TitleWithParagraph } from '../../../../ui/TitleWithParagraph';
import { InfoElement } from '../InfoElement/InfoElement';
import { NextProject } from '../NextProject';
import styles from "./ProjectLayout.module.scss";

const ProjectLayout = ({
  id,
  ide,
  title,
  category,
  img,
  year,
  status,
  square,
  idea,
  country,
  client,
  address,
  projects,
  next = f => f
}) => {
  return (
    <div
      className={styles.container}
    >
      <h2 className={styles.title}>
        { title }
      </h2>
      <img 
        className={styles.img}
        src={img}
        alt="main-img" 
      />
      <TitleWithParagraph 
        title={"Идея проекта"}
        subtitle={idea}
      />
      <div className={styles.block}>
        <img 
          className={styles.scdimg}
          src={img}
          alt="sub-img" 
        />
        <div className={styles.infoList}>
          <InfoElement 
            text={"Страна"}
            title={country}
          />
          <InfoElement 
            text={"Город"}
            title={address}
          />
          <InfoElement 
            text={"Площадь"}
            title={square}
          />
          <InfoElement 
            text={"Статус"}
            title={status}
          />
          <InfoElement 
            text={"Год"}
            title={year}
          />
          <InfoElement 
            text={"Заказчик"}
            title={client}
          />
        </div>
      </div>
      {
        ide
          ? <NextProject 
          ide={ide}
          next={next}
          total={projects.filter(item => item.ide).length}
          />
          : null
      }
    </div>
  )
};

export { ProjectLayout };