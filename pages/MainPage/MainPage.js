import React from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { UseData } from "../../hooks/useData";
import { MainProject } from "../../components/MainProject";
import { About } from "../../ui/AboutUs/About";

function MainPage() {
    return (
        <>
            <Header />
            <UseData
                col={"mainProjects"}
                render={state => {
                    console.log(state);
                    return state.map(({first}, index) => {
                        return (
                            <MainProject 
                                key={index}
                                data={first}
                            />
                        );
                    })
                }}
            />
            <About />
        </>
    );
}

export { MainPage };