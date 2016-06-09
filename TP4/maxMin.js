function maxMin() {
	var arry = [];

	for(var i=0; i< arguments.length; i++) {
		arry.push(arguments[i]);
	     	var max=arry.sort(function(a,b){ return a < b})[0];
	        var min= arry.sort()[0];
	}
	return max +" "+ min;

}


maxMin(1,3,5,7,8,34);