import React from "react";
import styles from "./autores.module.css";
import { useSelector } from "react-redux";
export default function autores() {
  const dataAutores = useSelector((state) => state.AutorState.ArrAutores);
  return (
    <div className={styles.main}>
      <div className={styles.libros}>
        <div className={styles.cabeceras}>
          
          <div className={styles.item_cabecera}>Titulo</div>
          <div className={styles.item_cabecera}>Descripcion</div>
        </div>
       
          {dataAutores.map((autor) => (
            <div
              className={styles.cabeceras}
              key={`autor-${autor.id}`}
            > 
              <div className={styles.datalistitem}>{autor.id}</div>
              <div className={styles.datalistitem}>{autor.nombres}</div>
              
            </div>
          ))}
        
      </div>
    </div>
  );
}
