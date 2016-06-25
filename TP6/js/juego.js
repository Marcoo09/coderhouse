var count=0;
var count1=0;
var jugador;
var computadora;

var eleccionUsuario= document.getElementById("eleccion_jugador");
var eleccionComputadora= document.getElementById("eleccion_computadora");


function juego(){

		var opciones=["tijera","papel","piedra"];
		jugador=prompt("Que Eliges: \n ---Piedra--- \n ---Papel--- \n ---Tijera---");
		//console.log(jugador);
		//numero= Math.floor(Math.random()*3.5);
		//computadora= opciones[numero];
		computadora= Math.random();
		//console.log(computadora);

//HAY ALGO QUE NO FUNCIONA EN ESTE IF
		  if(((typeof jugador=="") && (jugador.toLowerCase()!=opciones[0].toLowerCase())  && (jugador.toLowerCase()!=opciones[1].toLowerCase()) && (jugador.toLowerCase()!=opciones[2].toLowerCase()))){
	alert("Introduce un valor correcto");
}
		document.getElementById("eleccion_jugador").innerHTML=" Tu elección es:  " +jugador;

 if(computadora<=0.34){
	computadora="Piedra";
}

else if(computadora<=0.67){
	computadora="Papel";
} 

else if(computadora<=0.99){
	computadora="Tijera";
}

document.getElementById("eleccion_computadora").innerHTML=" La elección del ordenador es:  "+computadora;

ganador();


				
		//}


}
function ganador(){
								//if(typeof jugador !==''){
 
				//if(jugador.toString()=="Piedra" && computadora.toString()="Piedra"){
					 if(jugador==computadora){
					alert("Empate");
					count;
					document.getElementById("contador").innerHTML=count;
					document.getElementById("contador1").innerHTML=count1;
				}
				
				else if(jugador.toLowerCase()=="piedra" ){
					if(computadora=="Tijera"){
						alert("Ganaste");
						count1++;
						document.getElementById("contador").innerHTML=count;
						document.getElementById("contador1").innerHTML=count1;
					}
					else if(computadora=="Papel"){
						
						alert("Perdiste");
						count++;
						document.getElementById("contador").innerHTML=count;
						document.getElementById("contador1").innerHTML=count1;
					
					}
										
				}
				
				else if(jugador.toLowerCase()=="papel" ){
					if(computadora=="Piedra"){
						alert("Ganaste");
						count1++;
						document.getElementById("contador").innerHTML=count;
						document.getElementById("contador1").innerHTML=count1;
					}
					else if(computadora=="Tijera"){
						alert("Perdiste");
						count++;
						document.getElementById("contador").innerHTML=count;
						document.getElementById("contador1").innerHTML=count1;
					}
				}
				
				else if(jugador.toLowerCase()=="tijera" ){
					if(computadora=="Piedra"){
						alert("Perdiste");
						count++;
						document.getElementById("contador").innerHTML=count;
						document.getElementById("contador1").innerHTML=count1;
					}
					else if(computadora=="Papel"){
						alert("Ganaste");
						count1++;
						document.getElementById("contador").innerHTML=count;
						document.getElementById("contador1").innerHTML=count1;
					}
				}



}

window.onload=function(){

	var jugar= document.getElementById('boton');
	jugar.addEventListener("click", juego);

}