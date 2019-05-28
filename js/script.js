var Numero = "";
var Auxiliar = 0;
var operacao = "";
var produto = 0;

$(document).on('click', '#botao-0', function(){
	$("#tela-calculadora").val(Numero = 0);
});

$(document).on('click', '#botao-1', function(){
	Numero += "1";
	$("#tela-calculadora").val(Numero);
});

$(document).on('click', '#botao-2', function(){
	Numero += "2";
	$("#tela-calculadora").val(Numero);
});

$(document).on('click', '#botao-3', function(){
	Numero += "3";
	$("#tela-calculadora").val(Numero);
});

$(document).on('click', '#botao-4', function(){
	Numero += "4";
	$("#tela-calculadora").val(Numero);
});

$(document).on('click', '#botao-5', function(){
	Numero += "5";
	$("#tela-calculadora").val(Numero);
});

$(document).on('click', '#botao-6', function(){
	Numero += "6";
	$("#tela-calculadora").val(Numero);
});

$(document).on('click', '#botao-7', function(){
	Numero += "7";
	$("#tela-calculadora").val(Numero);
});
// Define o valor do campo como 8.
$(document).on('click', '#botao-8', function(){
	Numero += "8";
	$("#tela-calculadora").val(Numero);
});
// Define o valor do campo como 9.
$(document).on('click', '#botao-9', function(){
	Numero += "9";
	$("#tela-calculadora").val(Numero);
});
// Define o valor do campo como null, ou seja vazio, assim limpando ele.
$(document).on('click', '#botao-limpar', function(){
	Numero = null;
	$("#tela-calculadora").val(null);
});


// Operações

$("#botao-soma").click(function(){
	operacao = "soma";
	produto+=Numero;
});

$("#botao-subtracao").click(function(){
	operacao = "subtracao";
	if(operacao == "subtracao") {
		produto += parse.Float(Numero);
		$("#tela-calculadora").val(produto);
	}
});

if(operacao == "soma") {
		produto += parse.Float(Numero);
		$("#tela-calculadora").val(produto);
}

