import React, { useState } from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { useData } from "../../hooks/useData";
import { MainProject } from "../../components/MainProject";
import { About } from "../../components/AboutUs/About";
import { ViewProjects } from "../../components/ViewProjects";
import { Contacts } from "../../components/Contacts";
import { Footer } from "../../ui/Footer";
import { Modal } from "../../ui/Modal";
const bodyScrollLock = require("body-scroll-lock");

function MainPage() {

    const [state, setState] = useState(false);
    const disableScrollLock = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;

    const handlerFunc = () => {
        setState(!state);
        state ? enableBodyScroll(<Modal />) : disableScrollLock(<Modal />);
    }

    return (
        <>
            <Modal 
              onClose={handlerFunc}
              isOpen={state}
            />
            <Header />
            <button
              onClick={handlerFunc}
            >
              Show
            </button>
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
            <Footer />
        </>
    );
}

export { MainPage };