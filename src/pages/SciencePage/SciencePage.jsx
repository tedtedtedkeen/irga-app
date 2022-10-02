import React from 'react';
import styles from "./SciencePage.module.scss";
import { useParams } from 'react-router-dom';
import { ProjectsHeader } from '../../../ui/ProjectsHeader/Header';
import { useData } from '../../../hooks/useData';
import { Layout } from "./components/Layout";
import { toggleModal } from "../../../hooks/toggleModal";
import { Modal } from '../../../ui/Modal';

const SciencePage = () => {

  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);

  return (
    <div>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <ProjectsHeader 
        onOpen={changeState}
      />
      {
        useData(
          "science",
          state => state.map(item => {
            return item.id == id 
              ? <Layout 
                key={item.id}
                {...item}
              />
              : null
          })
        )
      }
    </div>
  );
};

export { SciencePage };