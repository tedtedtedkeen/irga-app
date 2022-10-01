import React from "react";
import { ProjectsNav } from "../../ui/ProjectsHeader/ProjectsNav";
import styles from "./ViewProjects.module.scss";
import { useData } from "../../hooks/useData";
import { BigProject } from "../../ui/BigProject";
import { LilProject } from "../../ui/LilProject";

const ViewProjects = ({ text, nav = true }) => {
  return (
    <>
      <div className={styles.head}>
        <div>
          <h2>Проекты</h2>
        </div>
        <div className={styles.rightside}>
          <div>
            <p className={styles.paragraph}>{text}</p>
          </div>
          {nav && <ProjectsNav />}
        </div>
      </div>
      <div className={styles.sideProjects}>
        {
					useData(
						"projects",
						state => state.map(item => {
							if (item.id > 6) return null;
							return (item.id == 3 || item.id == 4)
								? <BigProject 
									data={item}
									key={item.id}
								/>
								: <LilProject 
									data={item}
									key={item.id}
								/>
						})
					)
				}
        {/* <div
                    style={{ height: 100, width: 1000 }}
                ></div> */}
      </div>
    </>
  );
};

export { ViewProjects };
