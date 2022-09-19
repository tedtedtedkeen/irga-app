import React from "react";
import styles from "./PrNum.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const PrNum = ({ id }) => {
    return (
        <div
                className={styles.num}
            >
                <HiOutlineArrowNarrowLeft 
                    className={styles.arrow}
                />
                <p>
                    {id}/5
                </p>
                <HiOutlineArrowNarrowRight 
                    className={styles.arrow}
                />
        </div>
    );
}

export { PrNum };