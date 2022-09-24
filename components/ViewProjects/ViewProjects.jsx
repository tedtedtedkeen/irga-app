import React from "react";
import { ProjectsNav } from "../../ui/ProjectsHeader/ProjectsNav";
import styles from "./ViewProjects.module.scss";
import { UseData } from "../../hooks/useData";
import { BigProject } from "../../ui/BigProject";
import { LilProject } from "../../ui/LilProject";

const ViewProjects = ({ text }) => {
    return (
        <>
            <div
                className={styles.head}
            >
                <div>
                    <h2>
                        Проекты
                    </h2>
                </div>
                <div
                    className={styles.rightside}
                >
                    <div>
                        <p
                            className={styles.paragraph}
                        >
                            {text}
                        </p>
                    </div>
                    <ProjectsNav />
                </div>
            </div>
            <div
                className={styles.sideProjects}
            >
                {/* <UseData
                    col={"semiProjects"}
                    render={state => {
                        return state.map(item => {
                            console.log(item);
                            if (item.id === 3 || item.id === 4) {
                                return (
                                    <BigProject
                                        data={item}
                                        key={item.id}
                                    />
                                );
                            } else {
                                return (
                                    (item.id === 2)     
                                        ? <LilProject
                                            data={item}
                                            pad={true}
                                            key={item.id}
                                        />
                                        : <LilProject
                                            data={item}
                                            key={item.id}
                                        />
                                );
                            }
                        })
                    }}
                /> */}
                <UseData
                    col={"semiOneProjects"}
                    render={state => state.map(item => {
                        return item.id === 3
                            ? <BigProject 
                                data={item}
                                key={item.id}
                            />
                            : <LilProject 
                                data={item}
                                key={item.id}
                            />
                    })}
                />
                <div
                    style={{ height: 100, width: 1000 }}
                ></div>
                <UseData
                    col={"semiTwoProjects"}
                    render={state => state.map(item => {
                        return item.id === 4
                            ? <BigProject 
                                data={item}
                                key={item.id}
                            />
                            : <LilProject 
                                data={item}
                                key={item.id}
                            />
                    })}
                />
            </div>
        </>
    );
};

export { ViewProjects };