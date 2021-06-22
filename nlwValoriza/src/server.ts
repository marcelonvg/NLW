import express, { response } from "express";

const app = express();

/*
* GET    => Buscar uma informacao
* POST   => Inserir (Criar) uma informacao
* PUT    => Alterar uma informacao
* DELETE => Remover um dado
* PATCH  => Alterar uma informacao especifica
*/

app.get("/test", (request, response) =>{
// Request  = Entrando
// Response = Saindo
return response.send("Olá NLW");
});

app.post("/test-post", (resquest, response) => {
return response.send("Olá NLW método POST");
});

app.listen(3000, () => console.log("Server is running"));
