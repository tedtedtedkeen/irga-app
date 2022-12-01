import React, { useEffect } from 'react';
import { ProjectsNav } from "../../../../components/ProjectsList/ProjectsNav";
import styles from "./Other.module.scss";
import { useDatabase } from "../../../../store/DataProvider";
import { Project } from "../../../../components/ProjectsList/Project";
import { Modal } from "../../../../ui/Modal";
import { toggleModal } from "../../../../hooks/toggleModal";
import { Header } from '../../../../ui/DefaultHeader/Header';

const Other = ({
  main = false
}) => {

  const { useCategory } = useDatabase();
  const projects = useCategory("projects");

  let [state, changeState] = toggleModal(<Modal />);

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, []);

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
          <h2>Прочее</h2>
          <div className={styles.miniHead}>
            <p className={styles.p}>
              В своей работе архитекторы используют технологии информационного моделирования (BIM)
            </p>
            <ProjectsNav />
          </div>
        </div>
        <div className={styles.projects}>
          {
			  		projects &&
            projects.map(item => {
              if (item.category === "Прочее") {
                return <Project
                  key={item.id}
                  {...item}
                  route={"other"}
                />
              } 
            })
			  	}
        </div>
      </div>
    </div>
  )
};

export { Other };