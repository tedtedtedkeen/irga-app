import React from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.scss";
import irgaLogoX2 from "../../../../public/images/irga-logo-x2.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { toggleModal } from "../../../hooks/toggleModal";
import { Modal } from "../../../ui/Modal";

function Header({ pad = false }) {

	const [width] = useWindowSize();
	let [state, changeState] = toggleModal(<Modal />);

  return (
		<>
			<Modal 
				isOpen={state}
				onClose={changeState}
			/>
			<header className={pad ? styles.padHeader : styles.header}>
      <img src={irgaLogoX2} alt="IRGA Logotype" />
			<div>
				{
					width < 800
						? <HiOutlineMenuAlt4 
							className={styles.burger}
							onClick={changeState}
						/>
						: <Nav />
				}
			</div>
    	</header>
		</>
  );
}

export { Header };
