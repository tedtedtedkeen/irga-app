import React from 'react';
import styles from "./Modal.module.scss";
import bigLogo from "../../public/images/big-irga.png";
import { MdClear } from "react-icons/md";
import { ModalNav } from './ModalNav';
import { useData } from '../../hooks/useData';

const Modal = ({
  onClose = f => f,
  isOpen = false
}) => {

  return (isOpen == false) 
    ? null
    : <div
        className={styles.main}
        onClick={onClose}
      >
        <img
          src={bigLogo}
          alt="Irga B.I.G"
        />
        <div>
          <ModalNav />
          {
            useData( 
                "contactsText",
                state => state.map(item => {
                    return item.id !== 4
                        ? null
                        : <p
                            key={item.id}
                        >
                            { item.text }
                        </p>
            }))
          }
        </div>
        <button
          className={styles.button}
          onClick={onClose}
        >
          <MdClear />
        </button>
      </div>
};

export { Modal };