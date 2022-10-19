import React, { useEffect } from "react";
import styles from "./ScienceItem.module.scss";
import { Header } from "../../ui/DefaultHeader/Header";
import { useDatabase } from '../../store/DataProvider';
import { useParams } from 'react-router-dom';
import { ScienceLayout } from './ScienceLayout/ScienceLayout';

const ScienceItem = () => {

  const { useCategory } = useDatabase();
  const science = useCategory("science");
  const {id} = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id]);

  return (
    <div>
      <Header />
      {
        science &&
        science.map(item => {
          return item.id == id
            ? <ScienceLayout 
              key={item.id}
              {...item}
            />
            : null
        })
      }
    </div>
  )
}

export { ScienceItem };