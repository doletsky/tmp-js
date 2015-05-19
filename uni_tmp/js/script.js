$(document).ready(function(){
    initTest(); /*инициализирует работу тести, д.б. описана в test/jsAction.js*/
    $('.send').click(function(){
        controlJob();
    });
});
