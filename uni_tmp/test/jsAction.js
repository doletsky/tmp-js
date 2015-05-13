/*инициализация теста*/
function initTest(){
    $('.test_name').html(test.name);
    $('.test_manual').html(test.manual);
    firstJob();
    $('.active').click(function(){
        $(this).toggleClass("checkItem");
    });
}

/*первое задание теста*/
function firstJob(){
    /*создаем таблицу рабочего поля*/
    var rowTable=1+2*(test.job.j1.row-1);
    var colTable=1+2*(test.job.j1.col-1);
    var jExer='<table class="tJob">';
    var td='';
    var tr='';
    for(var i=1; i<colTable+1; i++){
        td+='<td class="col'+i+'"></td>';
    }
    for(var l=1; l<rowTable+1; l++){
        tr+='<tr class="row'+l+'">'+td+'</tr>';
    }
    jExer+=tr+'</table>';
    $('.job_exercises').html(jExer);

    var techCol=test.job.j1.col-1;
    var widthEven=parseInt((100-(5*techCol))/test.job.j1.col);
    //alert(widthEven);
    $('.tJob tr:first td:even').css('width',widthEven+'%');
    $('.tJob tr:first td:odd').css('width','5%');
    //$('.job_exercises').children('td:even').css('color', 'red');
    //alert($('.job_exercises').children('table tr').length);


    /*заполняем первым заданием*/
    publishJob(1);
}

/*размещение задания в таблице рабочего поля*/
function publishJob(num) {
    //alert($('.tJob tr td').length);
    var arKeyJob=Object.keys(test.job);
    var arJob=test.job[arKeyJob[num-1]];
    $('.job_manual').html(arJob.man);
    for(var key in arJob.jobData) {
        var curRJob=arJob.jobData[key];
        for(var id in curRJob){
            var r=1+2*(key-1);
            var c=1+2*(id-1);
            $('tr.row'+r).children('td.col'+c).html(curRJob[id].dataText);
            $('tr.row'+r).children('td.col'+c).addClass('active');
        }
    }
    //alert(arJob.man);
}
