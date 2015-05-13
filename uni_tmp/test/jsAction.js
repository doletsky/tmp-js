/*инициализация теста*/
function initTest(){
    $('.test_name').html(test.name);
    $('.test_manual').html(test.manual);
    firstJob();
    $('.active').click(function(){
        $(this).toggleClass("checkItem");

//        var arClass=$(this).attr('class').split(' ');
//        var cordCol=arClass[0].substr(3,1);
//        arClass=$(this).parent('tr').attr('class').split(' ');
//        var cordRow=arClass[0].substr(3,1);
        if($('.checkItem').length==2){
            var cLine=0;
            var rLine=0;
            var arCord;
            $('.checkItem').each(function(){
                arCord=coordTd($(this));
                rLine=arCord[0]-rLine;
                cLine=arCord[1]-cLine;
            });
            var rl=parseInt(arCord[0])-(rLine/2);
            var cl=parseInt(arCord[1])-(cLine/2);
            var rad=Math.atan2(rLine, cLine);
            if(rad>1){rad=rad+(0.15*rLine);}
            else {rad=rad-(0.15*rLine);}
            $('tr.row'+rl).children('td.col'+cl).html('<div class="line" style="transform:rotate('+rad+'rad);"></div>');
            //alert(Math.atan2(rLine, cLine));
            //alert(rl+','+cl);
        }
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

function coordTd(el){
    var arClass=el.attr('class').split(' ');
    var cordCol=arClass[0].substr(3,1);
    arClass=el.parent('tr').attr('class').split(' ');
    var cordRow=arClass[0].substr(3,1);
    return [cordRow, cordCol];
}