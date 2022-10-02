import React from "react";
import styles from "./Science.module.scss";
import { Header } from "../../../ui/DefaultHeader/Header";
import { useData } from "../../../hooks/useData";
import { BigProject } from "../../../ui/BigProject";
import { LilScience } from "./components/LilScience";

function Science() {
  return (
    <div>
      <Header />
			<div
				className={styles.head}
			>
				<h2>
					Научная деятельность
				</h2>
				{
					useData(
						"scienceText",
						state => state.map(item => {
							return <p
								key={item.id}
							>
								{ item.text }
							</p>
						})
					)
				}
			</div>
			<div
				className={styles.body}
			>
				{
					useData(
						"science",
						state => state.map(item => {
							return item.id % 2 == 0
								? <BigProject 
										key={item.id}
										data={item}
										page={""}
								/>
								: <LilScience
										key={item.id}
										data={item}
										pad={true}
										page={""}
								/>
						})
					)
				}
			</div>
    </div>
  );
}

export { Science };
