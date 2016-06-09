function iniciales(nombre){
	var a=[];
	var palabras= nombre.split(" ");
	for(var i=0;i<palabras.length;i++){
	
	a.push(palabras[i].charAt(0));
	
	
	
	
	}
	
	return a.join('').toUpperCase();
	
	
	
	
	
	
}

iniciales("Marco Fiorito");
