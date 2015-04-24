$(document).ready(function(){

    $('.draggable').draggable();

    $('.droppable').droppable({
        drop: function(event, ui) {
            $(this).attr('rating','false');
            ui.draggable.offset({top:$(this).offset().top, left:$(this).offset().left});
            //alert(ui.draggable.children('div').attr('class'));
            if($(this).data('obj')==ui.draggable.children('div').attr('class')){$(this).attr('rating','true');}
            $('.droppable').css('display','none');
        },
        out:function(){$(this).attr('rating','false');},
        activeClass: "active",
        hoverClass: "flashing",
        tolerance: "intersect"
    });

    // on/off visible pazzles place on up/down mouse button
    $('.draggable').mousedown(function(){
        $('.droppable').css('display','block');
    });
    $('.draggable').mouseup(function(){
        $('.droppable').css('display','none');
        $('.flashing').css('display','block');
    });

});
