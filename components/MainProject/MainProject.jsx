import React from 'react';
import { More } from "../../ui/More";
import styles from "./MainProject.module.scss";
import { Subtitle } from "../../ui/Subtitle";
import { PrNum } from "../../ui/PrNum";

function MainProject({ data }) {

    return (
        <div 
            className={styles.main}
        >
            <div
                className={styles.left}
            >
                <div
                    className={styles.title}
                >
                    <h1>
                        {data.title}
                    </h1>
                </div>
                <div
                    className={styles.bottom}
                >
                    <PrNum 
                        id={data.id}
                    />
                    <div>
                        <Subtitle 
                            subtitle={data.subtitle}
                        />
                        <More />
                    </div>
                </div>
            </div>
            <img 
                className={styles.image}
                src={data.img} 
                alt="House" 
            />
        </div>
    );
}

export { MainProject };