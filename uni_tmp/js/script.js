var noFirstAnswer=0; /*первого ответа не было*/
var clickTrue=0; /*была нажата кнопка Правильный ответ*/

$(document).ready(function(){

    initTest(); /*инициализирует работу тести, д.б. описана в test/jsAction.js*/
    $('.send').on('click',function(){
        controlJob();
    });

    $('.true').on('click',function(){
        if(noFirstAnswer==0)return false;
        clickTrue=1;
        viewRightAnswer();
    });

    $('.next').on('click',function(){
        nextJob();
        $('.viewHelp').css('display', 'none');
    });

    $('.prev').on('click',function(){
        prevJob();
        $('.viewHelp').css('display', 'none');
    });

    $('.reset').on('click', function(){
        if(noFirstAnswer==0)return false;
        resetCurJob(clickTrue);
    });

    $('.help').on('click', function(){
        helpCurJob();
        $('.viewHelp').css('display', 'block');
    });
    $('.viewHelp .close').on('click', function(){
        $('.viewHelp').css('display', 'none');
    });

    /*настройка под выбранный в tune.js режим*/
    if(modeFlagCoach==1){
        $('.help').css('display', 'none');
    }

});
