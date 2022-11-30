import React, { useEffect } from "react";
import styles from "./ScienceItem.module.scss";
import { Header } from "../../ui/DefaultHeader/Header";
import { useDatabase } from '../../store/DataProvider';
import { useParams } from 'react-router-dom';
import { ProjectLayout } from "../Project/components/ProjectLayout";
import { Modal } from "../../ui/Modal";
import { toggleModal } from "../../hooks/toggleModal";

const ScienceItem = () => {

  const { useCategory } = useDatabase();
  const science = useCategory("science");
  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id]);

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
        science &&
        science.map(item => {
          return item.id == id
            ? <ProjectLayout
              key={item.id}
              {...item}
            />
            : null
        })
      }
    </div>
  )
}

export { ScienceItem };