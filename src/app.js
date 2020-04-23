#!/usr/bin/env node

const getNamePokemon = require('./main.js');

const [,, ...args] = process.argv;

 if (args[0]) {
     getNamePokemon(args[0])
      .then((result) => console.log(result))
      .catch((err) => console.log('ERROR app.js !!!!', err) );
 } 
 
 if (args[0] === undefined) {
    console.log(`
    --- BIENVENIDO ADATHINK ---

    Instrucciones para ejecutar Programa:

      - Primera Forma => Digitar comando personalizado: pokemon 'Nombre o Nùmero'
         Ejemplo: pokemon eevee

      - Segunda Forma => Ingresar a la carpeta src y ejecutar ./app.js 'Nombre o Nùmero'
         Ejemplo: ./app.js eevee      
    `);
 }

