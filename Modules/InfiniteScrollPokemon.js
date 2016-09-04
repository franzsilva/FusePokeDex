var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");
var Globals = require("./Globals");
var data = Observable();
var loadingNewFeed = Observable(true);
var appendingData = Observable(false);
var paginationOffset = 0;
var isBusy = Observable(false);

fetchData();

function fetchData(appendData) {
				if (isBusy.value === true)
					return;
    			isBusy.value = true;
    			appendingData.value = appendData;
    			Backend.getPokemons(paginationOffset)
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

module.exports = {
    allPokemons: data,
    loadingNewFeed: loadingNewFeed,
    appendingData: appendingData,
    fetchAppendData: function() { fetchData(true); }
};

			

			