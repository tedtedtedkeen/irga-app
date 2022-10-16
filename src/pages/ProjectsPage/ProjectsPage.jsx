import React from "react";
import { ProjectsHeader } from "../../components/ProjectsHeader/Header";
import styles from "./ProjectsPage.module.scss";
import { Modal } from "../../ui/Modal";
import { toggleModal } from "../../hooks/toggleModal";

function ProjectsPage() {

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

				}
      </div>
    </>
  );
}

export { ProjectsPage };
