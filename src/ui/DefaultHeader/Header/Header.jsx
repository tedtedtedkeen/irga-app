import React, { useEffect, useState } from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.scss";
import irgaLogoX2 from "../../../../public/images/irga-logo-x2.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { toggleModal } from "../../../hooks/toggleModal";
import { Modal } from "../../../ui/Modal";
import { App } from "../../../App";

// function useWindowSize() {
// 	const [size, setSize] = useState([window.innerWidth]);
// 	useEffect(() => {
// 		const handleResize = () => {
// 			setSize([window.innerWidth])
// 		}
// 		window.addEventListener("resize", handleResize)
// 		return () => {
// 			window.removeEventListener("resize", handleResize);
// 		};
// 	}, [])
// 	return size;
// }

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
