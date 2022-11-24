import React from 'react';
import styles from "./ScienceList.module.scss";
import { useDatabase } from '../../../../store/DataProvider';
import { ScienceItem } from '../ScienceItem/ScienceItem';

const ScienceList = () => {

  const { useCategory } = useDatabase();
  const science = useCategory("science");

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>Научная деятельность</h2>
        <div className={styles.miniHead}>
          <p className={styles.p}>
            В своей работе архитекторы используют технологии информационного моделирования (BIM)
          </p>
        </div>
      </div>
      <div className={styles.projects}>
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
    </div>
  )
}

export { ScienceList };