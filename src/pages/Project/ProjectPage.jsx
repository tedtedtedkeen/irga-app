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

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  const next = (ide) => {
    if (ide !== projects.filter(item => item.isMain).length) {
      projects.map(item => {
        if (item.ide == ide + 1) {
          navigate(`/projects/${item.id}`)
        } 
      })
    } else {
      navigate(`/projects/${3}`);
    }
  }

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
              next={next}
              projects={projects}
            />
            : null
        })
      }
    </div>
  );
};

export { ProjectPage };