
var tamanho = new Number();
var tamanho = 60;
function start(){

	if((tamanho-1) >= 0){
		tamanho = tamanho-1;
		if(tamanho < 10){
		tamanho = '0'+tamanho;
		}
		contador.innerText='00:'+tamanho+':00';
		setTimeout('start()',1000);
	}
	if(tamanho == 0){
		document.getElementById('corpo').style.backgroundColor = 'red';
		document.getElementById('botao').style.backgroundColor = '#00FF7F';	
		var som = new Audio();	
		som.src = 'som.m4a';
		som.load();
		som.play();
			
	}
}

function iniciar(){
    tamanho = 60;
	start();
	document.getElementById('corpo').style.backgroundColor = '#00FF7F';
	document.getElementById('botao').style.backgroundColor = 'red';

}