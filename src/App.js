import React from "react";
import { Route, Routes } from "react-router-dom"
import "./index.scss";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };