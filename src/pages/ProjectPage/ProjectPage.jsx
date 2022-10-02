import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../../../hooks/useData';
import { Layout } from './components/ProjectLayout';
import { ProjectsHeader } from "../../../ui/ProjectsHeader/Header";
import { toggleModal } from '../../../hooks/toggleModal';
import { Modal } from '../../../ui/Modal';
import { SubProject } from '../../../components/SubProject/SubProject';

const ProjectPage = () => {
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
          "projects",
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
      {
        useData(
          "projects",
          state => state.map(item => {
            return item.id == +id + 1
              ? <SubProject
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

export { ProjectPage };