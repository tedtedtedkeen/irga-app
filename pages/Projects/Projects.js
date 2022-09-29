import React, { useState } from "react";
import { ViewProjects } from "../../components/ViewProjects";
import { ProjectsHeader } from "../../ui/ProjectsHeader/Header";
import { Footer } from "../../ui/Footer";
import { useData } from "../../hooks/useData";
import styles from "./Projects.module.scss";
import { Modal } from "../../ui/Modal";
const bodyScrollLock = require("body-scroll-lock"); 

function Projects() {

  const [state, setState] = useState(false);
  const disableScrollLock = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const handlerFunc = (show) => {
    setState(!show);
    show ? enableBodyScroll(<Modal />) : disableScrollLock(<Modal />);
  }

  return (
    <>
      <Modal 
        onClose={handlerFunc}
        isOpen={state}
      />
      <ProjectsHeader 
        open={handlerFunc}
        isOpen={state}
      />
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
