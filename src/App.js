import React from "react";
import { Route, Routes } from "react-router-dom"
import "./index.scss";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { ProjectsPage } from "./pages/ProjectsPage";
import { MainPage } from "./pages/Main";
import { SciencePage } from "./pages/SciencesPage/SciencePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="science" element={<SciencePage />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };