function getValues(){
var numero1=document.getElementById("numero1").value;
var numero2=document.getElementById("numero2").value;


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
function sum(){
	var values=getValues();
	var resultado= parseInt(values[0]) + parseInt(values[1]);
	document.getElementById("resultado").innerHTML=resultado;


}

function resta(a,b){
	return a - b;
}
function multiplicacion(a,b){
	return a * b;
}

function dividir(a,b){
	return a / b;
}


