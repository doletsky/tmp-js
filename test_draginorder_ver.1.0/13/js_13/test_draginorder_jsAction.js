jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack( stack );
};

var draginorder={
    /*инициализация функционала теста*/
    screenResol:0,
    tableHeight:0,
    modeFlagCoach:0, /* 0 - тренировочный , 1 - контролирующий */
    numItem:0,
    workArea:{},
    test:{},
    initTest:   function(ob){
        var arKeyJobInd=this.mix(Object.keys(this.test.jobData)); /* mix - вызов функции, перемешивающей правильную послед-ть */
        ob.html('');
        ob.append("<div id='sortContainer'></div>");
        var htmlInd='';
        for(var ind=0; ind<arKeyJobInd.length; ind++){
            if('dataImg' in this.test.jobData[arKeyJobInd[ind]])
            {
                var obImg=this.test.jobData[arKeyJobInd[ind]].dataImg;
                if('src' in obImg){
                    var styleImg=' style="';
                    if('width' in obImg){if(obImg.width.length>0)styleImg=styleImg+"width:"+obImg.width+";";}
                    if('height' in obImg){if(obImg.height.length>0)styleImg=styleImg+"height:"+obImg.height+";";}
                    styleImg=styleImg+'"';
                    htmlInd+='<div id="fitem'+arKeyJobInd[ind]+'" class="droppable"></div><div id="item'+arKeyJobInd[ind]+'" class="sortable moving" data-stay="fitem'+arKeyJobInd[ind]+'">'+'<img src="'+this.test.imgDir+obImg.src+'"'+styleImg+'><p>'+this.test.jobData[arKeyJobInd[ind]].dataText+'</p></div>';
                }
            }
            else
            {
                htmlInd+='<div id="fitem'+arKeyJobInd[ind]+'" class="droppable"></div><div id="item'+arKeyJobInd[ind]+'" class="sortable moving" data-stay="fitem'+arKeyJobInd[ind]+'">'+this.test.jobData[arKeyJobInd[ind]].dataText+'</div>';
            }

        }
        ob.children("#sortContainer").append(htmlInd);
        ob.children("#sortContainer").children('.sortable').each(function(){
            var did=$(this).attr('id').slice(4);
            ob.children("#sortContainer").children('#fitem'+did).height($(this).height()); console.log(ob.children("#sortContainer").children('#fitem'+did).position().top);
            $(this).css('top',ob.children("#sortContainer").children('#fitem'+did).position().top);
        });

            var meth=this;
        var mXY={};
        var flag={over:0,change:0};
        var drag={};
        ob.children('#sortContainer').mousemove(function(e){mXY=e;});
//            ob.children('#sortContainer').addClass('ui-droppable');
        ob.children('#sortContainer').children('div.sortable').draggable({
                axis: "y",
                containment:"#sortContainer",
                start: function(event, ui){
//                    drag.html=$(this).parent().html();
//                    drag.id=$(this).parent().attr('id');
//                    drag.fon=$(this).parent().children('.fon').html();
//                    $(this).parent().height($(this).parent().children('.fon').height());
//                    $(this).parent().children('.fon').remove();
                    $(this).css('z-index','999');
                },
                stop: function(event, ui){
                    $(this).css('z-index','99');
//                    ob.children('#sortContainer').children('#'+drag.id).append($(this).clone());
//                    ob.children('#sortContainer').children('#'+drag.id).children('.sortable').draggable("disable");
                }
            });

            ob.children('#sortContainer').children('div.droppable').droppable({
                containment: "parent",
                accept:".sortable",
                tolerance:"touch",
                over:function(event, ui)
                {
//                    var emptCont=$(ui.draggable[0]).parent('div');
                    console.log($(this));
                    console.log($(ui.draggable).attr('id'));
                    if($(this).children('.sortable').attr('id')!=$(ui.draggable[0]).attr('id'))
                    {
                     drag.id=$(this).attr('id');
                    }
////
//                        el=$(ui.draggable[0]).after($(this).html());
//                        el.css('top',0);
//                        $(ui.draggable[0]).css('position','absolute');
//                        var hEmpt=$(this).height();
//                        console.log($(this).height());
//                        $(this).html($(ui.draggable[0]));
////                        $(this).height(hEmpt);
//
//                        $(ui.draggable[0]).css('top',parseInt($(ui.draggable[0]).css('top'))+40+'px');
////                        ui.position.top=parseInt($(ui.draggable[0]).css('top'))+40;
////                        ui.offset.top=ui.offset.top+40;
//                    }
////                    console.log($(this).offset().top);
//                    $(ui.draggable[0]).css('z-index','999');
//////                    $(this).offset({top:$(ui.draggable).offset().top});
////                    $(this).offset({top:$(this).offset().top+20});
////                    console.log($(this).offset().top);
////                    drag=this;
//                    flag.f=1;
////                    el=$(ui.draggable[0]).after($(this).removeClass('border-red'));
////                    $(ui.draggable[0]).offset({top:$(ui.draggable[0]).offset().top+40});
////                    el.removeAttr('style');
////                    el.droppable( "enable" );
////                    $(this).remove();
////                    $(ui.draggable[0]).removeAttr('style');
////                    $(ui.draggable[0]).mouseup();

                },
//                drop:function(event, ui)
//                {
//                    console.log(this);
//                    console.log(ui);
//                },
                hoverClass:"border-red"

            });

        this.indicateTrue(ob);
    },
    mix: function(ar){
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
        return newAr;
    },
    indicateTrue: function(ob){
        ob.children().children('.sortable').each(function(){
            //var $(this).attr('id').slice(4,1);
            if((1+ob.children().children('.sortable').index($(this)))==$(this).attr('id').slice(4)){
                $(this).attr('data-right','true');
            }else{
                $(this).attr('data-right','false');
            }
        });
    },
    controlJob: function(ob){
        if(ob.children('#sortContainer').attr('data-answer')==1)return false;//lock if answering yet
        ob.children('#sortContainer').attr('data-answer','1');
        var trueLine=ob.children().children('.sortable[data-right="true"]').length;
        var error=ob.children().children('.sortable[data-right="false"]').length;
        var countItem=ob.children().children('.sortable').length;
        var countError=error;
        ob.children('#sortContainer').unbind();$('.sortable').unbind();
        return [trueLine, error, countItem, countItem];/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
    }
}



