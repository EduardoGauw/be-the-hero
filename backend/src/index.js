const express = require('express');
const cors = require('cors');
const routes = require('./routes'); /**passar com ./ para ele nao achar que é um pacote como o express, e sim um arquivo */

const app = express();

app.use(cors()); // sem nada permite que qualquer aplicação adentre a esse backend (porque estamos em desenvolvimento), depois vamos dizer uma origem para adentrar a ele.
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar/Listar informação do back-end - ex: listagem, dado de usuario, qualquer tipo de retorno do backend
 * POST: Criar uma informação no back-end - ex: adicionar um usuario, ou algo assim.
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * - Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * - Route Params: parâmetros utilizados para identificar recursos
  * ex: quer dizer que app.post('/users/:id, ... => isso informa que tudo que vem depois da barra, vai ser o id do usuario
  * tipo localhost:3333/users/1, está querendo buscar o usuario com id 1, apenas esse.
  *  - Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECTE * FROM users
 * Query Builder: tablet('users').select('*').where() - ouseja, com codigo javascript - Fica mais facil para migrar de banco de dados - KNEX.JS
 */

 /** 
app.post('/users', (request, response) => {
     Query Params
        const params = request.query;
    
        console.log(params);
    
    
    Route Params
     
    
        const body = request.body;
    
        console.log(body);
    
        return response.json({
            evento: 'Semana OmniStack 11.0',
            aluno: 'Daniel Siqueira de Gauw'
        });
    });
    
    */

app.listen(3333);