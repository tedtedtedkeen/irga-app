import React from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { UseData } from "../../hooks/useData";
import { MainProject } from "../../components/MainProject";
import { About } from "../../components/AboutUs/About";
import { ViewProjects } from "../../components/ViewProjects";
import { Contacts } from "../../components/Contacts";
import { Footer } from "../../ui/Footer";

function MainPage() {
    return (
        <>
            <Header />
            <UseData
                col={"mainProjects"}
                render={state => {
                    return state.map((item) => {
                        return (
                            <MainProject 
                                key={item.id}
                                data={item}
                            />
                        );
                    })
                }}
            />
            <UseData 
                col={"oNas"}
                render={state => {
                    return (
                        <About 
                            text={state[0]}
                        />
                    );
                }}
            />
            <UseData 
                col={"semiProjectsText"}
                render={state => {
                    return (
                        <ViewProjects 
                            text={state[0]}
                        />
                    );
                }}
            />
            <Contacts />
            <Footer />
        </>
    );
}

export { MainPage };