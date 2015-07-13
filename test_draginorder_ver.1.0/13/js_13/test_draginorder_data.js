/**
 * This is data for generation testing jobs
 *
 */



var test1= {
    test_type: 'draginorder',
    imgDir:'./Images_13/', /*путь к папке с картинками для теста*/
            jobData:{ /*Данные для генерации задания в правильной последовательности*/
                1:{/*первая строка*/
                    dataText: 'начальное образование',
                    dataImg: {
                        src:'mars.jpeg',
                        width:'10%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                        height:''
                    }
                },
                2:{/*вторая строка*/
                    dataText: 'общее основное образование'
                },
                3:{/*третья строка*/
                    dataText: 'среднее специальное образование'
                },
                4:{/*четвертая строка*/
                    dataText: 'среднее полное образование'
                }
            }
}

var test2= {
    test_type: 'draginorder',
    imgDir:'./Images_13/', /*путь к папке с картинками для теста*/
    jobData:{ /*Данные для генерации задания в правильной последовательности*/
        1:{/*первая строка*/
            dataText: 'один',
            dataImg: {
                src:'mars.jpeg',
                width:'20%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                height:''
            }
        },
        2:{/*вторая строка*/
            dataText: 'два'
        },
        3:{/*третья строка*/
            dataText: 'три'
        },
        4:{/*четвертая строка*/
            dataText: 'четыре'
        },
        5:{
            dataText: 'пять'
        },
        6:{
            dataText:'шесть'
        }
    }
}





