import React from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { CompanyStory } from "./components/CompanyStory";
import { ServicesList } from "./components/ServicesList";
import { Partners } from "./components/Partners";
import { TeamList } from "./components/TeamList";
import { useDatabase } from "../../store/DataProvider";

function About() {

  const { useCategory } = useDatabase();
  const pageText = useCategory("aboutUsPageText")  

  return (
    <>
      <Header pad={true} />
      {
        pageText &&
        pageText.map(item => {
          console.log(item);
          return <CompanyStory 
            key={item.id}
            {...item}
          />
        })
      }
      <ServicesList />
      <Partners />
      <TeamList />
    </>
  );
}

export { About };
