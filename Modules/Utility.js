function Capitalize(x){
    x = x[0].toUpperCase() + x.substring(1);
    return x;

}

module.exports = {
	Capitalize: Capitalize
};