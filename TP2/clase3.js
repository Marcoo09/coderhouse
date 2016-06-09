

var  suma=0;

function esPrimo(a){
	if(a===1 || a===2){
		
		return "Es Primo";
	}else{
	
	for(i=1;i<a-1;i++){
		if(a%i===0){
			
			suma+=1;
		}
		
	}
	if(suma===1){
		return "Es primo";
	}else{
		return "No es primo";
	}
	}
	
}

esPrimo(9);
