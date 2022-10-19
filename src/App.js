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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/projects/:ide" element={<ProjectPage />} />
          <Route path="science" element={<SciencePage />} />
          <Route path="/science/:id" element={<ScienceItem />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };