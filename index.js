const express = require('express');
const app = express();
/*
Verbos HTP
GET
POST GUARDAR DATOS
PATCH ACTUALIZACIÓN DE 1 DATO
PUT MODIFICAR TODOS LOS ELEMENTOS
DELETE ELIMINA UN RECURSO
*/
//funcion sin nombre

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido");
});
app.listen(3000, () => {
    console.log("Server is running...")
});