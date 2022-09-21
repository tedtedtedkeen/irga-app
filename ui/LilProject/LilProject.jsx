import React from "react";
import { More } from "../More";
import styles from "./LilProject.module.scss";

const LilProject = ({ data, pad = false }) => {
    return (
        <div
            className={pad ? styles.subMain : styles.main}
        >
            <img
                className={styles.img}
                src={data.img} 
                alt="Image"
            />
            <h3
                className={styles.title}
            >
                { data.title }
            </h3>
            <p
                className={styles.category}
            >
                { data.category }
            </p>
            <More />
        </div>
    );
};

export { LilProject };