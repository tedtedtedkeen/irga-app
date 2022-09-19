import React from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.scss";
import irgaLogo from "../../../public/images/irga-logo.png";

function Header() {
    return (
        <header
            className={styles.header}
        >
            <img
                src={irgaLogo}
            />
            <Nav />
        </header>
    );
}

export { Header };