//
//
///*инициализация теста*/
//var screenResol=0;
//var tableHeight=0;
//var modeFlagCoach=0; /* 0 - тренировочный , 1 - контролирующий */
//var numItem=0;
//var workArea= new Object();
//
//function initTest(){
//
//    var arKeyJobInd=mix(Object.keys(test.jobData)); /* mix - вызов функции, перемешивающей правильную послед-ть */
//    $(".job_exercises").html('');
//    $(".job_exercises").append("<div id='sortContainer'></div>");
//    var htmlInd='';
//    for(var ind=0; ind<arKeyJobInd.length; ind++){
//        htmlInd+='<div id="item'+arKeyJobInd[ind]+'" class="sortable moving">'+test.jobData[arKeyJobInd[ind]].dataText+'</div>';
//    }
//    $("#sortContainer").append(htmlInd);
//    $(function() {
//
//        $('#sortContainer').sortable({
//            update: function(event, ui) {
//                indicateTrue();
//                if(noFirstAnswer==0){
//                    noFirstAnswer=1;
//                    $(".check_your").css({"background": "url('../styles/img/5.png') no-repeat", "background-size":"auto 100%"});
//                }
//            },
//            containment: "parent",
//            tolerance: "pointer"
//        });
//
//    });
//    indicateTrue();
//}
//
//function mix(ar){
//    var newAr=[];
//    if(ar.length>2){
//        var oldAr=ar;
//        for(var i=0;i<ar.length+1;i++){console.log(i);
//            var max=oldAr.length-1;console.log('max='+max);
//            var randNum=Math.floor(Math.random() * (max  + 1));console.log('rand='+randNum);
//            newAr[newAr.length]=oldAr[randNum];
//            oldAr.splice(randNum, 1);console.log(oldAr);
//        }
//        newAr[newAr.length]=oldAr[0];
//    }else{
//        newAr=ar;
//    }
//    console.log(newAr);
//    return newAr;
//}
//
//function indicateTrue(){
//    $('.sortable').each(function(){
//        //var $(this).attr('id').slice(4,1);
//        if((1+$('.sortable').index($(this)))==$(this).attr('id').slice(4)){
//            $(this).attr('data-right','true');
//        }else{
//            $(this).attr('data-right','false');
//        }
//    });
//}
//
//function controlJob(){
//    if($('#sortContainer').attr('data-answer')==1)return false;//lock if answering yet
//    $('#sortContainer').attr('data-answer','1');
//    var trueLine=$('.sortable[data-right="true"]').length;
//    var error=$('.sortable[data-right="false"]').length;
//    var countItem=$('.sortable').length;
//    var countError=error;
//    $('#sortContainer').unbind();$('.sortable').unbind();
//    return [trueLine, error, countItem, countItem];/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
//}
//
//
