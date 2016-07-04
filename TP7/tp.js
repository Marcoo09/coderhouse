
var Estudiantes=function (nombre,telefono,email){
  this.nombre=nombre;
  this.telefono=telefono;
  this.email=email;
}

Estudiantes.prototype.crearLista=function(){
  var div= document.createElement("div");
  div.className='lista';

  var list= document.createElement("li");
  
  var cruz= document.createElement('button');
  cruz.className="cruz";
  cruz.onclick=function(){
    div.parentNode.removeChild(div);
  };
  
  var texto=document.createTextNode(this.nombre+"-"+ this.telefono+ "-"+ this.email);
  list.appendChild(texto);
  list.appendChild(cruz);
  div.appendChild(list);
  document.body.appendChild(div);
  
}


function crear(){
  var nombre=document.getElementById("nombre").value;
  var telefono=document.getElementById("telefono").value;
  var email=document.getElementById("email").value;
  var a = new Estudiantes(nombre,telefono,email);
  a.crearLista();
}

