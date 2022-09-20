import React from 'react';
import styles from "./Table.module.scss";

const Table = ({ data }) => {
    
    return (
        <div
            // className={styles.table}
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
        </div>
    )
}

export { Table };