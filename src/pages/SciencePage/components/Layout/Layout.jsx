import React from 'react';
import styles from "./Layout.module.scss";
import { useData } from '../../../../../hooks/useData';
import { SubScience } from '../../../../../components/SubScience';

const Layout = ({
  id,
  title,
  category,
  img,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
  sixthText,
  seventhText,
  eighthText
}) => {
  return (
    <div
      className={styles.scienceLayout}  
    >
      <h2>
        {title}
      </h2>
      <img
        src={firstImage}
        alt="first-image"
        className={styles.firstImage}
      />
      <p
        className={styles.firstText}
      >
        {
          firstText
        }
      </p>
      <p
        className={styles.secondText}
      >
        {
          secondText
        }
      </p>
      <div
        className={styles.thirdBlock}
      >
        <img 
          src={secondImage} 
          alt="second-image" 
        />
        <div>
          <p>
            {
              thirdText
            }
          </p>
          <p>
            {
              fourthText
            }
          </p>
        </div>
      </div>
      <p
        className={styles.fifthText}
      >
        {
          fifthText
        }
      </p>
      <div
        className={styles.thirdImage}
      >
        <img 
          src={thirdImage}
          alt="third-image" 
        />
      </div>
      <p
        className={styles.sixthText}
      >
        {
          sixthText
        }
      </p>
      <img
        className={styles.fourthImage}
        src={fourthImage} 
        alt="fourth-image" 
      />
      <div
        className={styles.fifthImage}
      >
        <div>
          <p>
            {
              seventhText
            }
          </p>
          <p>
            {
              eighthText
            }
          </p>
        </div>
        <img 
          src={fifthImage}
          alt="fifth-image" 
        />
      </div>
      {
        useData(
          "science",
          state => state.map(item => {
            return item.id != id
              ? <SubScience
                  key={item.id}
                  {...item}
              />
              : null
          })
        )
      }
    </div>
  );
};

export { Layout };