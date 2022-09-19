import React, { useEffect } from "react";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AboutUs } from "../pages/AboutUs";
import { Science } from "../pages/Science";
import { Projects } from "../pages/Projects";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/science" element={<Science />} />
            </Routes>
        </>
    )
}

export { App };