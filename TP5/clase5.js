	var arry = [];
	for(var i=0; i<a.length; i++) {
		arry.push(a[i]);
	}
	return arry;
}


function mySort() {
	var arry =  convertToArray(arguments);
	var returnArry = [];
	var length =  arry.length;
	var indexDeleted;
	
	console.log(arry, length);
		
		for(var i=0; i < length; i++) {
			
			console.log('Valor de i: ',i);
			
			for(var j=0; j < arry.length; j++) {
				
				console.log('Valor de J: ',j);
				console.log('Valor de Arry[j]: ',arry[j]);
				console.log('Valor de returnArry[i]: ', returnArry[i]);
				
				if (typeof returnArry[i] === 'undefined'){
					returnArry[i] = arry[j];
					indexDeleted = j;
				} else if (returnArry[i] < arry[j]) {
					returnArry[i] =  arry[j];
					indexDeleted = j;
					
				}
				
			}
			console.log('Termibi y elimino ', arry[indexDeleted])
			console.log('---------------');
			arry[indexDeleted] = undefined;
		}
	
	
	return returnArry;
}

mySort(1,2,4,5,6,1,8,9,4,8,0)