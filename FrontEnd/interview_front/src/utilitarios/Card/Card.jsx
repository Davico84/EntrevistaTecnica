import React from "react";
import styles from "./Card.module.css";
// import { Link } from "react-router-dom";
const Card = (props) => {
    // console.log("props", props)
  return (
    <div className={styles.container}>
      <div className={styles.main_data}>
        <div className={styles.cabecera}>
          <div className={styles.tituloObra}>{props.nombre}</div>
          <div className={styles.boton}>AUTHORID : {props.autor_id} </div>
        </div>
        <div className={styles.cuerpo}>
          <div className={styles.autor}>{props.autor}</div>

          <div className={styles.detalle}>
            {props.descripcion}
          </div>
        </div>
        <div className={styles.pie}>SHOW BOOK</div>
      </div>
    </div>
  );
};

export default Card;
