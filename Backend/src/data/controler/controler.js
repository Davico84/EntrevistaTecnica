const autores= require("../data/autores.json");
const libros= require("../data/libros.json");

const get_autores= (req, res) => {
    
    res.json(autores);
}
const get_libros= (req, res) => {
    res.json(libros);
}
module.exports= { get_autores, get_libros };