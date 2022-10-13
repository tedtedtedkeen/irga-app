import React from "react";
import styles from "./Contacts.module.scss";
import { useDatabase } from "../../../../store/DataProvider";

function Contacts() {

	const { useCategory } = useDatabase();
	const text = useCategory("contactsText");

  return (
    <div className={styles.main}>
      <h2>Контакты</h2>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          {
						text &&
						text.map(item => {
							return (
                <p 
									className={styles.text} 
									key={item.id}
								>
                  {item.text}
                </p>
              );
						})
					}
        </div>
        <div className={styles.square}></div>
      </div>
    </div>
  );
}

export { Contacts };
