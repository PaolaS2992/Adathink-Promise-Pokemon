const Pokedex = require('pokedex-promise-v2');

const poke = new Pokedex();

const getNamePokemon = (inputData) => {
    return poke.getPokemonByName(inputData)
        .then((response) => {
            if (response.id === parseInt(inputData) || response.name === inputData) {
                const newObj = {
                    Id: response.id,
                    Nombre: response['name'],
                    Tipo: response['types'],
                    Poder: response['abilities']
                }
                return newObj;
            }
        })
        .catch((error) => {
          // console.log('ERROR main.js !!!!: ', error);
          console.log('!Pokemon no encontrado¡');
        });
};

module.exports = getNamePokemon;