var Observable = require("FuseJS/Observable");
var Backend = require("Modules/Backend");
var Utility = require("Modules/Utility");
var pokemon = Observable();
this.Parameter.onValueChanged(module,function(param) {
	pokemon.value = param;
	
});


function cancel() {
	router.goBack();
}
module.exports = {
	pokemon: pokemon,
	cancel: cancel
};