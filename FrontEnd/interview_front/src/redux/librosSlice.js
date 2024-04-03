import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   ArrLibros:[]
};

export const librosSlice = createSlice({
  name: "libros",
  initialState,
  reducers: {
    getAllLibros: (state,action) => {
      
        state.ArrLibros= action.payload;
    },
   
  },
});

export const { getAllLibros } = librosSlice.actions;
export default librosSlice.reducer;