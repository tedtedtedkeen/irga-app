import React from 'react';
import styles from "./Layout.module.scss";

const Layout = ({
  id,
  title,
  category,
  img,
  year,
  status,
  square,
  idea,
  country,
  client,
  address
}) => {
  return (
    <div>
      <h2>
        { title }
      </h2>
      <img
        className={styles.bigImage}
        src={img} 
        alt="Image" 
      />
      <h2>
        Идея проекта
      </h2>
      <p>
        { idea }
      </p>
      <div
        className={styles.infoPage}
      >
        <img 
          className={styles.lilImage}
          src={img} 
          alt="Little image" 
        />
        <div
          className={styles.info}
        >
          <div>
            <p>
              Страна
            </p>
            <h3>
              { country }
            </h3>
          </div>
          <div>
            <p>
              Город
            </p>
            <h3>
              { address }
            </h3>
          </div>
          <div>
            <p>
              Площадь
            </p>
            <h3>
              { square }
            </h3>
          </div>
          <div>
            <p>
              Статус
            </p>
            <h3>
              { status }
            </h3>
          </div>
          <div>
            <p>
              Год
            </p>
            <h3>
              { year }
            </h3>
          </div>
          <div>
            <p>
              Заказчик
            </p>
            <h3>
              { client }
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
};

export { Layout };