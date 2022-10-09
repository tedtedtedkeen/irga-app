import React from "react";
// import { ProjectsNav } from "../../ui/ProjectsHeader/ProjectsNav";
import styles from "./ProjectsList.module.scss";
import { useDatabase } from "../../store/DataProvider";
import { Project } from "./Project/Project";

const ProjectsList = ({
  nav = true,
  page,
  main = true
}) => {

  const { useCategory } = useDatabase();

  const projects = useCategory("projects");

  return (
    <>
      <div className={styles.head}>
        <div>
          <h2>Проекты</h2>
        </div>
        {/* <div className={styles.rightside}>
          <div>
            <p className={styles.paragraph}>
              В своей работе архитекторы используют технологии информационного моделирования (BIM)
            </p>
          </div>
          {nav && <ProjectsNav />}
        </div> */}
      </div>
      <div className={styles.sideProjects}>
        {
					projects &&
          projects.map(item => {
            if (main) {
              if (item.id > 6) return null;
              return <Project
                key={item.id}
                {...item}
              />
            } else {
              return <Project
              key={item.id}
              {...item}
            />
            }
          })
				}
      </div>
    </>
  );
};

export { ProjectsList };
