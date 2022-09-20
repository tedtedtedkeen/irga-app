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
        </>
    );
}

export { MainPage };