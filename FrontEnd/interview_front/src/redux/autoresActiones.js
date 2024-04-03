import {
    getAllAutores
  } from "./autoresSlice";
  import axios from "axios";
  
  export const get_autores = () => (dispatch) => {
    axios("http://localhost:3000/autores")
      .then((res) => dispatch(getAllAutores(res.data)))
      .catch((e) => {
        dispatch(setProductError(e))
        console.log("error en la ruta", e)
      });
  
   
  };