var inputEmail = document.querySelector("#email");
inputEmail.addEventListener('change', function(event) {

	if (Number(inputEmail.value)) {
		document.getElementById("email").value = "";
		alert("o e-mail digitado é invalido");
	}

}); 
document.getElementById('validacao').addEventListener('submit', function(){
	var emailDigitado = document.getElementById("email").value;
	alert("O e-mail "+emailDigitado+" foi enviado com sucesso!");	
	document.getElementById("email").value = "";
	document.getElementById("mensagem").style.visibility = "visible";
	var div = document.getElementById('usuario');
	div.innerHTML += "Bem-vindo " + emailDigitado +".";
}); 
