import React from 'react';
// import arrow from "../../public/images/arrow.png";
import styles from "./More.module.scss";
import { CgArrowLongRight } from "react-icons/cg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const More = () => {
    return (
        <button
            className={styles.button}
        >
            <p
                className={styles.text}
            >
                Подробнее
            </p>
            <div
                className={styles.strelka}
            >
                <HiOutlineArrowNarrowRight 
                    className={styles.arrow}
                />
                <div
                    className={styles.circle}
                ></div>
            </div>
        </button>
    )
};

export { More };