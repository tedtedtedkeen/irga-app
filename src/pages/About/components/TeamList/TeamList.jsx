import React from 'react';
import styles from "./TeamList.module.scss";
import { useDatabase } from '../../../../store/DataProvider';
import { TeamMember } from './TeamMember';

const TeamList = () => {

  const { useCategory } = useDatabase();

  const workers = useCategory("workersList");

  return (
    <div
      className={styles.list}
    >
      {
        workers && 
        workers.map(item => {
          return <TeamMember
            key={item.id} 
            {...item}
          />
        })
      }
    </div>
  )
};

export { TeamList };