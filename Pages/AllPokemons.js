var InfiniteScrollPokemon = require("Modules/InfiniteScrollPokemon");


function goToPokemon(arg) {
    var pokemon = arg.data;
    router.push("view", pokemon);
}

module.exports = {
    pokemons: InfiniteScrollPokemon.allPokemons,
    goToPokemon: goToPokemon,
    loadingNewFeed: InfiniteScrollPokemon.loadingNewFeed,
    appendingData: InfiniteScrollPokemon.appendingData,
    fetchAppendData: InfiniteScrollPokemon.fetchAppendData
};