import React from "react";
import { UseData } from "../../hooks/useData";
import { More } from "../../ui/More";
import { Service } from "../../ui/Service";
import styles from "./ServicesList.module.scss";

function ServicesList() {
    return (
        <div
            className={styles.mainList}
        >
            <h2>
                Наши услуги
            </h2>
            <div
                className={styles.list}
            >
                <UseData 
                    col={"servicesList"}
                    render={state => state.map((item) => {
                        if (item.id % 2 == 0) {
                            return <Service 
                                data={item}
                                key={item.id}
                                changeSide={true}
                            />
                        } else {
                            return <Service 
                                key={item.id}
                                data={item}
                            />  
                        }
                    })}
                />
            </div>
        </div>
    );
}

export { ServicesList };