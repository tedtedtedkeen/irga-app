import React from 'react';
import styles from "./Info.module.scss";

const Info = ({ 
    data 
}) => {
    return (
        <section
            className={styles.table}
        >
            <h2>
                { data.firstNum }
            </h2>
            <p>
                { data.firstText }
            </p>
            <h2> 
                { data.secondNum } 
            </h2>
            <p>
                { data.secondText }
            </p>
        </section>
    )
}

export { Info };