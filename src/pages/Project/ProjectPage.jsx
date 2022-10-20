import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { Header } from '../../ui/DefaultHeader/Header';
import { ProjectLayout } from './components/ProjectLayout';
import { useDatabase } from '../../store/DataProvider';
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {

  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);
  const { useCategory } = useDatabase();
  const projects = useCategory("projects");
  const navigate = useNavigate();

  let main = null;

  if (projects) {
    main = projects.filter(item => item.ide);
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  const next = (ide) => {
    projects.map(item => {
      if (item.ide == ide) {
        navigate(`/projects/${item.id}`)
      } 
    })
  };

  return (
    <div>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <Header 
        onOpen={changeState} 
      />
      {
        projects &&
        projects.map(item => {
          return item.id == id 
            ? <ProjectLayout 
              key={item.id}
              {...item}
              main={main}
              next={next}
            />
            : null
        })
      }
    </div>
  );
};

export { ProjectPage };