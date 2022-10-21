import React, { useEffect } from 'react';
import { ProjectsNav } from "../../../../components/ProjectsList/ProjectsNav";
import styles from "./Architecture.module.scss";
import { useDatabase } from "../../../../store/DataProvider";
import { Project } from "../../../../components/ProjectsList/Project";
import { Modal } from "../../../../ui/Modal";
import { toggleModal } from "../../../../hooks/toggleModal";
import { Header } from '../../../../ui/DefaultHeader/Header';

const Architecture = ({
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
          <div>
            <h2>Проекты</h2>
          </div>
          <div className={styles.subHead}>
            <div>
              <p className={styles.paragraph}>
                В своей работе архитекторы используют технологии информационного моделирования (BIM)
              </p>
            </div>
            <ProjectsNav />
          </div>
        </div>
        <div className={styles.projects}>
          {
			  		projects &&
            projects.map(item => {
              if (item.category === "Архитектура") {
                return main 
                  ? <Project
                      key={item.id}
                      {...item}
                      main={true}
                    />
                  : <Project
                      key={item.id}
                      {...item}
                    />
              } 
            })
			  	}
        </div>
      </div>
    </div>
  )
};

export { Architecture };