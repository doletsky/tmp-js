$(document).ready(function(){

    $('.reload').click(function(){window.location.reload("true");});

    $('.check').click(function(){
        var cf=0;
        cf=$('.droppable[rating="false"]').length;
        if(cf>0){
            $('.result').removeClass('correct');
            $('.result').addClass('incorrect');
        }else{
            $('.result').removeClass('incorrect');
            $('.result').addClass('correct');
        }
    });



    $('.draggable').draggable({
        drag: function(event, ui) {
            if(clicking == true){$(this).draggable("option", "axis", "x");}
            else {
                $(this).draggable("option", "axis", "false");
                $(this).removeClass('scrollable');
            }
        },
        containment: "parent"});
    $('.droppable').droppable({
        drop: function(event, ui) {
            if(!$(this).hasClass('on')){//control busy pazzle place
                $(this).html(ui.draggable.html());
                $(this).addClass('on');
                $('.on').css('opacity','1');
                ui.draggable.css('display','none');
                if($(this).data('obj')==ui.draggable.children('div').attr('class')){
                    $(this).attr('rating','true');
                }
            }

        },
        out:function(event, ui){
            if($(this).children('div').attr('class')==ui.draggable.children('div').attr('class')){
                $(this).html('<span></span>');
                $(this).removeClass('on');
                //$(this).css('background-color','grey');initial
            }
            if($(this).data('obj')==ui.draggable.children('div').attr('class')){
                $(this).attr('rating','false');
            }
        },
        activeClass: "active",
        hoverClass: "flashing",
        tolerance: "intersect"
    });

    // on/off visible pazzles place on up/down mouse button
    $('.draggable').mousedown(function(){
        $('.droppable').css('opacity','0.3');
    });
    $('.draggable').mouseup(function(){
        $('.droppable').css('opacity','0');
        $('.on').css('opacity','1');
    });

    $('div').click(function(){
        if($(this).hasClass('on')){
            $(this).mouseover();
        }
    });

    $('div').mouseover(function(){
        if($(this).hasClass('on')){

            var o=this;
                var eClass=$(o).children().attr('class');
                var e=$('div.'+eClass).parent('div.draggable');
                var leftPos=$(o).css('left');
                var topPos=$(o).css('top');
                e.css('left',leftPos);
                e.css('top',topPos);
                e.css('position','absolute');
                e.css('display','block');
        }
    });

    $('div.draggable').mouseout(function(){
        var o=this;
        setTimeout(function(){
            if(2==$('.'+$(o).children('div').attr('class')).length){
                $(o).css('display','none');
            }
        }, 1000);
    });

    //vert. scrolling pazzle items
    var clicking = false;
    var initTopScroll=0;
    var dTopScroll=0;
    var dLeftScroll=0;
    var leftLimit=$('.draggable').outerWidth(true);

    $('.scrollable').mousedown(function(e){
        if(!$(this).hasClass('scrollable'))clicking = false;
        initTopScroll=$(this).parent('div').scrollTop();
        dTopScroll=e.pageY;
        dLeftScroll= e.pageX;
        clicking = true;
    });

    $(document).mouseup(function(){
        clicking = false;
    })

    $('.scrollable').mousemove(function(e){
        if(!$(this).hasClass('scrollable'))clicking = false;
        if(clicking == false) return;
        var y=initTopScroll+dTopScroll-e.pageY;
        $(this).parent('div').scrollTop(y);
        var x=dLeftScroll- e.pageX;
        if(x>leftLimit){
            clicking = false;
        }
    });
});
