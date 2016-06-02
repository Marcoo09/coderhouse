function getValues(){
var numero1=document.getElementById("numero1").value;
var numero2=document.getElementById("numero2").value;

//Almaceno en un Array
return [numero1,numero2];
}
/*function showResult(value){

	document.getElementById("resultado").innerHTML=value;
}*/

/*function suma(){
	var values=getValues();
	 showResult(sum(values[0],values[1]));
}
*/

//Convertir el contenido del arreglo en numero y pasarselo al div con id resultado.
function sum(){
	var values=getValues();
	var resultado= parseInt(values[0]) + parseInt(values[1]);
	document.getElementById("resultado").innerHTML=resultado;


}
//Operaciones
function res(){
	var values=getValues();
	var resultado= parseInt(values[0]) - parseInt(values[1]);
	document.getElementById("resultado").innerHTML= resultado;
	
}
function mult(){
	var values=getValues();
	var resultado= parseInt(values[0])*(values[1]);
	document.getElementById("resultado").innerHTML=resultado;
}

function div(){
	var values=getValues();
	var resultado=parseInt(values[0]) / parseInt(values[1]);
	document.getElementById("resultado").innerHTML=resultado;


		
}




