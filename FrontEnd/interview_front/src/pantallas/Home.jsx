import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { get_autores } from "../redux/autoresActiones/";
import { get_libros } from "../redux/librosActions";
import styles from "./Home.module.css";
import CardContainer from "../utilitarios/CardContainer/CardContainer";
import TextField from '@mui/material/TextField';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_autores());
    dispatch(get_libros());
  }, []);
  const dataLibros = useSelector((state) => state.LibroState.ArrLibros);
  const dataAutores = useSelector((state) => state.AutorState.ArrAutores);

  function combinarLibrosYAutores(dataLibros, dataAutores) {
    const librosConAutores = dataLibros.map((libro) => {
      const autor = dataAutores.find((autor) => autor.id === libro.autor_id);
      return {
        ...libro,
        autor: autor ? autor.nombres : "Autor desconocido",
      };
    });
    return librosConAutores;
  }
  const librosConAutores = combinarLibrosYAutores(dataLibros, dataAutores);

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = librosConAutores.filter((item) =>
    item.titulo.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.ContainerHome}>
      <div className={styles.cabecera}>
        <div className={styles.tituloHome}>Bett Seller all Times </div>
        <div className={styles.tituloHome}>
          <TextField
            className={styles.cajatexto}
            id="filled-basic"
            label="Write something to search..."
            variant="filled"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className={styles.formulario}>
        <CardContainer data={filteredData} />
      </div>
    </div>
  );
}

export default Home;
