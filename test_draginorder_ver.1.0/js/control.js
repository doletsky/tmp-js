var noFirstAnswer=0; /*первого ответа не было*/
var clickTrue=0; /*была нажата кнопка Правильный ответ*/

$(document).ready(function(){

    initTest(); /*инициализирует работу тести, д.б. описана в test/jsAction.js*/
    $('.send').on('click',function(){
        controlJob();
    });

    $('.reset').on('click', function(){
        if(noFirstAnswer==0)return false;
        resetCurJob(clickTrue);
    });

	/*дополнения для размещения в уроке*/
	$('.drop').on('click', function(){
        if(noFirstAnswer==0)return false;
        initTest();
		$(".result").css("background","none");
    });
    
	$('.check_your').on('click',function(){
	var contr=controlJob();/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
        if(contr==false)return false;
        if(contr[0]==contr[2] && contr[1]==0){
			$(".result").css({"background": "url('../styles/img/8.png') no-repeat", "background-size":"auto 100%"});
		}else{
			$(".result").css({"background": "url('../styles/img/7.png') no-repeat", "background-size":"auto 100%"});
		}
    });
});
