import React from 'react';
import { useDatabase } from '../../../../store/DataProvider';
import { ScienceItem } from '../ScienceItem/ScienceItem';

const ScienceList = () => {

  const { useCategory } = useDatabase();
  const science = useCategory("science");

  return (
    <div>
      {
        science &&
        science.map(item => {
          return item.id % 2 == 0
            ? <ScienceItem 
              key={item.id}
              {...item}
              big={true}
            />
            : <ScienceItem 
              key={item.id}
              {...item}
            />
        })
      }
    </div>
  )
}

export { ScienceList };