$(document).ready(function(){
    initTest(); /*инициализирует работу тести, д.б. описана в test/jsAction.js*/
    $('.send').on('click',function(){
        controlJob();
    });

    $('.true').on('click',function(){
        viewRightAnswer();
    });

    $('.next').on('click',function(){
        nextJob();
    });

    $('.prev').on('click',function(){
        prevJob();
    });
});
