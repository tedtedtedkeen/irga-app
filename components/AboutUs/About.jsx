import React from 'react';
import { More } from '../../ui/More';
import { Table } from "../../ui/Table";
import { useData } from '../../hooks/useData';
import styles from "./About.module.scss";

const About = ({ showMore = false, text }) => {
    return (
        <div
            className={styles.main}
        >
            <div>
                <h2
                    className={styles.title}
                >
                    О нас
                </h2>
            </div>
            <div
                className={styles.rightside}
            >
                <div>
                    <p
                        className={styles.text}
                    >
                        { text }
                    </p>
                    {showMore && <More 
                        page={"about"}
                    />}
                </div>
                <div
                    className={styles.tables}
                >
                   {
                        useData(
                            "aboutUs",
                            state => {
                                return state.map((data) => {
                                    return (
                                        <Table
                                            key={data.id}
                                            data={data}
                                        />
                                    )
                                })
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export { About };