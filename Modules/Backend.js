var Utility = require("./Utility");
var Globals = require("./Globals");

function getPokemons(offset){
	limit = Globals.pageSize;
	offset = !!offset ? offset : 0;

	return fetch('http://pokeapi.co/api/v2/pokemon/?limit='+limit+'&offset='+offset)
	.then(function(response) { return response.json(); })
	.then(function(responseObject){ 
	    var pokemons = [];
	    for (var i = 0; i < responseObject.results.length; i++) {
	        var newPokemonObject = responseObject.results[i];
	        var pokemonId = offset+ i + 1
	        newPokemonObject.id = pokemonId;
	        newPokemonObject.pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (pokemonId) +'.png';
	        newPokemonObject.name = Utility.Capitalize(newPokemonObject.name);
	        pokemons.push(newPokemonObject);
	    }
		return pokemons;
	});
}


// This function uses the detail Api of the PokeApi, Part 2 of the tutorial will include this endpoint with more details.

function getPokemon(id){

	return fetch('http://pokeapi.co/api/v2/pokemon/'+id)
	.then(function(response) { return response.json(); })
	.then(function(responseObject){ 
		return responseObject;
	});
}



module.exports = {
	getPokemons: getPokemons,
	getPokemon: getPokemon
};