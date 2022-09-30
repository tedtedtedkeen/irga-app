import React from 'react';
import { useData } from '../../../../hooks/useData';
import styles from "./WorkersList.module.scss";
import { Worker } from "../../../../ui/Worker";

const WorkersList = () => {
  return (
    <div
      className={styles.main}
    >
      <h2>
        Наша команда
      </h2>
      <div
        className={styles.list}
      >
        <div
          className={styles.listElement}
        >
          {
            useData(
              "workersList",
              state => state.map(item => {
                return <Worker 
                  key={item.id}
                  {...item}
                />
              })
            )
          }
        </div>
        <div
          className={styles.listElement}
        >
          {
            useData(
              "workersSecondList",
              state => state.map(item => {
                return <Worker 
                  key={item.id}
                  {...item}
                />
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export { WorkersList };