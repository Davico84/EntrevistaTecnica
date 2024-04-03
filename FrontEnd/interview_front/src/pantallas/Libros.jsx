import React from "react";
import styles from "./Libros.module.css";
import { useSelector } from "react-redux";
export default function libros() {
  const dataLibros = useSelector((state) => state.LibroState.ArrLibros);
  return (
    <div className={styles.main}>
      <div className={styles.libros}>
        <div className={styles.cabeceras}>
          <div className={styles.item_cabecera}>Item</div>
          <div className={styles.item_cabecera}>Titulo</div>
          <div className={styles.item_cabecera}>Descripcion</div>
        </div>
       
          {dataLibros.map((libros) => (
            <div
              className={styles.cabeceras}
              key={`autor-${libros.id}`}
            > 
              <div className={styles.datalistitem}>{libros.id}</div>
              <div className={styles.datalistitem}>{libros.titulo}</div>
              <div className={styles.datalistitem}>{libros.descripcion}</div>
            </div>
          ))}
        
      </div>
    </div>
  );
}
