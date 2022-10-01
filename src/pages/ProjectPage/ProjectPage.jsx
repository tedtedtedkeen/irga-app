import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BigSubtitle } from '../../../ui/BigSubtitle';
import bristolImage from "../../../public/images/image-bristol.png";
import { useData } from '../../../hooks/useData';

const ProjectPage = () => {
  const {id} = useParams();

  // useData(
  //   "semiOneProjects",
  //   state => state.map(item => {
  //     return item.id === id
  //       ? item
  //       : null
  //   })
  // );

  return (
    <div>
      <h1>This is project page</h1>
      <h3> {id} </h3>
      {
        useData(
          "semiOneProjects",
          state => state.map(item => {
            return item.id == id
              ? <p>
                { item.title }
              </p>
              : null
          })
        )
      }
    </div>
  );
};

export { ProjectPage };