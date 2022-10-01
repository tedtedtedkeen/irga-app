import React from "react";
import { Header } from "../../../ui/DefaultHeader/Header";
import { useData } from "../../../hooks/useData";
import { MainProject } from "./components/MainProject";
import { About } from "../../../components/AboutUs";
import { ViewProjects } from "../../../components/ViewProjects";
import { Contacts } from "../../../components/Contacts";

function MainPage() {

    return (
        <>
            <Header />
            {
                useData(
                    "mainProjects",
                    state => {
                        return state.map((item) => {
                            return (
                                <MainProject
                                    key={item.id}
                                    data={item}
                                />
                            );
                        })
                    })
            }
            {
                useData(
                    "oNas",
                    state => {
                        return (
                            <About
                                text={state[0]}
                                showMore={true}
                            />
                        );
                    })
            }
            {
                useData(
                    "semiProjectsText",
                    state => {
                        return (
                            <ViewProjects
                                text={state[0]}
                            />
                        );
                    })
            }
            <Contacts />
        </>
    );
}

export { MainPage };