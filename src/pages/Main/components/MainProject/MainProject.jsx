import React from "react";
import { MoreButton } from "../../../../ui/MoreButton";
import styles from "./MainProject.module.scss";
import { NextButton } from "../NextButton";

function MainProject({
	title, 
	id, 
	subtitle, 
	img, 
	total,
	ide,
	nextSlide = f => f
}) {
	console.log(id);
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>
					{title}
				</h1>
        <div className={styles.bottom}>
          <NextButton 
						id={id}
						ide={ide}
						total={total} 
						page={"projects/"} 
						nextSlide={nextSlide}
					/>
          <div className={styles.right}>
						<p className={styles.p}>
							{ subtitle }
						</p>
            <MoreButton 
							id={id} 
							page={"projects"} 
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
