/*инициализация теста*/
function initTest(){
    $('.test_name').html(test.name);
    $('.test_manual').html(test.manual);
    firstJob();
}

/*первое задание теста*/
function firstJob(){
    /*создаем таблицу рабочего поля*/
    var rowTable=1+2*(test.job.j1.row-1);
    var colTable=1+2*(test.job.j1.col-1);
    var jExer='<table>';
    var td='';
    var tr='';
    for(var i=0; i<colTable; i++){
        td+='<td class="col'+i+'"></td>';
    }
    for(var l=0; l<rowTable; l++){
        tr+='<tr class="row'+l+'">'+td+'</tr>';
    }
    jExer+=tr+'</table>';
    $('.job_exercises').html(jExer);

    /*заполняем первым заданием*/
}
