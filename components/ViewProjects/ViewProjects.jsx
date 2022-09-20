import React from "react";
import { ProjectsNav } from "../../ui/ProjectsHeader/ProjectsNav";
import styles from "./ViewProjects.module.scss";

const ViewProjects = ({ text }) => {
    return (
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
                        { text }
                    </p>
                </div>
                <ProjectsNav />
            </div>
        </div>
    );
};

export { ViewProjects };