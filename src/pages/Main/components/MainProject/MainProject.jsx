import React from "react";
import { MoreButton } from "../../../../ui/MoreButton";
import styles from "./MainProject.module.scss";
import { NextButton } from "../../../../ui/NextButton";

function MainProject({
	title, 
	id, 
	subtitle, 
	img, 
	page, 
	total,
	index 
}) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>
					{title}
				</h1>
        <div className={styles.bottom}>
          <NextButton 
						id={id} 
						total={total} 
						index={index} 
						page={"projects/"} 
					/>
          <div className={styles.right}>
						<p className={styles.p}>
							{ subtitle }
						</p>
            <MoreButton 
							id={id} 
							page={page} 
						/>
          </div>
        </div>
      </div>
      <img 
				className={styles.image} 
				src={img} 
				alt="House" 
			/>
    </div>
  );
}

export { MainProject };
