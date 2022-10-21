import React, { useEffect } from 'react';
import { ScienceItem } from "../../components/ScienceItem";
import { useDatabase } from '../../../../store/DataProvider';
import styles from "./Eighteen.module.scss";
import { ScienceNav } from '../../components/ScienceNav/ScienceNav';
import { Header } from '../../../../ui/DefaultHeader/Header';
import { Routes, useParams, Route, Outlet } from 'react-router-dom';
import { toggleModal } from "../../../../hooks/toggleModal";
import { Modal } from "../../../../ui/Modal";

const Eighteen = () => {

  let [state, changeState] = toggleModal(<Modal />);
  
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, []);

  const { useCategory } = useDatabase();
  const science = useCategory("science");

  return (
    <div>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <Header 
        onOpen={changeState} 
      />
      <div className={styles.container}>
        <div className={styles.head}>
          <h2>Научная деятельность</h2>
          <div className={styles.miniHead}>
            <p className={styles.p}>
              В своей работе архитекторы используют технологии информационного моделирования (BIM)
            </p>
            <ScienceNav />
          </div>
        </div>
        <div className={styles.projects}>
          {
            science &&
            science.map(item => {
              if (item.id == 1) {
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
              } else {
                return null;
              }
            })
          }
        </div>
      </div>
    </div>
  );
};


export { Eighteen };