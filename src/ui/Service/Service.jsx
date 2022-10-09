import React from "react";
import { More } from "../More";

import styles from "./Service.module.scss";

function Service({ data, changeSide = false }) {
    return (
        <div
            className={changeSide ? styles.sideContainer : styles.container}
        >
            <div
                className={styles.exampleImage}
            ></div>
            <div
                className={styles.infoSide}
            >
                <h4>
                    {data.title}
                </h4>
                <p
                    className={styles.subtitle}
                >
                    {data.subtitle}
                </p>
                {/* <div>
                    <More />
                </div> */}
            </div>
        </div>
    );
}

export { Service };