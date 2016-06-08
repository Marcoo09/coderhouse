

var  suma=0;

function esPrimo(a){
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

esPrimo(9);