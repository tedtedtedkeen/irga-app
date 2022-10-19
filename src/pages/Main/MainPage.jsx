import React, { useEffect } from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { Contacts } from "./components/Contacts";
import { useDatabase } from "../../store/DataProvider";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MainProjectsList } from "./components/MainProjectsList/MainProjectsList";
import { useParams } from 'react-router-dom';

function MainPage() {

  const {id} = useParams();
  const { useCategory } = useDatabase();
  const text = useCategory("aboutUsText");
  let [state, changeState] = toggleModal(<Modal />);

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id]);

  return (
    <>
      <Modal 
				isOpen={state}
				onClose={changeState}
			/>
      <Header 
        onOpen={changeState} 
      />
      <MainProjectsList />
      {
        text &&
        text.map((item, i) => {
          return <AboutCompany 
          key={i}
          {...item}
          showMore={true}
        />
        })
      }
      {
        <ProjectsList />
      }
      <Contacts />
    </>
  );
}

export { MainPage };
