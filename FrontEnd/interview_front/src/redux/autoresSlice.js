import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   ArrAutores:[]
};

export const autoresSlice = createSlice({
  name: "autores",
  initialState,
  reducers: {
    getAllAutores: (state,action) => {
        state.ArrAutores= action.payload;
    },
   
  },
});

export const { getAllAutores } = autoresSlice.actions;
export default autoresSlice.reducer;