const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al Pokedex");
});

app.use("/pokemon", pokemon);

app.use((req, res, next) => {
    return res.status(404).json({code: 404, message: "URL no encontrada"});
});
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...")
});










/*
Verbos HTP
GET obtener recursos
POST GUARDAR DATOS
PATCH ACTUALIZACIÓN DE 1 DATO
PUT MODIFICAR TODOS LOS ELEMENTOS
DELETE ELIMINA UN RECURSO
*/
//funcion sin nombre

    /*
    for(i = 0; i<pokemon.length; i++){
        if(pokemon[i].name.toUpperCase() == name.toUpperCase()) {
            return res.status(200).send(pokemon[i]);
        }        
    }
    return res.status(404).send("Pokemon no encontrado");
*/