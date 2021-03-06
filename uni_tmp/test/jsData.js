/**
 * This is data for generation testing jobs
 *
 */


var test= {
    name: 'Tests name', /*Название теста*/
    manual: 'Manual for execution test.<br>Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. ', /*Инструкция для выполнения теста*/
    job:{/*Набор заданий для теста*/
        j1:{/*Первое задание теста, j2 - второе и т.д.*/
            man: 'Job manual',/*Инструкция для задания*/
            help:{
                text: 'Текст подсказки',
                img: 'helpImg.png'/*имя картинки для подсказки, должна лежать в /test/img/ */
            },
            row: 6,/*количество строк*/
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
                            },
                            2:{         /*второй правильный ответ*/
                                row: 3, /*в строке 3*/
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
                        dataText: 'Ответ на первый вопрос.<br>Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации.<br>Товарищи!'
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
                    },
                    2:{
                        dataType: 'a',
                        dataText: 'Еще вариант ответа на первый вопрос'
                    }

                },
                4:{/*первая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Первый вопрос',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
                            },
                            2:{         /*второй правильный ответ*/
                                row: 3, /*в строке 3*/
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
                5:{/*первая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Первый вопрос',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
                            },
                            2:{         /*второй правильный ответ*/
                                row: 3, /*в строке 3*/
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
                6:{/*первая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Первый вопрос',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
                            },
                            2:{         /*второй правильный ответ*/
                                row: 3, /*в строке 3*/
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
                }
            }
        },
        j2:{/* j2 - второе и т.д.*/
            man: 'Job manual',/*Инструкция для задания*/
            help:{
                text: 'Текст подсказки',
                img: 'helpImg.png'/*имя картинки для подсказки, должна лежать в /test/img/ */
            },
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
        },
        j3:{
            man: 'Выберите для каждого названия планеты солнечной системы ее порядковый номер от солнца и ее изображение.',/*Инструкция для задания*/
            help:{
                text: 'Текст подсказки',
                img: 'helpImg.png'/*имя картинки для подсказки, должна лежать в /test/img/ */
            },
            row: 3,/*количество строк*/
            col: 4,/*количество ячеек в строке*/
            jobData:{ /*Данные для генерации задания*/
                1:{/*первая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Планета Земля',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
                            },
                            2:{         /*второй правильный ответ*/
                                row: 3, /*в строке 3*/
                                col: 3 /*в ячейке 3*/
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'q',
                        dataText: 'Планета Марс',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 1 /*в ячейке 2*/
                            },
                            2:{         /*второй правильный ответ*/
                                row: 3, /*в строке 3*/
                                col: 4 /*в ячейке 3*/
                            }
                        }
                    },
                    3:{/*третья ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Планета Сатурн',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 4 /*в ячейке 2*/
                            },
                            2:{
								row: 3, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
							}
                        }
                    },
                    4:{/*третья ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: 'Планета Юпитер',
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 2, /*в строке 2*/
                                col: 3 /*в ячейке 2*/
                            },
                            2:{
								row: 3, /*в строке 2*/
                                col: 1 /*в ячейке 2*/
							}
                        }
                    }
                },
                2:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'a',
                        dataText: '',
                        dataImg: 'mars.jpeg'
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: '',
                        dataImg: 'zemlya.jpeg'
                    },
                    3:{/*третья ячейка*/
                        dataType: 'a',
                        dataText: '',
                        dataImg: 'upiter.jpeg'
                    },
                    4:{
						dataType:'a',
						dataText:'',
						dataImg:'saturn.jpeg'
					}
                },
                3:{/*третья строка*/
                    1:{/*первая ячейка*/
                        dataType: 'a',/*q - тип данных "вопрос"*/
                        dataText: 'Пятая планета от Солнца'
                    },
                    2:{/*первая ячейка*/
                        dataType: 'a',/*q - тип данных "вопрос"*/
                        dataText: 'Шестая планета от Солнца'
                    },
                    3:{/*первая ячейка*/
                        dataType: 'a',/*q - тип данных "вопрос"*/
                        dataText: 'Третья планета от Солнца'
                    },
                    4:{/*первая ячейка*/
                        dataType: 'a',/*q - тип данных "вопрос"*/
                        dataText: 'Четвертая планета от Солнца'
                    }

                }
            }
        }
    }
}



/*другие задания*/
var otherJob = {
    j2:{man: 'Новаый вариант задания - новая инструкция',/*Инструкция для задания*/
        help:{
            text: 'Текст подсказки для нового задания',
            img: 'helpImg.png'/*имя картинки для подсказки, должна лежать в /test/img/ */
        },
        row: 2,/*количество строк*/
        col: 2,/*количество ячеек в строке*/
        jobData:{ /*Данные для генерации задания*/
            1:{/*первая строка*/
                1:{/*первая ячейка*/
                    dataType: 'q',/*q - тип данных "вопрос"*/
                    dataText: 'Первый вопрос из нового задания',
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
                    dataText: 'Второй вопрос из нового',
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

/*теже задания, но ротированные*/
var nRotJob= {
    j2:{/*для второго задания*/
        1:{/*первый вариант ротации*/
            1:{/*первая строка*/
                1:{/*первая ячейка*/
                    dataType: 'a',/*q - тип данных "ответ"*/
                    dataText: 'Ответ на второй вопрос'
                },
                2:{/*вторая ячейка*/
                    dataType: 'q',/*q - тип данных "вопрос"*/
                    dataText: 'Первый вопрос',
                    dataRight: {    /*правильные ответы*/
                        1:{         /*первый правильный ответ*/
                            row: 2, /*в строке 2*/
                            col: 2 /*в ячейке 2*/
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
                            col: 1
                        }
                    }
                },
                2:{/*вторая ячейка*/
                    dataType: 'a',
                    dataText: 'Ответ на первый вопрос'
                }
            }
        },
        2:{/*второй вариант ротации*/
            1:{/*первая строка*/
                1:{/*первая ячейка*/
                    dataType: 'q',/*q - тип данных "вопрос"*/
                    dataText: 'Первый вопрос',
                    dataRight: {    /*правильные ответы*/
                        1:{         /*первый правильный ответ*/
                            row: 2, /*в строке 2*/
                            col: 1 /*в ячейке 1*/
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
                    dataType: 'a',
                    dataText: 'Ответ на первый вопрос'
                },
                2:{/*вторая ячейка*/
                    dataType: 'q',
                    dataText: 'Второй вопрос',
                    dataRight: {
                        1:{
                            row: 1,
                            col: 2
                        }
                    }
                }
            }
        }
    }
}

