import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom"
import "./index.scss";
import { useDatabase } from "./store/DataProvider";
import { Layout } from "./components/Layout";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { Project } from "./components/ProjectsList/Project/Project";
import { InfoList } from "./components/InfoList/InfoList";
import { AboutCompany } from "./components/AboutCompany/AboutCompany";
import { MainPage } from "./pages/Main";

function App() {;
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="project" element={<Project />} />
          <Route path="category" element={<InfoList />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };