import React from "react";
import { useData } from "../../hooks/useData";
import styles from "./Contacts.module.scss";

function Contacts() {

    return (
        <div
            className={styles.main}
        >
            <h2>
                Контакты
            </h2>
            <div
                className={styles.container}
            >
                <div
                    className={styles.textContainer}
                >
                    {  
                        useData( 
                            "contactsText",
                            state => state.map(item => {
                                return <p
                                    className={styles.text}
                                    key={item.id}
                                >
                                    { item.text }
                                </p>
                        }))
                    }
                </div>
                <div
                    className={styles.square}
                ></div>
            </div>
        </div>
    );
}

export { Contacts };