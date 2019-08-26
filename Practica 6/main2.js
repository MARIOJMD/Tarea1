var btn = document.querySelector("#btn");
btn.addEventListener("click", recoger)

function recoger(){
	
var hEntrada = document.querySelector("#hEntrada").value;
var hSalida = document.querySelector("#hSalida").value;

restarHoras(hEntrada, hSalida);


}


function restarHoras(hEntrada, hSalida) {

  
  var inicioSegundos = parseInt(hEntrada.substr(6,2));
  var inicioMinutos = parseInt(hEntrada.substr(3,2));
  var inicioHoras = parseInt(hEntrada.substr(0,2));
  
  var finSegundos = parseInt(hSalida.substr(6,2));
  var finMinutos = parseInt(hSalida.substr(3,2));
  var finHoras = parseInt(hSalida.substr(0,2));

  var transcurridoSegundos = finSegundos - inicioSegundos;
  var transcurridoMinutos = finMinutos - inicioMinutos;
  var transcurridoHoras = finHoras - inicioHoras;
  
  if(transcurridoSegundos < 0){
	  transcurridoMinutos--;
	  transcurridoSegundos = 60 + transcurridoSegundos;
	  }
  
  if (transcurridoMinutos < 0) {
    transcurridoHoras--;
    transcurridoMinutos = 60 + transcurridoMinutos;
  }
  
  var horas = transcurridoHoras.toString();
  var minutos = transcurridoMinutos.toString();
  var segundos = transcurridoSegundos.toString();
  
  if (horas.length < 2) {
    horas = "0"+horas;
  }
  
  
  
  
  var resultado = document.querySelector("#hTrabajadas");
  resultado.textContent=horas+":"+minutos+":"+segundos;
  
}
