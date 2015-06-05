/*инициализация теста*/
var screenResol=0;
var tableHeight=0;
var numItem=0;
var workArea= new Object();

function initTest(){
    $('.test_name').html(test.name);
    $('.test_manual').html(test.manual);
    firstJob();
    var arKeyJobInd=Object.keys(test.job);
    var htmlInd='';
    for(var ind=0; ind<arKeyJobInd.length; ind++){
        var ball='';
        if(modeFlagCoach==1)ball=' data-ball="100"';
        htmlInd+='<div id="'+arKeyJobInd[ind]+'" class="light grey"'+ball+'></div>';
    }
    $('.indicate').html(htmlInd);
    $('.light#'+$('.tJob').data('job')).addClass('focus');
    $(document).on('click','.active', function(){
        if($('.tJob').attr('data-answer')==1)return false;//lock if answering yet
        if($(this).hasClass('linkItem') && $('.checkItem').length==0){//del link
            var arClasses=$(this).attr('class').split(' ');
            for(var k in arClasses){
                var cls=arClasses[k];
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
               if( creatLine()==false)$(this).removeClass("checkItem");
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

function creatLine( flag ){
    if (typeof flag === 'undefined') flag = false;
        var cLine=0;
        var rLine=0;
        var arCord;
        var rightLinkNum=new Array();
        var rightLink=false;
        numItem++;
        $('.checkItem').each(function(){
            $(this).addClass('num'+numItem);
            arCord=coordTd($(this));
            rLine=arCord[0]-rLine;
            cLine=arCord[1]-cLine;
            var compareLine=((1+parseInt(arCord[0]))/2)+','+((1+parseInt(arCord[1]))/2);
            if(rightLinkNum.length>0){//second iteration - do verify
                if($(this).data('type')=='q'){
                    var arQ=new Array();
                    if($(this).data('right').indexOf(';')=='-1')arQ[0]=$(this).data('right');
                    else arQ=$(this).data('right').split(';');
                    console.log(arQ);console.log(rightLinkNum);
                    for(var qKey in arQ){
                        for(var lKey in rightLinkNum){
                            if(arQ[qKey]==rightLinkNum[lKey]) rightLink=true;
                        }
                    }
                }else{

                    for(var lKey in rightLinkNum){
                        if(rightLinkNum[lKey]==compareLine) rightLink=true;
                    }
                }
            }else{//first iteration - saving val
                if($(this).data('type')=='q'){
                    var arQ=new Array();
                    if($(this).data('right').indexOf(';')=='-1')arQ[0]=$(this).data('right');
                    else arQ=$(this).data('right').split(';');
                    rightLinkNum=arQ;
                }else{
                    rightLinkNum[rightLinkNum.length]=compareLine;
                }
            }
        });
        //control limits creating
        if(onlyNext==1){//only next blocks
            if(rLine>3 || rLine<-3){return false;}
            if(cLine>3 || cLine<-3){return false;}
        }
        if(noCreatHorizont==1){
            if(rLine==0)return false;
        }
        if(noCreatVertical==1){
            if(cLine==0)return false;
        }
        if(noCreatDiagonal==1){
            if(rLine!=0&&cLine!=0)return false;
        }
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
        leftCorr=leftCorr*(-1);
    if(flag==true){
        var zero=1;
        $('tr.row'+rl).children('td.col'+cl).children('div.line').each(function(){

            if($(this).attr('style')=='left:'+leftCorr+'%;width:'+flineWidth+'%;transform:rotate('+rad+'rad);'){
                $(this).addClass('rightAnswer');
                zero=0;
            }

        });
        if(zero==1){
            $('tr.row'+rl).children('td.col'+cl).css('position','relative');
            $('tr.row'+rl).children('td.col'+cl).html($('tr.row'+rl).children('td.col'+cl).html()+'<div class="line num'+numItem+' zeroAnswer" style="left:'+leftCorr+'%;width:'+flineWidth+'%;transform:rotate('+rad+'rad);" data-right="'+rightLink+'"></div>');
        }
    }
    else{
        $('tr.row'+rl).children('td.col'+cl).css('position','relative');
        $('tr.row'+rl).children('td.col'+cl).html($('tr.row'+rl).children('td.col'+cl).html()+'<div class="line num'+numItem+'" style="left:'+leftCorr+'%;width:'+flineWidth+'%;transform:rotate('+rad+'rad);" data-right="'+rightLink+'"></div>');
    }
        $('.checkItem').addClass('linkItem');
        $('.checkItem').removeClass('checkItem');
        noFirstAnswer=1;
}

/*первое задание теста*/
function firstJob(){
    /*заполняем первым заданием*/
    publishJob(1);
}

/*размещение задания в таблице рабочего поля*/
function publishJob(num) {
    noFirstAnswer=0;
    /*создаем таблицу рабочего поля*/
    var nameJob='j'+num;
    var rowTable=1+2*(test.job[nameJob].row-1);
    var colTable=1+2*(test.job[nameJob].col-1);
    var jExer='<table class="tJob" data-job="'+nameJob+'" data-count-right="0" data-answer="0">';
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

    var techCol=test.job[nameJob].col-1;
    var widthEven=parseInt((100-(5*techCol))/test.job[nameJob].col);
    //alert(widthEven);
    $('.tJob tr:first td:even').css('width',widthEven+'%');
    $('.tJob tr:first td:odd').css('width','5%');
    var arKeyJob=Object.keys(test.job);
    if(num<1)return false;
    if(num>arKeyJob.length)return false;
    var arJob=test.job[arKeyJob[num-1]];
    var countRight=0;
    $('.job_manual').html(arJob.man);
    for(var key in arJob.jobData) {
        var curRJob=arJob.jobData[key];
        for(var id in curRJob){
            var r=1+2*(key-1);
            var c=1+2*(id-1);
            var e= $('tr.row'+r).children('td.col'+c);
            e.html(curRJob[id].dataText);
            if('dataImg' in curRJob[id]){
					e.html(curRJob[id].dataText+'<img src="'+rootDir+'test/img/'+curRJob[id].dataImg+'" width="100%">');
				}
            e.attr('data-type',curRJob[id].dataType);
            if(curRJob[id].dataType=='q'){
                var qRight='';
                var curRight=curRJob[id].dataRight;
                for(var nk in curRight){
                    countRight++;
                    qRight=qRight+';'+curRight[nk].row+','+curRight[nk].col;
                }
                e.attr('data-right',qRight.slice(1));
            }
            e.addClass('active');//
        }
    }
    $('.tJob').attr('data-count-right', countRight);
    $('.tJob').attr('data-job', arKeyJob[num-1]);
    $('.light').removeClass('focus');
    $('.light#'+$('.tJob').attr('data-job')).addClass('focus');
}

function coordTd(el){
    var arClass=el.attr('class').split(' ');
    var cordCol=arClass[0].substr(3,1);
    arClass=el.parent('tr').attr('class').split(' ');
    var cordRow=arClass[0].substr(3,1);
    return [cordRow, cordCol];
}

/*
functions for delay form
 */

function controlJob(){
    if($('.tJob').attr('data-answer')==1)return false;//lock if answering yet
    $('.tJob').attr('data-answer','1');
    var trueLine=$('.line[data-right="true"]').length;
    var error=$('.line[data-right="false"]').length;
    var countError=0;
//    if($('.line[data-right="false"]').length){alert('Есть ошибки');error=$('.line[data-right="false"]').length;}
    if($('.line').length!=$('.tJob').data('count-right')) {error++;countError=$('.line').length-$('.tJob').data('count-right');}
//    if(error==0 && countError==0) alert('Все верно!');
    return [trueLine, error, $('.tJob').data('count-right'), $('.tJob').data('job')];/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
}

function viewRightAnswer(){
    var idJob=$('.tJob').data('job');
    var arJob=test.job[idJob].jobData;
    for(var idRow in arJob){
        var arRow=arJob[idRow];
        for(var idItem in arRow){
            if(arRow[idItem].dataType=='q'){
                var dataRight=arRow[idItem].dataRight;
                for(var idR in dataRight){
                    var r=1+2*(idRow-1);
                    var c=1+2*(idItem-1);
                    var e1= $('tr.row'+r).children('td.col'+c);
                    e1.addClass('checkItem');
                    var r=1+2*(dataRight[idR].row-1);
                    var c=1+2*(dataRight[idR].col-1);
                    var e2= $('tr.row'+r).children('td.col'+c);
                    e2.addClass('checkItem');
                    creatLine(true);
                }
            }
        }
    }
    $('.line[data-right="false"]').addClass('falseAnswer');
}

function nextJob() {
    rotateJob();
}

function prevJob() {
    rotateJob(-1);
}

/*view next or prev job*/
function rotateJob(inc) {
    if (typeof inc === 'undefined') inc = 1;
    $('.contentHelp').html('');
    //saving cur. table
    workArea[$('.tJob').attr('data-job')]={data:$('.job_exercises').html(),man:$('.job_manual').html(), nofirstanswer: noFirstAnswer};
    var curNumJob=$('.tJob').attr('data-job').slice(1);
    var nextNumJob=parseInt(curNumJob)+parseInt(inc);
    console.log($('.tJob').attr('data-job'));
    console.log(inc);
    if('j'+nextNumJob in workArea){
        $('.job_exercises').html(workArea['j'+nextNumJob].data);
        $('.job_manual').html(workArea['j'+nextNumJob].man);
        noFirstAnswer=workArea['j'+nextNumJob].nofirstanswer;
        $('.light').removeClass('focus');
        $('.light#'+$('.tJob').attr('data-job')).addClass('focus');
    }
    else {
        publishJob(nextNumJob);
    }
}

/*reset current job*/
function resetCurJob(cTrue){
    var curNumJob=$('.tJob').attr('data-job').slice(1);
    if(cTrue==1 || modeFlagCoach==1){
        slideOtherJob(curNumJob);
    }else{
        slideRotateJob(curNumJob);
    }
    publishJob(curNumJob);
}

function slideOtherJob(jnum){
    var idj='j'+jnum;
    if(idj in workArea){
        delete workArea[idj];
    }
    //var tmpJob=test.job[idj];
    test.job[idj]=otherJob[idj];
}

function slideRotateJob(jnum){

    var idj='j'+jnum;
    if(idj in workArea){
        delete workArea[idj];
    }
    var tmpJob=test.job[idj].jobData;
    var arIdRot=Object.keys(nRotJob[idj]);
    var lastIdRot=parseInt(arIdRot[arIdRot.length-1]);lastIdRot++;
    test.job[idj].jobData=nRotJob[idj][arIdRot[0]];
    nRotJob[idj][lastIdRot]=tmpJob;
    delete nRotJob[idj][arIdRot[0]];
}

/*load help in Help window*/
function helpCurJob() {
    if($('.tJob').data('answer')==0)return false;
    var curNumJob=$('.tJob').attr('data-job');
    var arHJob=test.job[curNumJob].help;
    var cHelp='';
    if('text' in arHJob){
        if(arHJob.text.length>0){
            cHelp+=arHJob.text+'<br>';
        }
    }
    if('img' in arHJob){
        if(arHJob.img.length>0){
            cHelp+='<img src="'+rootDir+'test/img/'+arHJob.img+'" width="80%">';
        }
    }
    $('.contentHelp').html(cHelp);
}
