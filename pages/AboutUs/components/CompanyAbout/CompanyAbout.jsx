import React from "react";
import styles from "./CompanyAbout.module.scss";
import { useData } from "../../../../hooks/useData";
import { About } from "../../../../components/AboutUs";
import { BigSubtitle } from "../../../../ui/BigSubtitle";
import dataText from "../../../../data/subtitles-data.json";
import bigImage from "../../../../public/images/big-irga.com";

function CompanyAbout() {
    return (
        <>
            {
                useData(
                    "oNas",
                    state => {
                        return (
                            <About 
                                text={state[0]}
                            />
                        );
                    }
                )
            }
            <div
                className={styles.firstContainer}
            >
                <div>
                    <BigSubtitle 
                        data={dataText[0]}
                    />
                    <BigSubtitle 
                        data={dataText[1]}
                    />
                </div>
                <div
                    className={styles.exampleImage}
                >
                </div>
            </div>
            <div>
                <h2
                    className={styles.title}
                >
                    Основная идея нашей компании
                </h2>
                <BigSubtitle 
                    data={dataText[2]}
                    centered={true}
                />
                <img
                    src={bigImage} 
                    alt="Big image"
                    className={styles.bigImage}
                />
            </div>
            <div
                className={styles.lastContainer}
            >
                <h2
                    className={styles.secondTitle}
                >
                    Концепция проектной организации
                </h2>
                <BigSubtitle 
                    data={dataText[3]}
                    centered={true}
                />
            </div>
        </>
    );
}

export { CompanyAbout };