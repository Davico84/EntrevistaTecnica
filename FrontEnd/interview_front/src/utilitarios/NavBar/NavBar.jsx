import React from "react";
import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
function NavBar() {
  return (
    <div className={styles.Nav_Bar_main}>
      <div className={styles.menu}>
        <div className={styles.menu_item_caja}>
          <Link to="/">
            {location.pathname === "/" ? (
              <div className={styles.menu_item_item_a}>Home</div>
            ) : (
              <div className={styles.menu_item_item}>Home</div>
            )}
          </Link>
        </div>
        <div className={styles.menu_item_caja}>
          <Link to="/autores">
            {location.pathname === "/autores" ? (
              <div className={styles.menu_item_item_a}>Autores</div>
            ) : (
              <div className={styles.menu_item_item}>Autores</div>
            )}
          </Link>
        </div>
        <div className={styles.menu_item_caja}>
        <Link to="/libros">
            {location.pathname === "/libros" ? (
              <div className={styles.menu_item_item_a}>Libros</div>
            ) : (
              <div className={styles.menu_item_item}>Libros</div>
            )}
          </Link>
        </div>
        
      </div>

      <div className={styles.redes}>
        <div className={styles.redes_item_1}></div>
        <div className={styles.redes_item_2}></div>
        <div className={styles.redes_item_3}></div>
      </div>
    </div>
  );
}

export default NavBar;
