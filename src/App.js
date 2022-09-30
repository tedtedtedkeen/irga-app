import React from "react";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutUs } from "./pages/AboutUs";
import { Science } from "./pages/Science";
import { Projects } from "./pages/Projects";
import { Arch } from "./pages/Projects/projects-pages/Arch";
import { Landscape } from "./pages/Projects/projects-pages/Landscape";
import { Space } from "./pages/Projects/projects-pages/Space";
import { Urban } from "./pages/Projects/projects-pages/Urban";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="projects" element={<Projects />}>
            <Route path="projects" element={<Projects />} />
            <Route path="urban" element={<Arch />} />
            <Route path="arch" element={<Landscape />} />
            <Route path="space" element={<Space />} />
            <Route path="landscape" element={<Urban />} />
          </Route>
          <Route path="science" element={<Science />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };