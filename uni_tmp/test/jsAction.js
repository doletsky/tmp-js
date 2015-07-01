/*инициализация теста*/
var screenResol=0;
var tableHeight=0;
var numItem=0;
var workArea= new Object();
var curDataJob='j1';
var ctest=test.job[curDataJob];

function initTest(){

    var arKeyJobInd=mix(Object.keys(ctest.jobData)); /* mix - вызов функции, перемешивающей правильную послед-ть */
    $("#sortContainer").html('');
    $(".job_exercises").html("<div id='sortContainer' data-job='"+curDataJob+"'></div>");
    var htmlInd='';
    for(var ind=0; ind<arKeyJobInd.length; ind++){
        htmlInd+='<div id="item'+arKeyJobInd[ind]+'" class="sortable moving">'+ctest.jobData[arKeyJobInd[ind]].dataText+'</div>';
    }
    $("#sortContainer").append(htmlInd);
    $(function() {

        $('#sortContainer').sortable({
            update: function(event, ui) {
                indicateTrue();
                if(noFirstAnswer==0){
                    noFirstAnswer=1;
                    $(".check_your").css({"background": "url('../styles/img/5.png') no-repeat", "background-size":"auto 100%"});
                }
            },
            containment: "parent"
        });

    });
    indicateTrue();
}

function mix(ar){
    var newAr=[];
    if(ar.length>2){
        var oldAr=ar;
        for(var i=0;i<ar.length+1;i++){
            var max=oldAr.length-1;
            var randNum=Math.floor(Math.random() * (max  + 1));
            newAr[newAr.length]=oldAr[randNum];
            oldAr.splice(randNum, 1);
        }
        newAr[newAr.length]=oldAr[0];
    }else{
        newAr=ar;
    }
    console.log(newAr);
    return newAr;
}

function indicateTrue(){
    $('.sortable').each(function(){
        //var $(this).attr('id').slice(4,1);
        if((1+$('.sortable').index($(this)))==$(this).attr('id').slice(4)){
            $(this).attr('data-right','true');
        }else{
            $(this).attr('data-right','false');
        }
    });
}

function controlJob(){
    if($('#sortContainer').attr('data-answer')==1)return false;//lock if answering yet
    $('#sortContainer').attr('data-answer','1');
    var trueLine=$('.sortable[data-right="true"]').length;
    var error=$('.sortable[data-right="false"]').length;
    var countItem=$('.sortable').length;
    var countError=error;
    $('#sortContainer').unbind();$('.sortable').unbind();
    return [trueLine, error, countItem, countItem];/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
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
    workArea[$('#sortContainer').attr('data-job')]={data:$('.job_exercises').html(),man:$('.job_manual').html(), nofirstanswer: noFirstAnswer};
    var curNumJob=$('#sortContainer').attr('data-job').slice(1);
    var nextNumJob=parseInt(curNumJob)+parseInt(inc);
    console.log($('#sortContainer').attr('data-job'));
    console.log(inc);
    if('j'+nextNumJob in workArea){
        $('.job_exercises').html(workArea['j'+nextNumJob].data);
        $('.job_manual').html(workArea['j'+nextNumJob].man);
        noFirstAnswer=workArea['j'+nextNumJob].nofirstanswer;
        $('.light').removeClass('focus');
        $('.light#'+$('#sortContainer').attr('data-job')).addClass('focus');
    }
    else {
        publishJob(nextNumJob);
    }
}

function publishJob(nj){
    curDataJob='j'+nj;
    initTest();
}

/*reset current job*/
function resetCurJob(cTrue){
    initTest();
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
