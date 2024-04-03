import { useState } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Autores from "./pantallas/autores.jsx";
import Libros from "./pantallas/Libros.jsx";
import Home from "./pantallas/Home.jsx";
import NavBar from "./utilitarios/NavBar/NavBar.jsx";

import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";

const ArrnavLinks = [
  { tittle: "Inicio", path: "/", icon: <HomeIcon />},
  { tittle: "Libros", path: "/libros", icon: <BookIcon /> },
  { tittle: "Autores", path: "/autores", icon: <PersonIcon />},
  
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar ArrnavLinks={ArrnavLinks}/>
      <Routes>
        <Route path="/" element={<Home/>}   />   
         <Route
          exact
          path="/autores"
          element={<Autores />}
        />
        <Route
          exact
          path="/libros"
          element={<Libros />}
        />
      </Routes>
     
    </>
  );
}

export default App;
