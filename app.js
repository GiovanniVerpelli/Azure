'use strict'
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

var rubrica = [{ nome: "pippo", professione: "cane" }, { nome: "topolino", professione: "topo" }];
rubrica.push({ nome: "pluto", professione: "cane" });
console.log("Array Iniziale");
console.log(rubrica);

server.route({
    method: 'PUT',
    path: '/api/items/{id}',
    handler: function (request, reply) {
        console.log("Modifico elemento nella posizione " + request.params.id);
        console.log("Modifico elemento %O", rubrica[request.params.id]);
        rubrica[request.params.id].nome = encodeURIComponent(request.query.nome);
        rubrica[request.params.id].professione = encodeURIComponent(request.query.professione);
        console.log("Array Modificato :");
        console.log(rubrica);
        reply(JSON.stringify(rubrica));
    }
});
server.start(function () {
    console.log('Hapi is listening to http://localhost:3000');
});

/* METODO DEL DELETE
server.route({
    method: 'DELETE',
    path: '/api/items/{id}',
    handler: function (request, reply) {
        console.log("Elimino elemento nella posizione " + request.params.id);
        console.log("Elimino elemento %O", rubrica[request.params.id]);
        rubrica.splice(request.params.id, 1);
        console.log("Array Modificato :");
        console.log(rubrica);
        reply(JSON.stringify(rubrica));
    }
});
server.start(function () {
     console.log('Hapi is listening to http://localhost:3000');
});*/