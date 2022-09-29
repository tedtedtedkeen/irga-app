import React from "react";
import { ViewProjects } from "../../components/ViewProjects";
import { Header } from "../../ui/DefaultHeader/Header";
import { Footer } from "../../ui/Footer";
import { useData } from "../../hooks/useData";
import styles from "./Projects.module.scss";

function Projects() {
  return (
    <>
      <Header />
      <div
				className={styles.projects}
			>
        {
          useData(
						"semiProjectsText", 
						(state) => {
              return <ViewProjects 
								text={state[0]} 
								nav={false} 
							/>;
          	}
					)
				}
      </div>
      <Footer />
    </>
  );
}

export { Projects };
