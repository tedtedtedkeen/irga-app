import React from "react";
import styles from "./BigSubtitle.module.scss";

function BigSubtitle({ data, centered = false }) {
    return (
        <>
            <p
                className={centered ? styles.textCenter : styles.text}
            >
                { data.text }
            </p>
        </>
    );
} 

export { BigSubtitle };