//Dependencias
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index); 
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
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