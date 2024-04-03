import React from 'react'
import styles from "./CardContainer.module.css"
import Card from "../Card/Card"


const CardContainer = (props) => {
console.log("propr contanern", props)
  return (
  <> 
    <div className={styles.main}>
    {   
             props.data.map(libroAutor=>{
                    return <Card
                                id={libroAutor.id}
                                key={libroAutor.id}
                                nombre={libroAutor.titulo} 
                                descripcion={libroAutor.descripcion} 
                                autor_id={libroAutor.autor_id}
                                autor={libroAutor.autor}
                            /> 
                })        
    }
    </div>
  </>
  )
}

export default CardContainer