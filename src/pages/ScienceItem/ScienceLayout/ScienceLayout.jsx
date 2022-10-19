import React from 'react';
import styles from "./ScienceLayout.module.scss";

const ScienceLayout = ({
  title,
  id, 
  category,
  img,
  firstText,
  firstImage,
  secondText,
  secondImage,
  thirdText,
  thirdImage,
  fourthText,
  fourthImage,
  fifthText,
  fifthImage,
  sixthText,
  seventhText,
  eighthText,
  big
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        { title }
      </h2>
      <img 
        className={styles.firstImage}
        src={firstImage}
        alt="first-image" 
      />
      <p className={styles.firstText}>
        { firstText }
      </p>
      <p className={styles.secondText}>
        { secondText }
      </p>
      <div className={styles.firstBlock}>
        <img 
          className={styles.secondImage}
          src={secondImage} 
          alt="second-image" 
        />
        <div>
          <p className={styles.thirdText}>
            { thirdText }
          </p>
          <p className={styles.fourthText}>
            { fourthText }
          </p>
        </div>
      </div>
      <p className={styles.fifthText}>
        { fifthText }
      </p>
      <img 
        className={styles.thirdImage}
        src={thirdImage} 
        alt="third-image" 
      />
      <div className={styles.secondBlock}>
        <p className={styles.sixthText}>
          { sixthText }
        </p>
        <img 
          className={styles.fourthImage}
          src={fourthImage} 
          alt="fourth-image" 
        />
      </div>
      <div className={styles.thirdBlock}>
        <div>
          <p className={styles.seventhText}>
            { seventhText }
          </p>
          <p className={styles.eighthText}>
            { eighthText }
          </p>
        </div>
        <img 
          className={styles.fifthImage}
          src={fifthImage} 
          alt="fifth-image" 
        />
      </div>
    </div>
  )
};

export { ScienceLayout };