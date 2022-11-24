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
  main,
  next = f => f
}) => {

  let data = null;

  main.map(item => {
    if (ide == main.length) {
      return data = main[0];
    } else if (item.ide == ide + 1) {
      return data = item;
    }
  });

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
          {country && <InfoElement 
            text={"Страна"}
            title={country}
          />}
          {address && <InfoElement 
            text={"Город"}
            title={address}
          />}
          {square && <InfoElement 
            text={"Площадь"}
            title={square}
          />}
          {status && <InfoElement 
            text={"Статус"}
            title={status}
          />}
          {year && <InfoElement 
            text={"Год"}
            title={year}
          />}
          {client && <InfoElement 
            text={"Заказчик"}
            title={client}
          />}
        </div>
      </div>
      {
        data 
          ? <NextProject 
          ide={ide}
          total={main.length}
          next={next}
          {...data}
          />
          : null
      }
    </div>
  )
};

// ide
// ? <NextProject 
// ide={ide}
// next={next}
// total={main.length}
// title={title}
// img={img}
// />
// : null

export { ProjectLayout };