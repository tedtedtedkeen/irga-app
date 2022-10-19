import React, { useEffect } from "react";
import styles from "./SciencePage.module.scss";
import { useParams } from 'react-router-dom';
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { ScienceList } from './components/ScienceList/ScienceList';
import { Header } from '../../ui/DefaultHeader/Header';

const SciencePage = () => {

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
      <ScienceList />
    </div>
  );
};

export { SciencePage };