//variables
var cargas=0;
var maxcargas=2;
var contador=1;
var onoff=false;
//alcargar el documento
$(function(){
	//al clickar en el boton
	$("button").click(function(){
		//cojer datos de JSON
		$.getJSON("https://rawgit.com/DaniTur/projeco_web_noticias/master/data/data"+contador+".json",function(jsonObject){
			adjuntarNoticia(jsonObject);
		});
		
		if(contador=1){$(".footer").css("position","relative");} //para que solo se haga una vez y no ocupe recursos
		//if(contador=4){	$(".btn").html("No hay más noticias");}
		contador++;
	});
	$(".scroll").click(function(){
		if(!onoff){
			
			$("#onoff").html("On");
			$("#onoff").css("color","green");
			onoff=true;
		}else if(onoff){
			$("#onoff").html("Off");
			$("#onoff").css("color","red");
			onoff=false;
		}
	});
	//al hacer scroll
	$(window).scroll(function(){
		if(onoff){	 //si el scroll esta activado
			if($(window).scrollTop() + $(window).height() + 5 >= $(document).height()){
				console.log("scrolleando");
				$.getJSON("https://rawgit.com/DaniTur/projeco_web_noticias/master/data/data"+contador+".json",function(jsonObject){
					adjuntarNoticia(jsonObject);
				});
				if(contador=1){$(".footer").css("position","relative");} //para que solo se haga una vez y no ocupe recursos
				//if(contador=4){	$(".btn").html("No hay más noticias");}
				contador++;
			}
		}
	});
});

//funciones
function adjuntarNoticia(data){
	cargas++;
	//por cada elemento
	$.each(data, function(i, noticia){
		if(cargas<=maxcargas){
			var imagen=noticia.imgmid;
			var titulo=noticia.title;
			var desc=noticia.description;
			var fecha=noticia.data;
			$(noticias).append('<div class="col-sm-12 col-md-6 col-lg-4"><div class="content-espacio"><div class="content"><div class="imagen"><img src="img/'+imagen+'" alt="new_img"></div><div class="texto"><h3>'+titulo+'</h3><p>'+desc+'</p></div><hr></hr><div class="fecha-link"><div class="fecha">'+fecha+'</div><div class="link">link</div></div></div></div></div>');

		}
	});
 }
