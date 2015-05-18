/**
 * This is data for generation testing jobs
 *
 */
var test= {
    name: 'Tests name', /*Название теста*/
    manual: 'Manual for execution test. Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! рамки и место обучения кадров способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что укрепление и развитие структуры требуют от нас анализа новых предложений. ', /*Инструкция для выполнения теста*/
    job:{/*Набор заданий для теста*/
        j1:{/*Первое задание теста, j2 - второе и т.д.*/
            man: 'Job manual',/*Инструкция для задания*/
            row: 3,/*количество строк*/
            col: 3,/*количество ячеек в строке*/
            jobData:{ /*Данные для генерации задания*/
                1:{/*первая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Первый вопрос',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',/*q - тип данных "ответ"*/
                        dataText: 'Ответ на второй вопрос'
                    },
                    3:{/*третья ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Третий вопрос',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 3 /*в ячейке 2*/
                            }
                        }
                    }
                },
                2:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',
                        dataText: 'Второй вопрос',
                        dataRight: {
                            1:{
                                row: 1,
                                col: 2
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: 'Ответ на первый вопрос. Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! рамки и место обучения кадров способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что укрепление и развитие структуры требуют от нас анализа новых предложений.'
                    },
                    3:{/*третья ячейка*/
                        dataType: 'a',
                        dataText: 'Ответ на третий вопрос'
                    }
                },
                3:{/*третья строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Еще вариант третьего вопроса',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 3 /*в ячейке 2*/
                            }
                        }
                    }
                }
            }
        },
        j2:{/*Первое задание теста, j2 - второе и т.д.*/
            man: 'Job manual',/*Инструкция для задания*/
            row: 2,/*количество строк*/
            col: 2,/*количество ячеек в строке*/
            jobData:{ /*Данные для генерации задания*/
                1:{/*первая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Первый вопрос',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',/*q - тип данных "ответ"*/
                        dataText: 'Ответ на второй вопрос'
                    }
                },
                2:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',
                        dataText: 'Второй вопрос',
                        dataRight: {
                            1:{
                                row: 1,
                                col: 2
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: 'Ответ на первый вопрос'
                    }
                }
            }
        }
    }
}

