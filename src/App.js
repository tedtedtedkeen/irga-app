import React from "react";
import { Route, Routes } from "react-router-dom"
import "./index.scss";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { ProjectsPage } from "./pages/ProjectsPage";
import { MainPage } from "./pages/Main";
import { SciencePage } from "./pages/SciencesPage/SciencePage";
import { ScienceItem } from "./pages/ScienceItem/ScienceItem";
import { ProjectPage } from "./pages/Project/ProjectPage";
import { Eighteen } from "./pages/SciencesPage/childs/eighteen";
import { Nineteen } from "./pages/SciencesPage/childs/nineteen";
import { Architecture } from "./pages/ProjectsPage/childs/architecture";
import { Urban } from "./pages/ProjectsPage/childs/urban";
import { Landscape } from "./pages/ProjectsPage/childs/landscape";
import { Socialspace } from "./pages/ProjectsPage/childs/socialspace";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="projects/:ide" element={<ProjectPage />} />
          <Route path="science" element={<SciencePage />} />
          <Route path="science/:id" element={<ScienceItem />} />
          <Route path="eighteen" element={<Eighteen />}/>
          <Route path="nineteen" element={<Nineteen />} />
          <Route path="architecture" element={<Architecture />}/> 
          <Route path="architecture/:id" element={<ProjectPage />}/> 
          <Route path="urban" element={<Urban />}/> 
          <Route path="urban/:id" element={<ProjectPage />}/> 
          <Route path="socialspace" element={<Socialspace />}/>  
          <Route path="socialspace/:id" element={<ProjectPage />}/>  
          <Route path="landscape" element={<Landscape />}/> 
          <Route path="landscape/:id" element={<ProjectPage />}/> 
        </Route>
      </Routes>
    </>
  );
}

export { App };