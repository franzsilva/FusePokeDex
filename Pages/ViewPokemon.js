var Observable = require("FuseJS/Observable");

var pokemon = this.Parameter.map(function(p){
	return p;
});

function cancel() {
	router.goBack();
}

module.exports = {
	pokemon: pokemon,
	cancel: cancel
};