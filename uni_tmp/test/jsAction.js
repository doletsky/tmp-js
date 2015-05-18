/*инициализация теста*/
var screenResol=0;
var tableHeight=0;
var numItem=0;

function initTest(){
    $('.test_name').html(test.name);
    $('.test_manual').html(test.manual);
    firstJob();
    $('.active').click(function(){

        if($(this).hasClass('linkItem') && $('.checkItem').length==0){//del link
            var arClasses=$(this).attr('class').split(' ');
            for(var k in arClasses){
                var cls=arClasses[k];console.log(cls.slice(0,3));
                if(cls.slice(0,3)=='num'){
                    $('div.'+arClasses[k]).remove();
                    $('td.'+arClasses[k]).each(function(){
                        var cnt=$(this).attr('class').split('num').length;
                        $(this).removeClass(arClasses[k]);
                        if(cnt==2){
                            $(this).removeClass('linkItem');
                        }
                    });
                }
            }
            return false;

        }

        if($(this).hasClass("checkItem")){
            if($('.checkItem').length==1){//del class checkItem
                $('.checkItem').removeClass('checkItem');
            }
        }else{//creating links
            $(this).addClass("checkItem");
            if($('.checkItem').length==2){
                var cLine=0;
                var rLine=0;
                var arCord;
                numItem++;
                $('.checkItem').each(function(){
                    $(this).addClass('num'+numItem);
                    arCord=coordTd($(this));
                    rLine=arCord[0]-rLine;
                    cLine=arCord[1]-cLine;
                });
                //calc height in %
                var lineHeight=0;
                var rN=1;
                if(rLine<0){rN=-1;}
                for(var n=1;n<rLine*rN;n++){
                    var idTr=arCord[0]-(n*rN);
                    lineHeight=lineHeight+$('tr.row'+idTr).height();console.log(lineHeight);
                }
                //calc width in %
                var lineWidth=0;
                var cN=1;
                if(cLine<0){cN=-1;}
                for(var n=1;n<cLine*cN;n++){
                    var idTd=arCord[1]-(n*cN);
                    lineWidth=lineWidth+$('td.col'+idTd).innerWidth();console.log(lineWidth);
                }
                var rl=parseInt(arCord[0])-(rLine/2);
                var cl=parseInt(arCord[1])-(cLine/2);
                var rad=Math.atan2(lineHeight*rN, lineWidth*cN);
                var flineWidth=100*Math.sqrt((lineWidth*lineWidth)+(lineHeight*lineHeight))/$('td.col'+cl).innerWidth();console.log($('td.col'+cl).innerWidth());
                var leftCorr=(flineWidth-100)/2;
                $('tr.row'+rl).children('td.col'+cl).css('position','relative');
                $('tr.row'+rl).children('td.col'+cl).html($('tr.row'+rl).children('td.col'+cl).html()+'<div class="line num'+numItem+'" style="left:-'+leftCorr+'%;width:'+flineWidth+'%;transform:rotate('+rad+'rad);"></div>');
                $('.checkItem').addClass('linkItem');
                $('.checkItem').removeClass('checkItem');
            }
        }

    });

    $(window).resize(function(){
        var arNum= new Array();
        $('.line').each(function(){
            var ar=$(this).attr('class').split(' ');
            for(var i in ar){
                if(ar[i].slice(0,3)=='num'){
                    arNum[arNum.length]=ar[i];
                }
            }
        });
        for(var nd in arNum){
            var cLine=0;
            var rLine=0;
            var arCord;
            $('td.'+arNum[nd]).each(function(){
                arCord=coordTd($(this));
                rLine=arCord[0]-rLine;
                cLine=arCord[1]-cLine;
            });
            //calc height in %
            var lineHeight=0;
            var rN=1;
            if(rLine<0){rN=-1;}
            for(var n=1;n<rLine*rN;n++){
                var idTr=arCord[0]-(n*rN);
                lineHeight=lineHeight+$('tr.row'+idTr).height();
            }
            //calc width in %
            var lineWidth=0;
            var cN=1;
            if(cLine<0){cN=-1;}
            for(var n=1;n<cLine*cN;n++){
                var idTd=arCord[1]-(n*cN);
                lineWidth=lineWidth+$('td.col'+idTd).innerWidth();
            }
            var rl=parseInt(arCord[0])-(rLine/2);
            var cl=parseInt(arCord[1])-(cLine/2);
            var rad=Math.atan2(lineHeight*rN, lineWidth*cN);
            var flineWidth=100*Math.sqrt((lineWidth*lineWidth)+(lineHeight*lineHeight))/$('td.col'+cl).innerWidth();
            var leftCorr=(flineWidth-100)/2;
            $('div.'+arNum[nd]).css('width',flineWidth+'%');
            $('div.'+arNum[nd]).css('left','-'+leftCorr+'%');
            $('div.'+arNum[nd]).css('transform','rotate('+rad+'rad)');
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
            $('tr.row'+r).children('td.col'+c).addClass('active');//
        }
    }
}

function coordTd(el){
    var arClass=el.attr('class').split(' ');
    var cordCol=arClass[0].substr(3,1);
    arClass=el.parent('tr').attr('class').split(' ');
    var cordRow=arClass[0].substr(3,1);
    return [cordRow, cordCol];
}
