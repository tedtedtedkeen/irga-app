import React from "react";
import styles from "./ProjectsPage.module.scss";
import { Modal } from "../../ui/Modal";
import { toggleModal } from "../../hooks/toggleModal";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import { Header } from '../../ui/DefaultHeader/Header';

function ProjectsPage() {

  let [state, changeState] = toggleModal(<Modal />);

  return (
    <>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <Header 
        onOpen={changeState} 
      />
      <div
				className={styles.projects}
			>
      <ProjectsList 
        main={false}
      />
      </div>
    </>
  );
}

export { ProjectsPage };
