import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BigSubtitle } from '../../../ui/BigSubtitle';
import bristolImage from "../../../public/images/image-bristol.png";
import { useData } from '../../../hooks/useData';
import { Layout } from './ProjectLayout/Layout';

const ProjectPage = () => {
  const {id} = useParams();

  return (
    <div>
      <h1>
        This is project page
      </h1>
      <h3>
        {id} 
      </h3>
      {
        useData(
          "projects",
          state => state.map(item => {
            return item.id == id
              ? <Layout
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

export { ProjectPage };