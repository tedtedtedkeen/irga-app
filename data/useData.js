

// import { ref, onValue } from "firebase/database";
// import { useState, useEffect } from "react";
// import { useFirebase } from "./firebase";

// const db = useFirebase();



// const useData = (cat) => {

//   const [state, setState] = useState()

//   useEffect(() => {
//     onValue(ref(db, cat), (snapshot) => {
//       const data = snapshot.val();
//       setState(Object.values(data));
//     })
//   }, []) 

//   return state;
// };

// export { useData };