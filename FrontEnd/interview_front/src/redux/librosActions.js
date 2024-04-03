import {
  getAllLibros
  } from "./librosSlice";
  import axios from "axios";
  
  export const get_libros = () => (dispatch) => {
    // console.log("get_libros")
    axios("http://localhost:3000/libros")
      .then((res) => dispatch(getAllLibros(res.data)))
      .catch((e) => {
        dispatch(setProductError(e))
        console.log("error en la ruta", e)
      });
  
   
  };