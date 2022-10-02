import React from "react";
import styles from "./PrNum.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const PrNum = ({ 
    id,
    green = false
}) => {
    return (
        <div
            className={green ? styles.green : styles.num}
        >
            <button>
                <HiOutlineArrowNarrowLeft 
                    className={styles.arrow}
                />
            </button>
            <p>
                {id}/5
            </p>
            <button>
                <HiOutlineArrowNarrowRight 
                    className={styles.arrow}
                />
            </button>
        </div>
    );
};

export { PrNum };