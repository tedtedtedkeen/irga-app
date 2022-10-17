import React from 'react';
import styles from "./ScienceItem.module.sccs";
import { useDatabase } from '../../store/DataProvider';
import { ScienceLayout } from './ScienceLayout';

const ScienceItem = () => {

  const { useCategory } = useDatabase();

  return (
    <div>ScienceItem</div>
  )
}

export { ScienceItem };