import React from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { MainProject } from "./components/MainProject";;
import { Contacts } from "./components/Contacts";
import { useDatabase } from "../../store/DataProvider";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function MainPage() {

  const { useCategory } = useDatabase();
  const text = useCategory("aboutUsText");
  const projects = useCategory("projects");
  let [state, changeState] = toggleModal(<Modal />);

  return (
    <>
      <Modal 
				isOpen={state}
				onClose={changeState}
			/>
      <HiOutlineMenuAlt4
				onClick={changeState}
			/>
      <Header />
      {
        projects && 
        projects.map((item) => {
          return item.isMain
            ? <MainProject
            total={projects.filter(item => item.isMain).length}
            key={item.id}
            {...item}
            />
            : null
        })
			}
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
