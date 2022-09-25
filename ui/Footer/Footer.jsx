import React from "react";
import { Nav } from "../DefaultHeader/Nav";
import logoImage from "../../public/images/irga-logo-x2.png";
import styles from "./Footer.module.scss";
import { UseData } from "../../hooks/useData";
import inst from "../../public/images/instagram.png";
import fcbk from "../../public/images/facebook.png";

function Footer() {
    return (
        <footer
            className={styles.footer}
        >
            <div
                className={styles.leftSide}
            >
                <img 
                    src={logoImage}
                    alt="logo"
                    className={styles.image}
                />
                <p>
                    © 2022  Все права защищены
                </p>
            </div>
            <div
                className={styles.rightSide}
            >
                <Nav />
                <div
                    className={styles.paragraphs}
                >
                    <UseData 
                        col={"contactsText"}
                        render={state => state.map(item => {
                            return item.text === "Адрес:" || item.text === "Контакты"
                                ? null
                                : <p
                                    key={item.id}
                                >
                                    { item.text }
                                </p>
                        })}
                    />
                    <img 
                        src={inst} 
                        alt="inst" 
                    />
                    <img 
                        src={fcbk} 
                        alt="fcbk" 
                    />
                </div>
            </div>
        </footer>
    );
}

export { Footer };