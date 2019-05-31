$(document).on('click','.botao-calculadora',function(){
	if($(this).html() =="C"){
		$('#tela-calculadora').val("");
	}else if($(this).html() =="="){
		$('#tela-calculadora').val( mostrarResultado( $('#tela-calculadora').val()) );
	}else{
		$('#tela-calculadora').val($('#tela-calculadora').val() + $(this).html());	
	}
});

function mostrarResultado(tela){
	return eval(tela);
}