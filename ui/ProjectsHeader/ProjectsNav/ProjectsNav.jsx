import React from "react";
import styles from "./ProjectsNav.module.scss";

const ProjectsNav = () => {
    return (
        <nav>
            <ul
                className={styles.list}
            >
                <li
                    className={styles.withCircle}
                >
                    <div className={styles.circle}></div>
                    Все проекты
                </li>
                <li>
                    Градостроительство
                </li>
                <li>
                    Архитектура
                </li>
                <li>
                    Общественное пространство
                </li>
                <li>
                    Ландшафтный дизайн
                </li>
            </ul>
        </nav>
    );
};

export { ProjectsNav };