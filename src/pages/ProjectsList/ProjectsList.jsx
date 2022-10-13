import React from "react";
import { ViewProjects } from "../../../components/ViewProjects";
import { ProjectsHeader } from "../../../ui/ProjectsHeader/Header";
import { useData } from "../../../hooks/useData";
import styles from "./ProjectsList.module.scss";
import { Modal } from "../../../ui/Modal";
import { toggleModal } from "../../../hooks/toggleModal";

function ProjectsList() {

  let [state, changeState] = toggleModal(<Modal />);

  return (
    <>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <ProjectsHeader 
        onOpen={changeState}
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
                page={""}
							/>;
          	}
					)
				}
      </div>
    </>
  );
}

export { ProjectsList };
