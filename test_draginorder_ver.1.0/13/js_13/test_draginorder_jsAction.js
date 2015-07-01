/*инициализация теста*/
var screenResol=0;
var tableHeight=0;
var modeFlagCoach=0; /* 0 - тренировочный , 1 - контролирующий */
var numItem=0;
var workArea= new Object();

function initTest(){

    var arKeyJobInd=mix(Object.keys(test.jobData)); /* mix - вызов функции, перемешивающей правильную послед-ть */
    $(".job_exercises").html('');
    $(".job_exercises").append("<div id='sortContainer'></div>");
    var htmlInd='';
    for(var ind=0; ind<arKeyJobInd.length; ind++){
        htmlInd+='<div id="item'+arKeyJobInd[ind]+'" class="sortable moving">'+test.jobData[arKeyJobInd[ind]].dataText+'</div>';
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
        for(var i=0;i<ar.length+1;i++){console.log(i);
            var max=oldAr.length-1;console.log('max='+max);
            var randNum=Math.floor(Math.random() * (max  + 1));console.log('rand='+randNum);
            newAr[newAr.length]=oldAr[randNum];
            oldAr.splice(randNum, 1);console.log(oldAr);
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


