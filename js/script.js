var logo = $(".logo-dev");
var pontoSobreY = $("#sobre").offset().top - 50;
var midiasSociais = $(".svg-midias");
var menuFlutuante = $("#cabeca");
var servico = $(".servico");
var setaConteudo = $(".seta-conteudo");
var valorConteudo = $(".valor-conteudo");
var valorTitulo = $(".valor-titulo");
var secundaria = $(".secundaria");
var formacao = $(".formacao-secundaria");
var count = 0;

function scrollTo (buttonCliked, targetOffsetId, speed ) {
	$(document).on('click', buttonCliked, function(evt){
		evt.preventDefault();
		var target_offset = $(targetOffsetId).offset();
		var target_top = target_offset.top;
		$('html, body').animate({ scrollTop: target_top }, speed);
	})
}

function menuRolavel() {
  if (document.body.scrollTop > pontoSobreY || document.documentElement.scrollTop > pontoSobreY) {
    $(menuFlutuante).addClass("menu-rolavel", 1000)


  } else {
    $(menuFlutuante).removeClass("menu-rolavel")
  }
}

function escalaOnMouse(item) {

	for (var cOn = 0; cOn < item.length; cOn++) {
	
		item[cOn].onmouseover = function(){
			this.style.transform = "scale(1.1, 1.1)";
			this.style["z-index"] = 5;
		}

	}
};

function escalaOutMouse(item) {

	for (var cOut = 0; cOut < item.length; cOut++) {
	
		item[cOut].onmouseout = function(){
			this.style.transform = "scale(1, 1)";
			this.style["z-index"] = 1;
		}
	}
};
   

$.each(formacao,function(indice){

	$(formacao[indice]).click(function(){
	
		$.each(formacao,function(indice){

			if(this.children[1].style.display == "block"){
				$(this.children[1]).show(800)
			} else {
				$(formacao[indice].children[1]).hide(800)
				$(formacao[indice].children[0].children[2]).removeClass("seta-conteudo-flip")
			}

		})
		if(this.children[1].style.display == "none") {
			$(this.children[1]).show(800)
			$(formacao[indice].children[0].children[2]).addClass("seta-conteudo-flip")
		} else {
			$(this.children[1]).hide(800)
			$(this.children[0].children[2]).removeClass("seta-conteudo-flip")
		}
	});
	

})

$("#menu-b-bars").click(function(){

	if(document.getElementById("section-cabeca").classList.contains("close-menu-bars")) {

		document.getElementById("section-cabeca").classList.remove("close-menu-bars");
		document.getElementById("section-cabeca").classList.add("open-menu-bars");
		document.getElementById("fundo").style.display = "block";
	} else {
		document.getElementById("section-cabeca").classList.remove("open-menu-bars");
		document.getElementById("section-cabeca").classList.add("close-menu-bars");
		document.getElementById("fundo").style.display = "none";
	}

})



window.onscroll = function() {menuRolavel()};

$(document).ready(function(){

	escalaOnMouse(midiasSociais);
	escalaOutMouse(midiasSociais);
	
	escalaOnMouse(servico);
	escalaOutMouse(servico);
	
	escalaOnMouse(logo);
	escalaOutMouse(logo);
	
	scrollTo('#menu-home', '#header', 500)
	scrollTo('#menu-sobre', '#sobre', 500)
	scrollTo('#menu-servicos', '#servicos', 500)
	scrollTo('#menu-formacao', '#formacao', 500)
	scrollTo('#menu-experiencia', '#experiencia', 500)
	scrollTo('#menu-contato', '#contato', 500)
	scrollTo('#skill-btn', '#skills', 500)
	
})

