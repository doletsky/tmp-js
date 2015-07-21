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
            ob.children("#sortContainer").children('#fitem'+did).height($(this).height());
            $(this).css('top',ob.children("#sortContainer").children('#fitem'+did).position().top);
        });

        var meth=this;
        var mXY={};
        var flag={over:0,change:0};
        var drag={};
        ob.children('#sortContainer').children('div.droppable').addClass('ui-droppable');
        ob.children('#sortContainer').children('div.sortable').draggable({
                axis: "y",
                containment:"parent",
                start: function(event, ui){
                    $(this).css('z-index','999');
                },
                stop: function(event, ui){
                    $(this).css('z-index','99');
                }
            });
        var obCur=ob;
        console.log(ob.children('#sortContainer').children('div.droppable'));
        ob.children('#sortContainer').children('div.droppable').droppable({
                containment: "parent",
                accept:".sortable",
                tolerance:"touch",
                over:function(event, ui)
                {
//                    var obCur=$(this).parent('div').parent();
                    console.log($(this).parent());
                    if($(this).attr('id')!=$(ui.draggable).attr('data-stay'))
                    {
                        var moveId=$(this).attr("id");
                        var moveEl=ob.children('#sortContainer').children('div[data-stay="'+moveId+'"]');
                        moveEl.attr('data-stay',$(ui.draggable).attr('data-stay'));
                        $(ui.draggable).attr('data-stay', moveId);
                        meth.updateTopHeight(obCur);
                    }
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
    mix: function(ar){console.log('-----------------');
        var newAr=[];
        var tmpAr=[];
        var max=0;
        var randNum=0;
        if(ar.length>2){
            var oldAr=ar;
            for(var i=0;i<ar.length-1;i++){
                max=oldAr.length-1;
                randNum=Math.floor(Math.random() * (max  + 1));
                newAr[newAr.length]=oldAr[randNum];
                for(var j=0;j<oldAr.length;j++){
                   if(j!=randNum) tmpAr[tmpAr.length]=oldAr[j];
                }
                oldAr=tmpAr;
                tmpAr=[];
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
    },
    updateTopHeight: function(ob){
        ob.children("#sortContainer").children('.sortable').each(function(){
            var did=$(this).attr('data-stay');
            ob.children("#sortContainer").children('#'+did).height($(this).height());
        });
        ob.children("#sortContainer").children('.sortable').each(function(){

            if(!$(this).hasClass('ui-draggble-dragging')){
                var did=$(this).attr('data-stay');console.log(ob.children("#sortContainer").children('#'+did));
                $(this).css('top',ob.children("#sortContainer").children('#'+did).position().top);
            }

        });
    }
}


