import { useState, useEffect } from 'react';
import { StartFirebase } from '../data/StartFirebase';
import { ref, onValue } from "firebase/database";

const db = StartFirebase();

const useData = (
  col, 
  render = f => f
) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        const dataCategory = data[col];
        const dataArr = Object.values(dataCategory);
        if (data !== null) {
          setState(dataArr.sort((a, b) => a.id - b.id));
        }
    })
  }, [])

  return render(state);
}

export { useData };