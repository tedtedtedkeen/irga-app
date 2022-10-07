import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, onValue } from "firebase/database";
import { useEffect } from "react";
import { db } from "../../data/firebase";

// onValue(ref(db), (snapshot) => {
//   const data = snapshot.val();
//   return data;
// })

// const array = onValue(ref(db), (snapshot) => {
//   const ok = snapshot.val();
//   return Object.values(ok);
// })

export const getData = createAsyncThunk(
  "data/getData",
  onValue(ref(db, "science/"), (snapshot) => {
    const data = snapshot.val();
    updateDistance(postElement, data);
  })
)

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: null,
    error: null
  },
  reducers: {

  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [getData.rejected]: (state, action) => {},
  }
});

export default dataSlice.reducer;