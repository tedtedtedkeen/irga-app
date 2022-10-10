import React from 'react';
import styles from "./InfoList.module.scss";
import { useDatabase } from '../../store/DataProvider';
import { Info } from "./Info";
import { ProjectsNav } from '../ProjectsHeader/ProjectsNav/ProjectsNav';

const InfoList = () => {

  const { useCategory } = useDatabase();

  const tableData = useCategory("aboutUs");
    
    return (
      <div>
        {
          tableData && 
          tableData.map((item) => {
            return <Info
              key={item.id}
              data={item}
            />
          })
        }
      </div>
    );
}

export { InfoList };