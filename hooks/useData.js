import React, { useState, useEffect } from 'react';
import { StartFirebase } from '../data/StartFirebase';
import { ref, onValue } from "firebase/database";

const db = StartFirebase();

const UseData = ({ col, render = f => f }) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        const dataCategory = data[col];
        const dataArr = Object.values(dataCategory);
        if (data !== null) {
            setState(dataArr);
        }
    })
  }, [])

  return (
    <div>
        {
            render(state)
        }
    </div>
  )
}

export { UseData };