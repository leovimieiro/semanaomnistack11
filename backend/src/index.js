const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');
 
const app = express();

app.use(cors());    
app.use(express.json());
app.use(routes);

/*
 Metodos HTTP:

 GET: buscar/listar uma informação do back-end
 POST: criar uma informação no back-end
 PUT: alterar uma informação no back-end
 DELETE: deletar uma informação no back-end
*/
/*
tipos de parametros: 

Query params parametros nomeados enviados na rota apos "?" (filtros, paginação....)
Route params: parametros utilizados para identificar recursos
Request bady: corpo da requisição utilizado para criar ou alterar recursos
*/


app.listen(3333);
