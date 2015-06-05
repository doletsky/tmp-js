/**
 * Created by adoletskiy on 05.06.15.
 */
var obj = {}
obj.t='one';
obj.f= function(){
    var sf=14;

}


$(document).ready(function(){
   $(document).on('click','.exam1', function(){
       if($('script[id="first"]').length==0){
           //$('script[src="second.js"]').remove();
           var script = document.createElement ('script');
           //script.src = 'first.js'; //или полный URL файла js
           script.id = 'first';
           $('#tmp').load('uni_load.js', function(){
               var s=$('#tmp').html();
               script.innerHTML=s;
           });
           document.getElementsByTagName ('head')[0].appendChild (script);
       }
       else {alert(variable);}
       return false;
   });
    $(document).on('click','.exam2', function(){
       if($('script[id="second"]').length==0){
           var script = document.createElement ('script');
           //script.src = 'second.js'; //или полный URL файла js
           script.id = 'second';
           script.innerHTML='alert("add second innerHTML");';
           document.getElementsByTagName ('head')[0].appendChild (script);
       }


        return false;
    });
});
