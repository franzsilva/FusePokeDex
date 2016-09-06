var Observable = require("FuseJS/Observable");

var Backend = require("../Modules/Backend");

var Globals = require("../Modules/Globals");

var data = Observable();

var loadingNewFeed = Observable(true);

var appendingData = Observable(false);

var paginationOffset = 0;

var isBusy = Observable(false);

fetchPokemon();

function fetchPokemon(appendData) {
	if (isBusy.value === true)
		return;
	isBusy.value = true;
	appendingData.value = appendData;
	Backend.getAllPokemon(paginationOffset)
	    .then(function(responseObject) {
	    	if (!!appendData) {
	    		var items = data.toArray();
	    		for (var i = 0; i < responseObject.length; i++) {
	    			items.push(responseObject[i]);
	    		}
	    		responseObject = items;
	    		appendingData.value = false;
	    	}
	    	data.replaceAll(responseObject);
	    	isBusy.value = false;
	    	loadingNewFeed.value = false;

	    	paginationOffset = paginationOffset + Globals.pageSize;

	    })
	    .catch(function(error) {
	        console.log("Couldn't get pokemons: " + error);
	    });  
	}



function goToPokemon(arg) {
    var pokemon = arg.data;
    router.push("view", pokemon);
}

module.exports = {
    allPokemon: data,
    goToPokemon: goToPokemon,
    appendingData: appendingData,
    loadingNewFeed: loadingNewFeed,
    fetchAppendData: function() { fetchPokemon(true); }
};