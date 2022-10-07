import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDatabase } from "../data/DataProvider";
// import { useData } from "../data/useData";

// import { Routes, Route, Link } from "react-router-dom";
// import { MainPage } from "./pages/MainPage";
// import { AboutUs } from "./pages/AboutUs";
// import { Science } from "./pages/Science";
// import { Projects } from "./pages/Projects";
// import { Arch } from "./pages/Projects/projects-pages/Arch";
// import { Landscape } from "./pages/Projects/projects-pages/Landscape";
// import { Space } from "./pages/Projects/projects-pages/Space";
// import { Urban } from "./pages/Projects/projects-pages/Urban";
// import { Layout } from "./pages/Layout";
// import { NotFound } from "./pages/NotFound";
// import { ProjectPage } from "./pages/ProjectPage";
// import { SciencePage } from "./pages/SciencePage";

function App() {

  const { data, useCategory } = useDatabase();

  const science = useCategory("science");
  console.log(science, "science");

  console.log(data, "data");
  return (
    <>
      <h2>it works</h2>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="science" element={<Science />} />
          <Route path="science/:id" element={<SciencePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> */}
    </>
  );
}

export { App };