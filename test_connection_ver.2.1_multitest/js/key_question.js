//Отступ блока <div class="row" id="first">, когда блок "Ключевого вопроса онлайн-урока" открыт (при старте странице и при клике на него) и когда он закрыт

	$(document).ready(function(){
	
	
		$("#first").css({"margin-top": $(".spoiler_key").height()+$("header").outerHeight()})
		console.log(parseInt($("#first").css("margin-top")), $("#first").css("margin-top"))
		var padding;
		$(".btn1").click(function(){
		
			if(parseInt($("#first").css("margin-top"))==$("header").outerHeight()) {
				$("#first").css({"margin-top": padding+$("header").outerHeight()});
			} 
			else {
				$("#first").css({"margin-top": $("header").outerHeight()});
			    padding=$(".spoiler_key").height();
			}
		})
	});
	
  