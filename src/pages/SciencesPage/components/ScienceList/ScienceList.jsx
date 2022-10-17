import React from 'react';
import styles from "./ScienceList.module.scss";
import { useDatabase } from '../../../../store/DataProvider';
import { ScienceItem } from '../ScienceItem/ScienceItem';
import { ScienceNav } from '../ScienceNav/ScienceNav';

const ScienceList = () => {

  const { useCategory } = useDatabase();
  const science = useCategory("science");

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div>
          <h2>Научная деятельность</h2>
        </div>
        <div className={styles.subHead}>
          <div>
            <p className={styles.paragraph}>
              В своей работе архитекторы используют технологии информационного моделирования (BIM)
            </p>
          </div>
          <ScienceNav />
        </div>
      </div>
      {
        science &&
        science.map(item => {
          return item.id % 2 == 0
            ? <ScienceItem 
              key={item.id}
              {...item}
              big={true}
            />
            : <ScienceItem 
              key={item.id}
              {...item}
            />
        })
      }
    </div>
  )
}

export { ScienceList };