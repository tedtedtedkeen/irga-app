import React from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { CompanyAbout } from "../../components/CompanyAbout";
import { ServicesList } from "../../components/ServicesList";
import { Footer } from "../../ui/Footer";
import { Partners } from "../../components/Partners";

function AboutUs() {
    return (
        <div>
            <Header 
                pad={true}
            />
            <CompanyAbout />
            <ServicesList />
            <Partners />
            <Footer />
        </div>
    );
}

export { AboutUs };