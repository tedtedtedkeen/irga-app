import React from 'react';
import styles from "./Layout.module.scss";
import { useData } from '../../../../../hooks/useData';
import { SubScience } from '../../../../../components/SubScience';

const Layout = ({
  id,
  title,
  img
}) => {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <img 
        src="" 
        alt="" 
      />
      <p>

      </p>
      <div>
        <img 
          src="" 
          alt="" 
        />
        <p>

        </p>
      </div>
      <p>

      </p>
      <img 
        src="" 
        alt="" 
      />
      <p>

      </p>
      <img 
        src="" 
        alt="" 
      />
      <div>
        <p>

        </p>
        <img 
          src="" 
          alt="" 
        />
      </div>
      {
        useData(
          "science",
          state => state.map(item => {
            return item.id != id
              ? <SubScience
                  key={item.id}
                  {...item}
              />
              : null
          })
        )
      }
    </div>
  );
};

export { Layout };