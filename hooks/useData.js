import React, { useState, useEffect } from 'react';
import { StartFirebase } from '../data/StartFirebase';
import { ref, onValue } from "firebase/database";

const db = StartFirebase();

const UseData = ({ col, render = f => f }) => {

  const [state, setState] = useState([]);

  // const createArr = length => [...Array(length)];

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        const dataCategory = data[col];
        console.log(dataCategory);
        if (data !== null) {
            setState(oldAr => [...oldAr, dataCategory])
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