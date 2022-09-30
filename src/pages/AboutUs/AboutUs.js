import React from "react";
import { Header } from "../../../ui/DefaultHeader/Header";
import { CompanyAbout } from "./components/CompanyAbout";
import { ServicesList } from "./components/ServicesList";
import { Partners } from "./components/Partners";
import { WorkersList } from "./components/WorkersList";

function AboutUs() {
    return (
        <div>
            <Header 
                pad={true}
            />
            <CompanyAbout />
            <ServicesList />
            <Partners />
            <WorkersList />
        </div>
    );
}

export { AboutUs };