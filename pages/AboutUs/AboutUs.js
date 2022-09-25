import React from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { CompanyAbout } from "../../components/CompanyAbout";

function AboutUs() {
    return (
        <div>
            <Header 
                pad={true}
            />
            <CompanyAbout />
        </div>
    );
}

export { AboutUs };