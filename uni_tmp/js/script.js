var noFirstAnswer=0; /*первого ответа не было*/
var clickTrue=0; /*была нажата кнопка Правильный ответ*/

$(document).ready(function(){

    initTest(); /*инициализирует работу тести, д.б. описана в test/jsAction.js*/
    $('.send').on('click',function(){
        var contr=controlJob();
        if(contr==false)return false;
        var mess='';
        $('.focus').removeClass('grey');
        if(contr[0]){
            if(contr[1]){
               mess=ansPatlyRight;
               $('.focus').addClass('orange');
            }else{
               mess=ansRight;
                $('.focus').addClass('green');
            }
        }else{
            mess=ansFalse;
            $('.focus').addClass('red');
        }
        $('.result').html(mess);
    });

    $('.true').on('click',function(){
        if(noFirstAnswer==0)return false;
        clickTrue=1;
        viewRightAnswer();
    });

    $('.next').on('click',function(){
        nextJob();
        $('.viewHelp').css('display', 'none');
        $('.result').html('');
    });

    $('.prev').on('click',function(){
        prevJob();
        $('.viewHelp').css('display', 'none');
        $('.result').html('');
    });

    $('.reset').on('click', function(){
        if(noFirstAnswer==0)return false;
        if(modeFlagCoach==1&&!$('.focus').hasClass('grey'))return false;
        if(modeFlagCoach==1&&$('.focus').attr('data-ball')==75)return false;
        if(modeFlagCoach==1&&$('.focus').attr('data-ball')==90)$('.focus').attr('data-ball','75');
        if(modeFlagCoach==1&&$('.focus').attr('data-ball')==100)$('.focus').attr('data-ball','90');

        $('.result').html('');
        $('.focus').attr('class', 'light grey focus');
        resetCurJob(clickTrue);
    });

    $('.help').on('click', function(){
        if(helpCurJob()!=false)
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
