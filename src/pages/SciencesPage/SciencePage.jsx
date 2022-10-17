import React from 'react';
import styles from "./SciencePage.module.scss";
import { useParams } from 'react-router-dom';
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { ScienceList } from './components/ScienceList/ScienceList';
import { ScienceHeader } from '../../ui/ScienceHeader';
import { Header } from '../../ui/DefaultHeader/Header';

const SciencePage = () => {

  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);
  
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