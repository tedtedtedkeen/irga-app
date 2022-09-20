import React from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.scss";
import irgaLogo from "../../../public/images/irga-logo.png";
import irgaLogoX2 from "../../../public/images/irga-logo-x2.png";


function Header() {
    return (
        <header
            className={styles.header}
        >
            <img
                src={irgaLogoX2}
                alt="IRGA Logotype"
            />
            <Nav />
        </header>
    );
}

export { Header };