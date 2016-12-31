
var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
const M={
    m1:[
            {
                title: {
                    text: "2013年部分药品库存情况"
                }, tooltip: {
                trigger: 'axis'
            }, legend: {
                data: ['采购金额', '平均库存金额'],
                x: 'right',
            }, xAxis: [
                {
                    type: 'category',
                    data: ['核苷\n（酸）类', '干扰\n素类', '免疫\n抑制药', '人血\n白蛋白', '乙肝免疫\n球蛋白', '疫苗']
                }
            ], yAxis: [
                {
                    type: 'value',
                    name: '单位：万元',
                    //min: 0,
                    //max: 10000,
                    interval: 2000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }], series: [
                {
                    name: '采购金额',
                    type: 'bar',
                    stack: '库存',
                    data: [9675.01, 4659.99, 1247.28, 1677.7, 770.58, 111.02]
                },
                {
                    name: '平均库存金额',
                    type: 'bar',
                    stack: '库存',
                    data: [607.5, 147.22, 43.71, 178.15, 142.28, 6.73]
                }]
            }, {
                title: {
                    text: "某医院药物供应情况"
                },
                tooltip: {
                    trigger: 'axis'
                },

                legend: {
                    data: ['计划品种数', '缺货品种数'],
                    x: 'right'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['基本药物', '其他药物']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        min: 0,
                        max: 1600,
                        interval: 200,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ],
                series: [
                    {
                        name: '计划品种数',
                        type: 'bar',
                        data: [239, 1533]
                    },
                    {
                        name: '缺货品种数',
                        type: 'bar',
                        data: [155, 44]
                    }
                ]
            }, {
                title: {
                    text: '2010-2014年某医院药品库存周转情况',
                    y: 'bottom',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['西药周转率', '中成药周转率', '中药饮片周转率', '西药销售额', '中成药销售额', '中药饮片销售额'],
                    x: 'right'
                },

                toolbox: {
                    feature: {}
                },
                xAxis: {
                    type: 'category',
                    data: ['2011', '2012', '2013', '2014']
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '单位：%',

                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: '万元',

                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name: '西药周转率',
                        type: 'line',
                        data: [11.65, 14.37, 16.09, 19.38]
                    },
                    {
                        name: '中成药周转率',
                        type: 'line',
                        data: [13.21, 17.32, 25.71, 27.94]
                    },
                    {
                        name: '中药饮片周转率',
                        type: 'line',
                        data: [5.07, 5.8, 6.5, 9.31]
                    },
                    {
                        name: '西药销售额',
                        type: 'bar',
                        yAxisIndex: 1,
                        data: [24617.31, 29181.69, 33340.11, 41518.99]
                    },
                    {
                        name: '中成药销售额',
                        type: 'bar',
                        yAxisIndex: 1,
                        data: [3343.27, 3817.55, 5371.24, 6166.88]
                    },
                    {
                        name: '中药饮片销售额',
                        type: 'bar',
                        yAxisIndex: 1,
                        data: [100.2, 132.95, 184.13, 236.5]
                    }

                ]
            }, {
                title: {
                    text: '2013年药品报损金额统计（元）'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data: ['药品过期', '药品破损', '药品外观变质', '更换批号', '其他', '抢救药品', '基本药物', '季节性药品', '流行性药品', '专科药品', '操作破碎', '操作失误', '变色', '变浑浊', '青霉素类', '头孢菌素类', '退药']
                },
                series: [
                    {
                        name: '药品过期',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 59143, name: '药品过期'},
                            {value: 14570, name: '药品破损', selected: true},
                            {value: 1338, name: '药品外观变质'},
                            {value: 149, name: '更换批号'},
                            {value: 958, name: '其他'}
                        ]
                    },
                    {
                        name: '药品破损',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 38941, name: '抢救药品'},
                            {value: 14138, name: '基本药物'},
                            {value: 2369, name: '季节性药品'},
                            {value: 2813, name: '流行性药品'},
                            {value: 882, name: '专科药品'},
                            {value: 7471, name: '操作破损'},
                            {value: 7099, name: '操作失误'},
                            {value: 1082, name: '变色'},
                            {value: 256, name: '变浑浊'},
                            {value: 98, name: '青霉素类'},
                            {value: 51, name: '头孢菌素类'},
                            {value: 958, name: '退药'},

                        ]
                    }
                ]
            }, {
                title: {
                    text: "某医院药品盘存情况"
                },
                tooltip: {
                    trigger: 'axis'
                },

                legend: {
                    data: ["盈亏金额", "盘盈率", "盘亏率"],
                    x: 'right'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [2012.11, 2012.12, 2013.01, 2013.02, 2013.03, 2013.04]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '单位：元',
                        min: 0,
                        max: 15000,
                        interval: 3000,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: '%',
                        min: 0,
                        max: 100,
                        interval: 10,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ],
                series: [
                    {
                        name: '盈亏金额',
                        type: 'bar',
                        data: [1095.21, 11696.26, 13135.65, 2162.75, 595.32, 4550.34]
                    },
                    {
                        name: '盘盈率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [30.43, 48.15, 36.84, 16.67, 17.14, 35.71]
                    },
                    {
                        name: '盘亏率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [69.57, 51.85, 63.16, 83.33, 82.86, 64.29]
                    }
                ]
            }, {
                title: {
                    text: '2009-2015年某医院药品差价率',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis'
                },

                legend: {
                    data: ['中标药品差价率', '非中标药品差价率'],
                    x: 'right',
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '单位：%',
                        min: 0,
                        max: 50,
                        interval: 10,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },

                ],
                series: [
                    {
                        name: '中标药品差价率',
                        type: 'line',
                        data: [43.8, 33.12, 27.25, 23.59, 21.85, 19, 14.78]
                    },

                    {
                        name: '非中标药品差价率',
                        type: 'line',
                        data: [33.53, 33.11, 31.61, 29.84, 28.66, 25.79, 14.81]
                    }
                ]
            }, {
                title: {
                    text: '2013年某医院药品月平均库存周转率'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'right',
                    data: ['东院西药', '东院中药', '西院西药', '西院中药'],

                },
                toolbox: {
                    show: true,
                    feature: {}
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [
                    {
                        name: '单位：%',
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '东院西药',
                        type: 'line',
                        data: [150.1, 164.4, 170.23, 254.45, 245.1, 228.7, 236.9, 252.23, 250.56, 183.25, 240.1, 308.6],
                        markPoint: {},
                        markLine: {
                            data: []
                        }
                    },
                    {
                        name: '东院中药',
                        type: 'line',
                        data: [203.3, 239.24, 225.56, 274.63, 280.95, 275.54, 298.6, 299.78, 230.89, 259.32, 326.3, 400.6],
                        markPoint: {},
                        markLine: {
                            data: []
                        }
                    },
                    {
                        name: '西院西药',
                        type: 'line',
                        data: [145.6, 120.23, 140.6, 198.57, 140.46, 154.27, 184.43, 192.77, 196.64, 115.57, 176.66, 161.1],
                        markPoint: {},
                        markLine: {
                            data: []
                        }
                    },
                    {
                        name: '西院中药',
                        type: 'line',
                        data: [123.2, 120.34, 103.63, 197.9, 110.96, 119.33, 184.53, 139.67, 134, 115.64, 151.12, 220.52],
                        markPoint: {},
                        markLine: {
                            data: []
                        }
                    }
                ]
            }
        ],
    m2:[
        {
            title: {
                text: "某医院门诊处方合理用药情况"
            },
            tooltip: {

                trigger: 'axis'
            },

            legend: {
                data: ["抗菌药物使用率", "注射剂使用率", "基本药物使用率"],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2009, 2010, 2011, 2012, 2013]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    // min: 0,
                    //max: 100,
                    // interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '抗菌药物使用率',
                    type: 'line',
                    data: [25, 27.5, 21, 17, 19]
                },
                {
                    name: '注射剂使用率',
                    type: 'line',
                    data: [30, 28.5, 21.5, 22, 22]
                },
                {
                    name: '基本药物使用率',
                    type: 'line',
                    data: [47.3, 53.4, 55.4, 53.3, 53]
                },

            ]
        }, {
            title: {
                text: '2010年某医院门诊使用例数前10位的抗菌药物',

            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['药品名称']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    data: ['头孢克洛', '左氧氟沙星', '司帕沙星', '头孢羟胺苄', '阿奇霉素',
                        '头孢唑肟', '加替沙星', '头孢他啶', '美洛西林/舒巴坦', '头孢哌酮/舒巴坦']
                }
            ],
            series: [
                {
                    name: '例数',
                    type: 'bar',
                    data: [690, 935, 989, 1164, 1236, 1248, 1267, 1591, 1664, 1785]
                }
            ]
        }, {
            title: {
                text: "2010年某医院科室抗菌药物使用率排名"
            },
            tooltip: {

                trigger: 'axis'
            },

            legend: {
                data: ["抗菌药物使用率"],
                x: "right"
            },
            xAxis: [
                {
                    type: 'category',
                    data: ["妇产科", "外科", "骨科", "儿科", "五官科", "皮肤科", "消化科", "心内科"]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    //min: 0,
                    //max: 100,
                    //interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }

            ],
            series: [

                {
                    name: '抗菌药物使用率',
                    type: 'bar',
                    data: [79.09, 57.87, 42.01, 40.63, 34.96, 34.77, 11.36, 8.77
                    ]
                },

            ]
        }, {
            title: {
                text: "2009年某医院门诊抗菌药物使用情况"
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ["抗菌药物总金额", "使用抗菌药物品种比例", "使用抗菌药物金额比例"
                ],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第一季度', '第二季度', '第三季度', '第四季度']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位: 元/每百张',
                    min: 0,
                    max: 3500,
                    interval: 700,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 40,
                    interval: 8,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: "抗菌药物总金额",
                    type: 'bar',
                    data: [3433.16, 3373.32, 3182.31, 3014.63]
                },
                {
                    name: "使用抗菌药物品种比例",
                    type: 'line',
                    yAxisIndex: 1,
                    data: [22.54, 20.97, 23.32, 22.75]
                },
                {
                    name: "使用抗菌药物金额比例",
                    type: 'line',
                    yAxisIndex: 1,
                    data: [39.43, 31.08, 28.79, 24.06]
                }
            ]
        }, {
            title: {
                text: "某医院抗菌药物临床使用指标变化情况",
                x: 'center',
                y: 'bottom'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ["门诊患者抗菌药物处方比例", "住院患者抗菌药物使用率", "I类切口手术患者预防使用抗菌药物比例", "微生物检验样本送检率"],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2010', '2011', '2012', '2013', '2014']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位: %',
                    //min: 0,
                    //max: 3500,
                    //interval: 700,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: "门诊患者抗菌药物处方比例",
                    type: 'bar',
                    data: [57.1, 41.7, 34.8, 25.4, 19.3]
                },
                {
                    name: "住院患者抗菌药物使用率",
                    type: 'bar',
                    data: [90.2, 76.9, 65.5, 60.7, 56.5]
                },
                {
                    name: "I类切口手术患者预防使用抗菌药物比例",
                    type: 'bar',
                    data: [94.6, 81.7, 56.3, 29.5, 28.6]
                },
                {
                    name: "微生物检验样本送检率",
                    type: 'bar',
                    data: [8.4, 15.7, 21.8, 29.6, 32.7]
                }
            ]
        }, {
            title: {
                text: "2014年下半年某医院普通外科各种头孢菌素类抗菌药物使用情况"
            },
            tooltip: {

                trigger: 'axis'
            },

            legend: {
                data: ["DDDs", "DDC", 'B/A'],
                x: "right"
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['注射用头孢\n西丁钠(0.5g)', '注射用头孢\n美唑钠(0.5g)', '注射用头孢\n美唑钠(1g)', '注射用头孢\n替唑钠(0.5g)', '注射用头孢\n替唑钠(1g)', '注射用五水\n头孢唑林钠(1g)', '注射用头孢哌酮\n钠舒巴坦钠(1.5g)', '注射用头孢哌酮\n钠舒巴坦钠(4g)', '注射用头孢\n曲松钠(1g)'],
                    axisLabel: {
                        interval: 0,
                        rotate: 90,
                    },
                }
            ],
            grid: {
                y2: 100
            },
            yAxis: [
                {
                    type: 'value',
                    //name: '单位：万元',
                    //min: 0,
                    //max: 160,
                    interval: 120,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    //name: '单位：%',
                    //min: 0,
                    //max: 3.5,
                    interval: 0.2,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }

            ],
            series: [

                {
                    name: 'DDDs',
                    type: 'bar',
                    data: [1045.8, 166.9, 114, 75.6, 23.2, 31.7, 63.8, 14, 72.0]
                },
                {
                    name: 'DDC',
                    type: 'bar',
                    data: [263.8, 222.4, 186.8, 215.1, 240.3, 158.4, 37.7, 28.5, 2.3]
                },
                {
                    name: 'B/A',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [1.0, 1.0, 1.0, 1.0, 0.625, 0.857, 1.167, 0.889, 1.8]
                }
            ]
        }, {
            title: {
                text: "2011-2015年某医院麻醉药品用药情况"
            },
            tooltip: {

                trigger: 'axis'
            },

            legend: {
                data: ["麻醉药品销售金额", '麻醉药品销售金额占比'],
                x: "right"
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2011, 2012, 2013, 2014, 2015]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：万元',
                    min: 0,
                    max: 160,
                    interval: 40,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '单位：%',
                    //min: 0,
                    //max: 160,
                    //interval: 40,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }

            ],
            series: [

                {
                    name: '麻醉药品销售金额',
                    type: 'bar',
                    data: [100.03, 145.73, 158.07, 145.45, 132.67]
                },
                {
                    name: '麻醉药品销售金额占比',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [0.53, 0.67, 0.60, 0.48, 0.39]
                }
            ]
        }, {
            title: {
                text: "2011年某医院麻醉药品DDC及B/A统计"
            },
            tooltip: {

                trigger: 'axis'
            },

            legend: {
                data: ["DDC", 'B/A'],
                x: "right"
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['盐酸羟考酮\n控释片(20mg)', '盐酸羟考酮\n控释片(5mg)', '盐酸哌替啶\n注射液(50mg)', '盐酸吗啡\n注射液(10mg)', '盐酸布桂嗪\n注射液(100mg)', '硫酸吗啡\n缓释片(30mg)', '磷酸\n可待因片(15mg)', '枸橼酸舒芬太尼\n注射液(0.25mg)', '枸橼酸舒芬太\n尼注射液(0.05mg)', '枸橼酸芬太尼\n注射液(0.50mg)', '枸橼酸芬太尼\n注射液(0.10mg)', '芬太尼透皮\n贴剂(8.40mg)'],
                    axisLabel: {
                        interval: 0,
                        rotate: 90,
                    },
                }
            ],
            grid: {
                y2: 100
            },
            yAxis: [
                {
                    type: 'value',
                    //name: '单位：万元',
                    //min: 0,
                    //max: 160,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    //name: '单位：%',
                    //min: 0,
                    max: 3.5,
                    interval: 0.875,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }

            ],
            series: [

                {
                    name: 'DDC',
                    type: 'bar',
                    data: [55.50, 58.80, 13.68, 9.27, 5.14, 18.77, 2.58, 117.08, 193.60, 3.82, 4.88, 47.87]
                },
                {
                    name: 'B/A',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [1.00, 0.78, 1.33, 0.92, 1.25, 0.90, 1.09, 0.50, 0.57, 1.00, 3.00, 1.00]
                }
            ]
        }
    ],
    m3:[
        {
            title: {
                text: "2015年某医院门诊处方统计"
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['平均处方用药品种数', '平均处方金额'],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ["第一季度", "第二季度", "第三季度", "第四季度"]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '品种数',
                    min: 0,
                    max: 5,
                    interval: 1,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '单位:元',
                    min: 0,
                    max: 125,
                    interval: 25,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '平均处方用药品种数',
                    type: 'bar',
                    data: [2.86, 2.58, 2.37, 2.21]
                },

                {
                    name: '平均处方金额',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: [87.06, 109.86, 111.1, 123.39]
                }
            ]
        }, {
            title: {
                text: "某医院门诊处方合理用药统计"
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['抗菌药物处方数', '注射剂处方数', '使用抗菌药物处方比例', '使用注射剂处方比例'],
                x: "right"
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2012, 2013, 2014, 2015]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    //name: '单位：张',
                    min: 0,
                    max: 120000,
                    interval: 30000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '单位:%',
                    //min: 0,
                    max: 28,
                    interval: 7,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }

            ],
            series: [
                {
                    name: '抗菌药物处方数',
                    type: 'bar',
                    data: [74778, 88609, 92183, 106797]
                },

                {
                    name: '注射剂处方数',
                    type: 'bar',
                    data: [42697, 39560, 43159, 47598]
                },
                {
                    name: '使用抗菌药物处方比例',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [20.74, 21.21, 20.25, 20.06]
                },
                {
                    name: '使用注射剂处方比例',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [11.84, 9.47, 9.48, 8.94]
                }
            ]
        }, {
            title: {
                text: "2012年某医院门诊处方抗菌药物使用构成情况",
                x: "center"
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['头孢菌素类', '青霉素类', '喹诺酮类', '硝基咪唑类', '大环内脂类', '其他']
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 995, name: '头孢菌素类'},
                        {value: 274, name: '青霉素类'},
                        {value: 211, name: '喹诺酮类'},
                        {value: 201, name: '硝基咪唑类'},
                        {value: 171, name: '大环内酯类'},
                        {value: 2, name: '其他'},


                    ]
                }
            ]
        }, {
            title: {
                text: '2013年某医院门诊处方抗菌药物联合用药构成',
                //subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: " {a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['单一', '二联', '三联以上']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 1316, name: '单一'},
                        {value: 406, name: '二联'},
                        {value: 145, name: '三联以上'},

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {
            title: {
                text: '2013年某医院门诊处方抗菌药物给药途径构成',
                //subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: " {a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['口服', '注射', '外用']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 1064, name: '口服'},
                        {value: 687, name: '注射'},
                        {value: 116, name: '外用'},

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {
            title: {
                text: '2010年某医院门诊不合理用药处方分类统计结果',
                //subtext: '纯属虚构',
                x: 'center',
                y: 'bottom'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                //orient: 'vertical',
                //x: 'right',
                //y: 'bottom',
                data: ['配伍或联用不合理', '选药不合理', '剂量不合理', '用法不合理', '未考虑药动力学影响', '无明确适用证', '理化配伍禁忌', '生化配伍拮抗', '合用后毒副作用增加', '速效杀菌药与速效抑菌药联用', '中西药联用不合理', '作用于同一受体或同类药联用', '品种繁多', '儿童选用喹诺酮类药物', '孕妇及哺乳妇女用药不当', '对配伍输液的选择不合理', '超大剂量', '剂量偏低', '药物配制的浓度对治疗有影响', 'b-内酰胺类药物1日1次', '氨基糖苷类1日2次']
            },
            series: [
                {
                    name: '处方张数',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '35%'],

                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 1107, name: '配伍或联用不合理', selected: false},
                        {value: 840, name: '选药不合理'},
                        {value: 38, name: '剂量不合理'},
                        {value: 1484, name: '用法不合理'}
                    ]
                },
                {
                    name: '处方张数',
                    type: 'pie',
                    radius: ['50%', '65%'],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 20, name: '未考虑药动力学影响'},
                        {value: 72, name: '无明确适用证'},
                        {value: 16, name: '理化配伍禁忌'},
                        {value: 40, name: '生化配伍拮抗'},
                        {value: 12, name: '合用后毒副作用增加'},
                        {value: 108, name: '速效杀菌药与速效抑菌药联用'},
                        {value: 12, name: '中西药联用不合理'},
                        {value: 260, name: '作用于同一受体或同类药联用'},
                        {value: 567, name: '品种繁多'},
                        {value: 22, name: '儿童选用喹诺酮类药物'},
                        {value: 6, name: '孕妇及哺乳妇女用药不当'},
                        {value: 812, name: '对配伍输液的选择不合理'},
                        {value: 30, name: '超大剂量'},
                        {value: 8, name: '剂量偏低'},
                        {value: 184, name: '药物配制的浓度对治疗有影响'},
                        {value: 1292, name: 'b-内酰胺类药物1日1次'},
                        {value: 8, name: '氨基糖苷类1日2次'},

                    ]
                }
            ]
        },
    ],
    m4:[
        {
            title: {
                text: '2013年药品报损金额统计（元）'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['药品过期', '药品破损', '药品外观变质', '更换批号', '其他', '抢救药品', '基本药物', '季节性药品', '流行性药品', '专科药品', '操作破碎', '操作失误', '变色', '变浑浊', '青霉素类', '头孢菌素类', '退药']
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 59143, name: '药品过期'},
                        {value: 14570, name: '药品破损', selected: true},
                        {value: 1338, name: '药品外观变质'},
                        {value: 149, name: '更换批号'},
                        {value: 958, name: '其他'}

                    ]
                },
                {
                    name: '',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 38941, name: '抢救药品'},
                        {value: 14138, name: '基本药物'},
                        {value: 2369, name: '季节性药品'},
                        {value: 2813, name: '流行性药品'},
                        {value: 882, name: '专科药品'},
                        {value: 7471, name: '操作破损'},
                        {value: 7099, name: '操作失误'},
                        {value: 1082, name: '变色'},
                        {value: 256, name: '变浑浊'},
                        {value: 98, name: '青霉素类'},
                        {value: 51, name: '头孢菌素类'},
                        {value: 958, name: '退药'},

                    ]
                }
            ]
        }, {
            title: {
                text: "某医院药品盘存情况"
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ["盈亏金额", "盘盈率", "盘亏率"],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2012.11, 2012.12, 2013.01, 2013.02, 2013.03, 2013.04]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：元',
                    min: 0,
                    max: 15000,
                    interval: 3000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 100,
                    interval: 10,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '盈亏金额',
                    type: 'bar',
                    data: [1095.21, 11696.26, 13135.65, 2162.75, 595.32, 4550.34]
                },
                {
                    name: '盘盈率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [30.43, 48.15, 36.84, 16.67, 17.14, 35.71]
                },
                {
                    name: '盘亏率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [69.57, 51.85, 63.16, 83.33, 82.86, 64.29]
                }
            ]
        }, {
            title: {
                text: '2009-2015年某医院药品差价率',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['中标药品差价率', '非中标药品差价率'],
                x: 'right',
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：%',
                    min: 0,
                    max: 50,
                    interval: 10,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [
                {
                    name: '中标药品差价率',
                    type: 'line',
                    data: [43.8, 33.12, 27.25, 23.59, 21.85, 19, 14.78]
                },

                {
                    name: '非中标药品差价率',
                    type: 'line',
                    data: [33.53, 33.11, 31.61, 29.84, 28.66, 25.79, 14.81]
                }
            ]
        }, {
            title: {
                text: '2013年某医院药品月平均库存周转率'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'right',
                data: ['东院西药', '东院中药', '西院西药', '西院中药'],

            },
            toolbox: {
                show: true,
                feature: {}
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            ],
            yAxis: [
                {
                    name: '单位：%',
                    type: 'value'
                }
            ],
            series: [

                {
                    name: '东院西药',
                    type: 'line',
                    data: [150.1, 164.4, 170.23, 254.45, 245.1, 228.7, 236.9, 252.23, 250.56, 183.25, 240.1, 308.6],
                    markPoint: {},
                    markLine: {
                        data: []
                    }
                },

                {
                    name: '东院中药',
                    type: 'line',
                    data: [203.3, 239.24, 225.56, 274.63, 280.95, 275.54, 298.6, 299.78, 230.89, 259.32, 326.3, 400.6],
                    markPoint: {},
                    markLine: {
                        data: []
                    }
                },
                {
                    name: '西院西药',
                    type: 'line',
                    data: [145.6, 120.23, 140.6, 198.57, 140.46, 154.27, 184.43, 192.77, 196.64, 115.57, 176.66, 161.1],
                    markPoint: {},
                    markLine: {
                        data: []
                    }
                },
                {
                    name: '西院中药',
                    type: 'line',
                    data: [123.2, 120.34, 103.63, 197.9, 110.96, 119.33, 184.53, 139.67, 134, 115.64, 151.12, 220.52],
                    markPoint: {},
                    markLine: {
                        data: []
                    }
                }
            ]
        },
    ],
    m5:[
        {
            title: {
                text: '2003-2012年某医院发生ADR患者的性别、年龄分布',

            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['男', '女'],
                x: 'right'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    data: ['<18', '19~29', '30~39', '40~49', '50~59', '60~69', '70~79', '80~89', '>90']
                }
            ],
            series: [
                {
                    name: '男',
                    type: 'bar',
                    data: [17, 55, 47, 58, 100, 125, 126, 52, 3]
                },
                {
                    name: '女',
                    type: 'bar',
                    data: [12, 104, 79, 153, 207, 136, 150, 46, 10]
                }
            ]
        }, {
            title: {
                text: '2003-2012年某医院ADR涉及药品种类分布',

            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            legend: {
                data: ['例数'],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        interval: 0,
                        rotate: 90,
                    },
                    data: ['抗微生物药', '中药', '循环系统药物', '解热镇痛及\n非甾体抗炎药', '院内制剂', '神经系统用药', '消化系统药物', '抗肿瘤药物', '激素及调节\n内分泌功能药', '血液系统药物', '专科用药', '免疫系统用药', '调节水、电解质\n及酸碱平衡药物', '呼吸系统药物', '治疗精神障碍药', '维生素及矿物质\n缺乏症用药物', '抗变态反应药物', '营养治疗药', '麻醉用药', '泌尿系统药物', '诊断用药物', '镇痛药', '解毒药', '生物制品']
                }
            ],
            grid: {
                y2: 100
            },
            yAxis: [
                {
                    type: 'value',


                }
            ],
            series: [

                {
                    name: '例数',
                    type: 'bar',
                    data: [563, 511, 168, 86, 82, 66, 62, 43, 42, 42, 33, 27, 23, 16, 16, 12, 10, 9, 7, 7, 6, 6, 3, 3]
                }
            ]
        }, {
            title: {
                text: '2003-2012年某医院发生ADR药物的给药途径统计',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['静脉给药', '口服', '外用', '皮下注射', '不详', '肌内注射', '局部给药', '经眼给药', '静脉注射', '直肠给药', '阴道给药', '泵内注射', '动脉给药', '吸入给药', '含服', '经鼻给药']
            },
            series: [
                {
                    name: '给药途径',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 930, name: '静脉给药'},
                        {value: 731, name: '口服'},
                        {value: 103, name: '外用'},
                        {value: 19, name: '皮下注射'},
                        {value: 13, name: '不详'},
                        {value: 11, name: '肌内注射'},
                        {value: 10, name: '局部给药'},
                        {value: 5, name: '经眼给药'},
                        {value: 5, name: '静脉注射'},
                        {value: 5, name: '直肠给药'},
                        {value: 3, name: '阴道给药'},
                        {value: 2, name: '泵内注射'},
                        {value: 2, name: '动脉给药'},
                        {value: 2, name: '吸入给药'},
                        {value: 1, name: '含服'},
                        {value: 1, name: '经鼻给药'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {
            title: {
                text: '2003-2012年某医院AD累计器官/系统分布',

            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            legend: {
                data: ['例数'],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        interval: 0,
                        rotate: 90,
                    },
                    data: ['皮肤及其附件损害', '全身性损害', '肝胆系统损害', '血液系统损害', '胃肠系统损害', '中枢及外周神经系统损害', '用药部位损害', '心外血管损害', '心血管系统损害', '呼吸系统损害', '泌尿系统损害', '代谢和营养障碍', '肌肉骨骼系统损害', '视觉损害', '听觉和前庭功能损害', '男性生殖系统损害', '女性生殖系统损害', '其他特殊感觉功能损害']
                }
            ],
            grid: {
                y2: 100
            },
            yAxis: [
                {
                    type: 'value',


                }
            ],
            series: [

                {
                    name: '例数',
                    type: 'bar',
                    data: [629, 174, 167, 107, 87, 75, 66, 47, 46, 24, 15, 12, 12, 10, 6, 3, 3, 1]
                }
            ]
        },
    ],
    m6:[
        {
            title: {
                text: '2008-2013年某医院药占比',

            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['门诊（含急诊）', '住院'],
                x: 'right'
            },
            toolbox: {
                show: false,
                feature: {
                    dataZoom: {},
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2008', '2009', '2010', '2011', '2012', '2013']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 30,
                    name: '单位: %'
                }
            ],
            series: [
                {
                    name: '门诊（含急诊）',
                    type: 'line',
                    data: [65.1, 59.99, 56.87, 53.93, 52.47, 50.10],

                },
                {
                    name: '住院',
                    type: 'line',
                    data: [54.62, 51.57, 48.70, 42.66, 41.58, 40.89],

                }
            ]
        }, {
            title: {
                text: '2003-2011年某医院门诊人均药费'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['门诊人均药费'],
                x: 'right'
            },
            toolbox: {
                show: false,
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位:元'
                }
            ],
            series: [
                {
                    name: '门诊人均药费',
                    type: 'line',
                    //stack: '总量',
                    areaStyle: {normal: {}},
                    data: [300.09, 309.14, 302.54, 235.64, 217.02, 255.71, 287.72, 301.59, 310.5]
                }
            ]
        }, {
            title: {
                text: "某医院肺癌患者人均住院药费"
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['西药费', '中成药费', '中草药费'],
                x: 'right',
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2010', '2011', '2012', '2013', '2014']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位:元',
                    //min: 0,
                    //max: 10000,
                    //interval: 2000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '西药费',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [7209.66, 7987.87, 5864.45, 6695.02, 6839.96]
                },
                {
                    name: '中成药费',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [899.67, 1608.17, 1036.4, 1670.54, 1722.81]
                },
                {
                    name: '中草药费',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [58.19, 201.22, 158.73, 191.52, 152.15]
                }

            ]
        }, {
            title: {
                text: "某医院外科病房患者平均治疗费用及药费组成"
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['西药费', '中药费', '手术期间药费', '造影药费', '出院带药'],
                x: 'right',
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['骨科', '肝胆', '乳甲', '胃肠', '心外', '胸外', '耳鼻喉', '脑外', '泌外', '眼科', '妇科', '产科']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位:元',
                    //min: 0,
                    //max: 10000,
                    //interval: 2000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '西药费',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [4719.5, 7951.54, 6328.95, 6557.63, 3195.92, 8134.91, 3130.22, 5406.15, 6763.37, 2168.15, 3439.53, 2754.48]
                },
                {
                    name: '中药费',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [30.71, 18.63, 217.22, 10.93, 0.80, 39.56, 15.20, 122.40, 13.15, 18.97, 36.65, 57.99]
                },
                {
                    name: '手术期间药费',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [792.43, 1477.99, 898.43, 906.09, 646.06, 947.88, 398.49, 722.39, 848.16, 468.35, 688.72, 524.16]
                },
                {
                    name: '造影药费',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [0, 181.56, 106.45, 338.74, 0, 74.84, 24.95, 0, 104.80, 0, 0, 10.4]
                },
                {
                    name: '出院带药',
                    type: 'bar',
                    stack: '住院人均药费',
                    data: [108.24, 16.38, 503.45, 55.08, 41.17, 105.92, 84.63, 137.42, 617.15, 232.38, 116.04, 25.56]
                }

            ]
        }, {
            title: {
                text: "2008-2013年某医院门诊、住院使用抗菌药物患者的人均抗菌药物费用",
                y: 'bottom',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['门诊口服费用', '门诊针剂费用', '住院口服费用', '住院针剂费用'],
                x: 'right',
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2008', '2009', '2010', '2011', '2012', '2013']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位:元',
                    //min: 0,
                    //max: 10000,
                    //interval: 2000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '门诊口服费用',
                    type: 'bar',
                    stack: '门诊',
                    data: [46.53, 42.60, 43.98, 42.98, 42.57, 50.72]
                },
                {
                    name: '门诊针剂费用',
                    type: 'bar',
                    stack: '门诊',
                    data: [55.97, 59.92, 49.21, 41.57, 49.30, 46.68]
                },
                {
                    name: '住院口服费用',
                    type: 'bar',
                    stack: '住院',
                    data: [71.96, 88.02, 92.88, 118.38, 96.33, 125.80]
                },
                {
                    name: '住院针剂费用',
                    type: 'bar',
                    stack: '住院',
                    data: [2220.69, 2189.34, 2135.13, 1955.78, 2119.58, 2116.96]
                }

            ]
        },
    ],
}
const F={
    f1:[
        {
            title: {
                text: '某院医疗收入情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['医疗收入', '环比']
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：万元',
                    min: 0,
                    max: 150,
                    interval: 30,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 30,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [

                {
                    name: '医疗收入',
                    type: 'bar',

                    data: [49.67, 61.72, 73.76, 90.78, 107.8, 121.8, 128.8, 135.8]
                },

                {
                    name: '环比',
                    type: 'line',
                    yAxisIndex: 1,
                    data: ['-', 24.26, 19.51, 23.07, 18.75, 12.99, 5.75, 5.43]
                }
            ]
        }, {
            title: {
                text: '某院医疗收入情况',
                subtext: '单位：万元'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['门诊收入', '住院收入']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2012', '2013']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '门诊收入',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#4387ac'}
                    },
                    data: [4133.5, 7385.9]
                },
                {
                    name: '住院收入',
                    type: 'bar',
                    stack: '',
                    data: [4435.8, 7635.4]
                },

            ]
        }, {
            title: {
                text: '2013年某院医疗收入构成情况',
                subtext: '',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{d}%"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    }

                }
            },
            calculable: true,
            series: [

                {
                    name: '2013年',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['50%', 200],
                    roseType: 'area',
                    data: [
                        {value: 37.11, name: '药品收入'},
                        {value: 17.62, name: '治疗收入'},
                        {value: 9.49, name: '卫生材料收入'},
                        {value: 4.12, name: '手术收入'},
                        {value: 20.22, name: '检查收入'},
                        {value: 11.44, name: '其它收入'}

                    ]
                }
            ]
        }, {
            title: {
                text: '某院业务收支情况',
                subtext: ''
            }
            ,
            tooltip: {
                trigger: 'axis'
            },

            calculable: true,
            legend: {
                data: ['业务收入', '业务支出'],

            },
            xAxis: [
                {
                    type: 'category',
                    data: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：万元',
                    interval: 5000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
            ],
            series: [

                {
                    name: '业务收入',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#2fb38e'}
                    },
                    data: [12522.1, 17165.8, 21367.61, 23616.41, 23786.78, 30190.01, 34112.93, 42614.57
                    ]
                },
                {
                    name: '业务支出',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#4c9da0'}
                    },
                    data: [13073.37, 16916.48, 20452.69, 24291.81, 23372.9, 30839.61, 34479.38, 40871.4
                    ]
                },

            ]
        }, {
            title: {
                text: '某院总收支情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['总收入', '总支出', '收支结余', '经费自给率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：万元',
                    min: 0,
                    max: 45000,
                    interval: 5000,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    min: 97,
                    max: 100,
                    Interval: 5,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [

                {
                    name: '总收入',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#61b296'}
                    },
                    data: [12870.94, 17568.22, 21762.89, 24026.8, 24283.68, 31048.61, 35051.82, 43519.09,
                    ]
                },
                {
                    name: '总支出',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#e0d8b8'}
                    },
                    data: [13203.37, 16916.48, 20516.4, 24309.81, 23449.9, 31025.61, 34622.24, 40927.9,
                    ]
                },
                {
                    name: '收支结余',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#e88f59'}
                    },
                    data: [-332.43, 651.74, 1246.49, -283.01, 833.78, 23, 429.58, 2591.19,

                    ]
                },
                {
                    name: '经费自给率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [97.34, 97.71, 98.18, 98.29, 97.95, 97.23, 97.32, 97.92,
                    ]
                }
            ]
        }, {
            title: {
                text: '某院收入及构成变化趋势',
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: false,
                y: 'bottom',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            legend: {
                x: "right",
                data: ['总收入', '医疗收入', '财政补助收入', '科教项目收入', '其他收入', '总收入增长率']
            },
            xAxis: [
                {
                    type: 'category',
                    splitLine: {show: false},
                    data: ['2010', '2011', '2012', '2013', '2014']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    position: 'left',
                    name: '单位：千元'
                },
                {
                    type: 'value',
                    name: '%',
                    position: 'right',
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '总收入',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#4e98a1'}
                    },
                    data: [367579, 424452, 505602, 528865, 627681]
                },
                {
                    name: '医疗收入',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#3692c5'}
                    },

                    tooltip: {trigger: 'item'},
                    stack: '费用',
                    data: [336747, 393041, 447371, 489892, 588027]
                },
                {
                    name: '财政补助收入',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#ccccff'}
                    },
                    tooltip: {trigger: 'item'},
                    stack: '费用',
                    data: [27193, 30322, 48655, 35907, 34609]
                },
                {
                    name: '科教项目收入',
                    type: 'bar',
                    tooltip: {trigger: 'item'},
                    stack: '费用',
                    data: [0, 0, 1278, 2068, 3506]
                },
                {
                    name: '其他收入',
                    type: 'bar',
                    tooltip: {trigger: 'item'},
                    stack: '费用',
                    data: [3609, 1089, 8298, 998, 1539]
                },
                {
                    name: '总收入增长率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: ['-', 15.48, 19.12, 4.6, 18.68],
                },
            ]
        }, {
            title: {
                text: '某院门诊收入构成变化趋势',
                x: 'center',
                y: 'bottom'
                // subtext: '数据虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['挂号收入', '诊察收入', '检查收入', '化验收入', '治疗收入', '手术收入', '卫生材料收入', '药品收入', '其他门诊收入']
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['2010', '2011', '2012', '2013', '2014']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：千元',
                }
            ],
            series: [
                {
                    name: '挂号收入',
                    type: 'bar',
                    data: [936, 1262, 1441, 1565, 1675],

                },
                {
                    name: '诊察收入',
                    type: 'bar',
                    data: [335, 303, 356, 339, 296],

                },
                {
                    name: '检查收入',
                    type: 'bar',
                    data: [17544, 23987, 27513, 28354, 41175],

                },
                {
                    name: '化验收入',
                    type: 'bar',
                    data: [5065, 6373, 8076, 9802, 12290],

                },
                {
                    name: '治疗收入',
                    type: 'bar',
                    data: [8145, 10786, 11461, 12612, 19391],
                },
                {
                    name: '手术收入',
                    type: 'bar',
                    data: [1313, 1404, 1444, 1670, 2243],
                },
                {
                    name: '卫生材料收入',
                    type: 'bar',
                    data: [0, 0, 1350, 3981, 5392],
                },
                {
                    name: '药品收入',
                    type: 'bar',
                    data: [57789, 69007, 80370, 105779, 123325],
                },
                {
                    name: '其他门诊收入',
                    type: 'bar',
                    data: [2749, 3608, 10154, 1670, 13951],
                },
            ]
        }, {
            title: {
                text: '2014年某院总支出与医疗支出构成情况',
                //subtext: '纯属虚构',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            series: [
                {
                    name: '总支出构成（元）',
                    type: 'pie',
                    radius: '55%',
                    center: ['25%', 200],
                    data: [
                        {value: 516227850.73, name: '医疗支出'},
                        {value: 6382639.75, name: '财政项目补助支出'},
                        {value: 525676.65, name: '科教项目支出'},
                        {value: 57460846.4, name: '管理费用'},
                        {value: 1527168.27, name: '其他支出'}
                    ]
                },
                {
                    name: '医疗支出构成（元）',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', 200],
                    roseType: 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort: 'ascending',     // for funnel
                    data: [
                        {value: 151666455.32, name: '人员经费'},
                        {value: 103939934.14, name: '卫生材料支出'},
                        {value: 240171851.78, name: '药品支出'},
                        {value: 1208495.81, name: '固定资产折旧'},
                        {value: 1173.12, name: '无形资产摊销'},
                        {value: 1811483.47, name: '提取医疗风险资金'},
                        {value: 74889303.49, name: '其他支出'}
                    ]
                }
            ]
        },
    ],
    f2:[
        {
            title: {
                text: '2014年4季度某院成本构成图',
                subtext: '单位：元'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['门诊成本', '住院成本'],
                x: 'right'
            },
            series: [
                {
                    name: '成本',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 16858490.26, name: '门诊成本', selected: true},
                        {value: 20689322.22, name: '住院成本'},
                    ]
                },
                {
                    name: '',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    data: [
                        {value: 7215341.77, name: '门诊医疗成本'},
                        {value: 9643148.49, name: '门诊药品成本'},
                        {value: 13064062.53, name: '住院医疗成本'},
                        {value: 7625259.69, name: '住院药品成本'},

                    ]
                }
            ]
        }, {

            legend: {
                x: 'center',
                y: 'center',
                data: [
                    '科室', '外科', '内科', 'CCU', 'ICU', '妇科', '儿科', '骨科', '综合科']
            },
            title: {
                text: '2015年9月各主要科室部门住院药品成本比(VS医疗成本比)',

                x: 'center'
            },
            toolbox: {
                show: false,
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                width: '20%',
                                height: '30%',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            formatter: function (params) {
                                                return 'other\n' + params.value + '%\n'
                                            },
                                            textStyle: {
                                                baseline: 'middle'
                                            }
                                        }
                                    },
                                }
                            }
                        }
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    type: 'pie',
                    center: ['10%', '30%'],
                    radius: radius,
                    x: '0%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 58.13, itemStyle: labelBottom},
                        {name: '外科', value: 41.87, itemStyle: labelTop}
                    ]
                },
                {
                    type: 'pie',
                    center: ['30%', '30%'],
                    radius: radius,
                    x: '20%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 57.23, itemStyle: labelBottom},
                        {name: '内科', value: 42.77, itemStyle: labelTop}
                    ]
                },
                {
                    type: 'pie',
                    center: ['50%', '30%'],
                    radius: radius,
                    x: '40%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 64.75, itemStyle: labelBottom},
                        {name: 'CUU', value: 35.25, itemStyle: labelTop}
                    ]
                },
                {
                    type: 'pie',
                    center: ['70%', '30%'],
                    radius: radius,
                    x: '60%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 71.58, itemStyle: labelBottom},
                        {name: 'ICU', value: 28.42, itemStyle: labelTop}
                    ]
                },
                {
                    type: 'pie',
                    center: ['90%', '30%'],
                    radius: radius,
                    x: '80%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 81.08, itemStyle: labelBottom},
                        {name: '妇科', value: 18.92, itemStyle: labelTop}
                    ]
                },
                {
                    type: 'pie',
                    center: ['30%', '70%'],
                    radius: radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 67.34, itemStyle: labelBottom},
                        {name: '儿科', value: 32.66, itemStyle: labelTop}
                    ]
                },
                {
                    type: 'pie',
                    center: ['50%', '70%'],
                    radius: radius,
                    y: '55%',   // for funnel
                    x: '20%',    // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 56.28, itemStyle: labelBottom},
                        {name: '骨科', value: 43.72, itemStyle: labelTop}
                    ]
                },
                {
                    type: 'pie',
                    center: ['70%', '70%'],
                    radius: radius,
                    y: '55%',   // for funnel
                    x: '40%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {name: 'other', value: 72.86, itemStyle: labelBottom},
                        {name: '综合科', value: 27.14, itemStyle: labelTop}
                    ]
                }

            ]
        }, {
            title: {
                text: '2013年2季度某院成本收益率',
                subtext: ''
            },
            tooltip: {},
            legend: {
                data: ['门诊', '住院']
            },

            xAxis: {
                data: ['总收入\n成本收益率', '医疗收入\n成本收益率', '药品收入\n成本收益率']
            },
            yAxis: {
                type: 'value',
                name: '%',
                axisLabel: {
                    formatter: '{value} '
                }
            },
            series: [{
                name: '门诊',
                type: 'bar',
                data: [10.18, -6.5, 22.66],

            },
                {
                    name: '住院',
                    type: 'bar',
                    data: [21.39, -38.12, 7.27],

                }
            ]
        }, {
            title: {
                text: '2015年3月某院科室直接成本（医疗成本口径）',
                x: 'center',
                y: 'bottom'
                // subtext: '数据虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['人员经费', '卫生材料费', '药品费', '固定资产折旧', '无形资产摊销', '提取医疗风险基金', '其他费用']
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['临床科室', '医技科室', '医辅科室', '管理费用']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：元',
                }
            ],
            series: [
                {
                    name: '人员经费',
                    type: 'bar',
                    data: [8467500, 2831000, 1353500, 2747650],

                },
                {
                    name: '卫生材料费',
                    type: 'bar',
                    data: [2893793, 4225706, 606052, 162018],

                },
                {
                    name: '药品费',
                    type: 'bar',
                    data: [25106827, 0, 0, 0],

                },
                {
                    name: '固定资产折旧',
                    type: 'bar',
                    data: [976245, 2163172, 346741, 234101],

                },
                {
                    name: '无形资产摊销',
                    type: 'bar',
                    data: [0, 3347, 0, 0],

                },
                {
                    name: '提取医疗风险基金',
                    type: 'bar',
                    data: [166255, 0, 0, 0],

                },
                {
                    name: '其他费用',
                    type: 'bar',
                    data: [1270115, 497000, 470284, 875222],

                },

            ]
        },
    ],
    f3: [
        {
            title: {
                text: '某院业务收支情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},

                }
            },
            calculable: true,
            legend: {
                data: ['收支结余率', '业务支出', '业务收入'],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2011', '2012', '2013', '2014', '2015']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：万元',
                    min: 0,
                    max: 32000,
                    interval: 4000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    //min: -5,
                    //  max: 0,
                    // interval: -1,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [

                {
                    name: '业务收入',
                    type: 'bar',
                    data: [8847.31, 12131.14, 19338.73, 25422.38, 29885.21]
                },
                {
                    name: '业务支出',
                    type: 'bar',
                    data: [9156.21, 12472.8, 19527.29, 25541.59, 30006.64]
                },
                {
                    name: '收支结余率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [-3.49, -2.82, -0.98, -0.47, -0.41]
                }
            ]
        }, {
            title: {
                text: '某院药品收支情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},

                }
            },
            calculable: true,
            legend: {
                data: ['药品收入', '药品支出', '药品收支结余'],
                x: 'right',
            },

            xAxis: [
                {
                    type: 'category',
                    data: ['2011', '2012', '2013', '2014', '2015']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：万元',
                    min: 0,
                    max: 15000,
                    interval: 3000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '',
                    min: 0,
                    max: 2000,
                    interval: 500,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [

                {
                    name: '药品收入',
                    type: 'bar',
                    data: [3957.44, 5475.37, 8537.18, 10893.49, 12938.01]
                },
                {
                    name: '药品支出',
                    type: 'bar',
                    data: [3299.01, 4654.57, 7174.4, 9139.47, 11133.07]
                },
                {
                    name: '药品收支结余',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [658.43, 820.8, 1362.78, 1754.02, 1804.94]
                }
            ]
        }, {
            title: {
                text: '某院资产收益率情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},

                }
            },
            calculable: true,
            legend: {
                data: ['总资产收益率', '净资产收益率'],
                x: 'right',
            },

            xAxis: [
                {
                    type: 'category',
                    data: ['2010', '2011', '2012', '2013', '2014']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: -2,
                    max: 14,
                    interval: 2,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '总资产收益率',
                    type: 'bar',
                    data: [-1.89, 4.84, 0.11, 0.13, 12.42]
                },
                {
                    name: '净资产收益率',
                    type: 'bar',
                    data: [-1.13, 2.94, 0.89, 1.37, 8.26]
                },

            ]
        }, {
            title: {
                text: '2011年某院总资产构成',
                subtext: '单位：万元',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['货币资金', '应收医疗款', '其他应收款', '存货', '固定资产', '在建工程']
            },

            series: [
                {
                    name: '资产构成',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 3290.6, name: '货币资金'},
                        {value: 1002.6, name: '应收医疗款'},
                        {value: 3283.6, name: '其他应收款'},
                        {value: 283.4, name: '存货'},
                        {value: 5866.8, name: '固定资产'},
                        {value: 2340.6, name: '在建工程'}

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 1000,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {
            title: {
                text: '2010-2014年某院资产收益率变化趋势'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},

                }
            },
            calculable: true,
            legend: {
                data: ['固定资产收益率', '流动资产收益率'],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2010', '2011', '2012', '2013', '2014']
                }
            ],
            yAxis: [
                {
                    type: '',
                    name: '%',
                    min: -1.5,
                    max: 2.5,
                    interval: 0.5,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '固定资产收益率',
                    type: 'bar',
                    data: [0.2, -0.35, 0.04, 0.4, 0.53]
                },
                {
                    name: '流动资产收益率',
                    type: 'bar',
                    data: [0.93, -1.1, 0.09, 1.4, 2.07]
                },

            ]
        },
    ],
    f4: [
        {
            title: {
                text: '某院资产周转率'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},

                }
            },
            calculable: true,
            legend: {
                data: ['流动资产周转率', '药品周转率', '卫生材料周转率', '应收账款周转率'],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2009', '2010', '2011', '2012', '2013']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '流动资产周转率',
                    type: 'bar',
                    data: [4.1, 4.11, 4.66, 4.45, 3.97]
                },
                {
                    name: '药品周转率',
                    type: 'bar',
                    data: [10.5, 9.99, 10.8, 7.43, 8.78]
                },
                {
                    name: '卫生材料周转率',
                    type: 'bar',
                    data: [70.93, 45.61, 47.46, 37.62, 35.39]
                },
                {
                    name: '应收账款周转率',
                    type: 'bar',
                    data: [9.77, 10.72, 14.95, 18.78, 19.61]
                },
            ]
        }, {
            title: {
                text: '某院药品周转率'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['西药周转率', '中成药周转率', '中药饮片周转率'],
                x: 'right'
            },
            toolbox: {
                feature: {}
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: [2010, 2011, 2012, 2013]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    axisLabel: {
                        formatter: '{value} '
                    },
                }
            ],
            series: [
                {
                    name: '西药周转率',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [11.65, 14.37, 16.09, 19.38]
                },
                {
                    name: '中成药周转率',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [13.21, 17.32, 25.71, 27.94]
                },
                {
                    name: '中药饮片周转率',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [5.07, 5.8, 6.5, 9.31]
                }

            ]
        }, {
            title: {
                text: '某院资产周转率'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},

                }
            },
            calculable: true,
            legend: {
                data: ['总资产周转率', '存货周转率', '药品周转率', '应收账款周转率', '流动资产周转率'],
                x: 'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2012', '2013']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 20,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '总资产周转率',
                    type: 'bar',
                    data: [0.902, 0.973]
                },
                {
                    name: '存货周转率',
                    type: 'bar',
                    data: [11.376, 12.433]
                },
                {
                    name: '药品周转率',
                    type: 'bar',
                    data: [11.158, 18.579]
                },
                {
                    name: '应收账款周转率',
                    type: 'bar',
                    data: [3.893, 3.723]
                },
                {
                    name: '流动资产周转率',
                    type: 'bar',
                    data: [3.139, 3.028]
                },
            ]
        }, {
            title: {
                text: '某院流动资产周转天数'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['流动资产周转天数', '应收账款周转天数', '药品周转天数', '存货周转天数'],
                x: 'right'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2009', '2010']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}天 '
                    }
                }
            ],
            series: [
                {
                    name: '流动资产周转天数',
                    type: 'bar',
                    data: [115, 119]
                },
                {
                    name: '应收账款周转天数',
                    type: 'bar',
                    stack: '',
                    data: [93, 97]
                },
                {
                    name: '药品周转天数',
                    type: 'bar',
                    stack: '',
                    data: [33, 20]
                },
                {
                    name: '存货周转天数',
                    type: 'bar',
                    stack: '',
                    data: [32, 29]
                },

            ]
        },
    ],
    f5:[
        {
            title: {
                text: '某院负债率'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['资产负债率', '长期负债率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2010, 2011, 2012, 2013, 2014]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 50,
                    interval: 10,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },

            ],
            series: [

                {
                    name: '资产负债率',
                    type: 'bar',
                    data: [45.13, 33.37, 40.73, 43.05, 42.55]
                },
                {
                    name: '长期负债率',
                    type: 'bar',
                    data: [4.16, 3.31, 2.19, 1.58, 0.99]
                },

            ]
        }, {
            title: {
                text: '某院偿债能力'
            },
            tooltip: {

                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['流动比率', '速动比率', '现金比率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2011, 2012, 2013, 2014, 2015]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 70,
                    interval: 10,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [
                {
                    name: '流动比率',
                    type: 'bar',
                    data: [62.88, 55.35, 57.7, 58.97, 48.99]
                },
                {
                    name: '速动比率',
                    type: 'bar',
                    data: [56.44, 46.43, 48.43, 43.7, 38.49]
                }
                ,
                {
                    name: '现金比率',
                    type: 'bar',
                    data: [14.57, 6.06, 11.31, 7.2, 2.02]
                },


            ]
        }, {
            title: {
                text: '某院资产负债率',
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['资产负债率', '发展速度环比', '增长速度环比']
            },
            toolbox: {
                show: true,
                feature: {}
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 30,
                    max: 50,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '资产负债率',
                    type: 'line',

                    data: [39.66, 40.04, 34.94, 45.13, 33.37, 40.73, 43.05, 42.55],
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        }, {
            title: {
                text: '某院负债构成',
                subtext: '单位：万元'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['短期借款', '应付账款', '预收医疗款', '应付社会保障金', '其他应付款', '长期借款']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 18500, name: '短期借款'},
                        {value: 11613.55, name: '应付账款'},
                        {value: 0.86, name: '预收医疗款'},
                        {value: 6304.44, name: '应付社会保障金'},
                        {value: 3294.36, name: '其他应付款'},
                        {value: 42278.24, name: '长期借款'}

                    ]
                }
            ]
        }, {
            title: {
                text: '某院偿债能力'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},

                }
            },
            calculable: true,
            legend: {
                data: ['某医院实际值', '行业均值']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['流动\n比率', '速动\n比率', '应收款项\n周转率', '存货\n周转率', '流动资产\n周转率', '资产\n负债率', '长期\n负债率', '净资产\n负债率'
                    ]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 60,
                    interval: 10,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '某医院实际值',
                    type: 'bar',
                    data: [2.05, 1.95, 2.67, 13.81, 1.64, 22.9, 5.24, 29.83,]
                },
                {
                    name: '行业均值',
                    type: 'line',

                    data: [1.45, 1.27, 2.81, 9.34, 1.7, 34.33, 13.56, 52.27]
                }
            ]
        },
    ],
    f6:[
        {
            title: {
                text: '某院资产增长率'
            },
            tooltip: {

                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['业务收入增长率', '净资产增长率', '总资产增长率', '净资产收益率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2011, 2012, 2013, 2014, 2015]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 30,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [
                {
                    name: '业务收入增长率',
                    type: 'bar',
                    data: [10.52, 0.72, 26.92, 12.99, 24.92]
                },
                {
                    name: '净资产增长率',
                    type: 'bar',
                    data: [3.25, 27.09, 8.13, 4.36, 21.33]
                }
                ,
                {
                    name: '总资产增长率',
                    type: 'bar',
                    data: [22.41, 4.66, 21.56, 8.61, 20.25]
                },
                {
                    name: '净资产收益率',
                    type: 'bar',
                    data: [-1.89, 4.84, 0.11, 0.13, 12.42]
                }

            ]
        }, {
            title: {
                text: '某院资产增长率变化趋势',

            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['资产负债率', '净资产增长率', '固定资产增长率'],

            },
            toolbox: {
                show: true,
                feature: {}
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2011', '2012', '2013', '2014', '2015']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    axisLabel: {
                        formatter: '{value}  '
                    }
                }
            ],
            series: [
                {
                    name: '资产负债率',
                    type: 'line',
                    data: [42.7, 48.28, 46.7, 45.53, 49.92],
                    markPoint: {},
                    markLine: {
                        data: []
                    }
                },
                {
                    name: '净资产增长率',
                    type: 'line',
                    data: [4.72, 9.54, 45.47, 37.92, 18.23],
                    markPoint: {},
                    markLine: {
                        data: []
                    }
                },
                {
                    name: '固定资产增长率',
                    type: 'line',
                    data: [14.08, 11.76, 27.54, 54.81, 32.1],
                    markPoint: {},
                    markLine: {
                        data: []
                    }
                }
            ]
        }, {
            title: {
                text: '某院固定资产量'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['固定资产量', '固定资产增长率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：元',
                    min: 0,
                    max: 350000000,
                    interval: 50000000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 40,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [

                {
                    name: '固定资产量',
                    type: 'bar',

                    data: [107705381.6, 146569609.8, 162490826.9, 221143883.1, 238243234.4, 273735172.9, 294565871.1, 339642397.6]
                },


                {
                    name: '固定资产增长率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: ['-', 36.08, 10.86, 36.1, 7.73, 14.9, 7.61, 15.3]
                }
            ]
        }, {
            title: {
                text: '某院总资产量'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['总资产量', '总资产增长率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '单位：元',
                    min: 0,
                    max: 480000000,
                    interval: 60000000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 35,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [

                {
                    name: '总资产量',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#899ab0'}
                    },
                    data: [153281402, 199922710.2, 226018797.5, 276672797.3, 289573637.6, 352019352.9, 382335264.4, 459774246.1]
                },


                {
                    name: '总资产增长率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: ['-', 30.43, 13.05, 22.41, 4.66, 21.56, 8.61, 20.25]
                }
            ]
        }, {
            title: {
                text: '某院成长性分析指标'
            },
            tooltip: {

                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {}
            },
            calculable: true,
            legend: {
                data: ['某医院实际值', '行业平均值']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['业务收入增长率', '收支结余增长率', '总资产周转率', '固定资产周转率']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',
                    min: 0,
                    max: 120,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '某医院实际值',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#3283b0'}
                    },
                    data: [19.39, 116.94, 37.18, 34.99]
                },
                {
                    name: '行业平均值',
                    type: 'line',
                    data: [21.66, 56.89, 27.33, 22.54]
                },
            ]
        },
    ],
    f7:[
        {
            title: {
                text: '2013年某院现金流量净额',
                subtext: '单位：元'
            },
            tooltip: {},
            legend: {
                data: ['净额']
            },
            xAxis: {
                data: ["业务活动产生\n的现金流量净额", "投资活动产生\n的现金流量净额", "筹资活动产生\n的现金流量净额", "现金净增加额"]
            },
            yAxis: {},
            series: [{
                name: '净额',
                type: 'bar',
                itemStyle: {
                    normal: {color: '#38b1b7'}
                },
                data: [126273.13, 111130.15, 111130.15, 28971.15,]
            }]
        }, {

            title: {
                text: '2013年某院业务活动产生的现金流入量',
                subtext: '单位：元'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['现金流入小计', '开展医疗服务活动收到的现金', '财政基本支出补助收到的现金', '财政非资本性项目补助收到的现金', '从事科教项目活动收到的除财政补助以外的现金', '收到的其他与业务活动有关的现金']
            },
            series: [
                {
                    name: '现金流入',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 777812.05, name: '开展医疗服务活动收到的现金'},
                        {value: 37100.9, name: '财政基本支出补助收到的现金'},
                        {value: 9599.88, name: '财政非资本性项目补助收到的现金'},
                        {value: 218.53, name: '从事科教项目活动我收到的除财政补助以外的现金'},
                        {value: 152291.85, name: '收到的其他与业务活动有关的现金'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {
            title: {
                text: '某市公立医院2009年现金流量总体情况',
                subtext: '单位：万元',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ["业务活动产生的现金流量净额", "投资活动产生的现金流量净额", "筹资活动产生的现金流量净额"]
            },
            series: [
                {
                    name: '现金流量',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 30.47, name: '业务活动产生的现金流量净额'},
                        {value: 43.34, name: '投资活动产生的现金流量净额'},
                        {value: 18.54, name: '筹资活动产生的现金流量净额'}

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {

            title: {
                text: '2015年9月某院流动资产构成情况',
                subtext: '单位：万元'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['货币资金', '应收在院病人医疗款', '应收医疗款', '其他应收款', '药品净额', '库存物资']
            },
            series: [
                {
                    name: '资产构成',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 17346.52, name: '货币资金'},
                        {value: 1464.33, name: '应收在院病人医疗款'},
                        {value: 2653.75, name: '应收医疗款'},
                        {value: 13567.76, name: '其他应收款'},
                        {value: 2374.76, name: '药品净额'},
                        {value: 67.25, name: '库存物资'}

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {
            title: {
                text: '2013年3季度某院净资产构成情况',
                subtext: '单位：万元'
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['事业基金', '专用基金', '待冲基金', '财政补助结转（余）', '本期结余']
            },
            series: [
                {
                    name: '资产构成',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 7358.78, name: '事业基金'},
                        {value: 7084.27, name: '专用基金'},
                        {value: 45290.83, name: '待冲基金'},
                        {value: 4563.66, name: '财政补助结转（余）'},
                        {value: 494.97, name: '本期结余'}
                    ]
                }
            ]
        },
    ],
}
const E={
    e1:[
        {

            title: {
                text: 'MRI2012年度工作量情况统计'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['月工作量(人次)', '开机天数(天)', '日最高工作量(人次)'],
                x: 'right'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '月工作量(人次)',
                    type: 'line',

                    data: [491, 523, 748, 892, 802, 813, 852, 864, 841, 827, 858, 836]
                },
                {
                    name: '开机天数(天)',
                    type: 'line',

                    data: [30, 28, 30, 30, 29, 30, 30, 29, 29, 30, 29, 30]
                },
                {
                    name: '日最高工作量(人次)',
                    type: 'line',

                    data: [25, 29, 31, 46, 41, 39, 36, 42, 40, 28, 35, 27]
                }

            ]
        }, {
            title: {
                text: '某院部分设备使用情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['设备使用率', '设备利用率'],
                x: 'right'
            },

            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['眼科\n裂隙灯', '电测听', '喉窥镜', '耳鼻喉科\n综合\n治疗台', '电脑\n视野\n机器', '光动\n力学\n治疗']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%'
                }
            ],
            series: [
                {
                    name: '设备使用率',
                    type: 'line',
                    data: ['95', '60', '60', '95', '60', '13.90']
                },
                {
                    name: '设备利用率',
                    type: 'line',
                    data: ['100', '8.40', '3', '100', '0.24', '0.37']
                }

            ]
        }, {
            title: {
                text: '万元以上设备单机使用率统计情况',
                //subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['2007年', '2008年', '2009年']
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['1-5万元', '5-10万元', '10万元以上']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%'
                }
            ],
            series: [
                {
                    name: '2007年',
                    type: 'bar',
                    data: [74, 70, 79],

                },
                {
                    name: '2008年',
                    type: 'bar',
                    data: [63, 63, 68],

                },
                {
                    name: '2009年',
                    type: 'bar',
                    data: [58, 58, 68],

                }
            ]
        }, {
            title: {
                text: '大型医疗核磁设备4年效益情况'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['工作量', '收入']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2011年', '2012年', '2013年', '2014年']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '人次',

                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '万元',

                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: '工作量',
                    type: 'bar',
                    data: [755, 944, 1055, 1067]
                },

                {
                    name: '收入',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [68, 85, 95, 96]
                }
            ]
        }, {
            title: {
                text: '2014年1-5月份每月大型检查阳性率统计'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['CT查阳率', 'MRI查阳率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月份', '2月份', '3月份', '4月份', '5月份']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',

                    axisLabel: {
                        formatter: '{value} '
                    }
                }

            ],
            series: [
                {
                    name: 'CT查阳率',
                    type: 'bar',
                    data: [87, 89, 89, 80, 76]
                },

                {
                    name: 'MRI查阳率',
                    type: 'bar',
                    data: [73, 75, 77, 80, 42]
                }
            ]
        }, {
            title: {
                text: '2015年某院放射X线查阳率统计'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['放射X线查阳率']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月份', '2月份', '3月份', '4月份', '5月份', '6月份', '7月份', '8月份']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',

                    axisLabel: {
                        formatter: '{value} '
                    }
                }

            ],
            series: [
                {
                    name: '放射X线查阳率',
                    type: 'bar',
                    data: [56.75, 56.75, 52, 50.9, 50, 48, 52.97, 55.91]
                }

            ]
        },
    ],
    e2:[
        {
            title: {
                text: '某院医疗设备与其他设备总额',
                //subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['医疗设备', '其他设备']
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['2002年', '2003年', '2004年', '2005年', '2006年']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '元'
                }
            ],
            series: [
                {
                    name: '医疗设备',
                    type: 'bar',
                    data: [76701153.9, 118171835.8, 129476966.4, 147393641.6, 157108616.1],


                },
                {
                    name: '其他设备',
                    type: 'bar',
                    data: [62623705.8, 66826674.2, 79363265.4, 85268180, 89473751.2]
                }
            ]
        }, {
            title: {
                text: '大型医疗核磁设备4年效益情况',
                //subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['设备年利润率(%)']
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['2001年', '2002年', '2003年', '2004年']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [

                {
                    name: '设备年利润率(%)',
                    type: 'line',
                    data: [-0.093, -0.058, -0.038, -0.056],

                }
            ]
        }, {
            title: {
                text: '某院主要科室大型医用设备使用效益分析'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['拥有万元以上设备数', '设备总值', '月均设备利润率(%)'],
                x: 'right'
            },

            xAxis: [
                {
                    type: 'category',
                    data: ['肾内科', '感染科', '普外科', '脑外科', '手术室', '检验科', '核医学室', '高压氧室', '康复科']
                }
            ],
            yAxis: [

                {
                    type: 'value',
                    name: '万元',

                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '设备数',

                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [

                {
                    name: '设备总值',
                    type: 'bar',
                    data: [29.4, 31, 11, 30, 489.1, 131.3, 5, 8, 12.4],
                },
                {
                    name: '拥有万元以上设备数',
                    type: 'bar',
                    data: [3, 2, 2, 4, 17, 9, 4, 1, 12],
                },
                {
                    name: '月均设备利润率(%)',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [12.33, 8.06, 10.85, 6.29, 9.8, 8.34, 11.25, 11.07, 10.8],
                }
            ]
        }, {
            title: {
                text: '某院大型医用设备使用效益分析'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['月均总收入', '月均净收入'],
                //x:'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['电子胃镜', '电子肠镜', '大生化分析仪', '核磁共振分析仪', 'CT扫描机', '彩超机', 'B超机']
                }
            ],
            yAxis: [

                {
                    type: 'value',
                    name: '元',

                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '月均总收入',
                    type: 'bar',
                    data: [68726.67, 26929.17, 405708.78, 161076.83, 282525.25, 183333.33, 43934.67],
                },
                {
                    name: '月均净收入',
                    type: 'bar',
                    data: [54258.32, 15052.74, 331631.89, -85312.57, 67534.73, 131739.85, 32560.36],
                },

            ]
        }, {
            title: {
                text: '某院大型医用设备使用收益分析'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['月投资收益率', '年投资收益率'],
                //x:'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['电子胃镜', '电子肠镜', '大生化分析仪', '核磁共振分析仪', 'CT扫描机', '彩超机', 'B超机']
                }
            ],
            yAxis: [

                {
                    type: 'value',
                    name: '%',

                    axisLabel: {
                        formatter: '{value} '
                    }
                },

            ],
            series: [

                {
                    name: '月投资收益率',
                    type: 'line',
                    data: [10.81, 2.96, 22.26, -0.81, 1.23, 5.52, 7.75],
                },
                {
                    name: '年投资收益率',
                    type: 'line',
                    data: [129.7, 35.56, 267.09, -9.75, 14.8, 66.28, 93.03],
                },

            ]
        }, {
            title: {
                text: '医疗设备质量控制检测合格率'
            },
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                data: ['2007年', '2009年'],
                //x:'right'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['心电图机', 'B超', '呼吸机', '麻醉机', '监护仪', '除颤仪']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '%',

                    axisLabel: {
                        formatter: '{value}'
                    }
                },

            ],
            series: [
                {
                    name: '2007年',
                    type: 'bar',
                    data: [100, 93.3, 90.63, 85.71, 95.04, 94.44]
                },
                {
                    name: '2009年',
                    type: 'bar',
                    data: [100, 100, 100, 100, 99.06, 100,]
                }
            ]
        },
    ]
}
const Sc={
    sc1:[
        {
            title: {
                text: '2007-2014年某院1369项课题负责人学历情况',
                //subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['博士', '硕士', '本科', '大专', '中专'],
                x: 'left'
            },
            series: [
                {
                    name: '学历情况',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 474, name: '博士'},
                        {value: 512, name: '硕士'},
                        {value: 294, name: '本科'},
                        {value: 78, name: '大专'},
                        {value: 11, name: '中专'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, {
            title: {
                text: '某院科研人员职称情况',
            },
            tooltip: {
                trigger: 'axis'
            },

            toolbox: {
                show: false,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true},

                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['正高职称', '副高职称', '中级职称', '其他'],

                }
            ],
            yAxis: [
                {
                    type: 'value',

                }
            ],
            series: [
                {
                    name: '人员数',
                    type: 'bar',
                    data: [35, 34, 45, 17],
                },
            ]
        }, {
            title: {
                text: '2008-2012年某院各年度中标各级科研课题数（项）'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['国家级', '省部级', '厅市级'],
                x: 'right'
            },
            toolbox: {
                feature: {
                    //saveAsImage: {}
                }
            },

            xAxis: [
                {
                    type: 'category',

                    data: ['2008年', '2009年', '2010年', '2011年', '2012年'],

                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '国家级',
                    type: 'line',

                    data: [3, 4, 10, 12, 18]
                },
                {
                    name: '省部级',
                    type: 'line',


                    data: [2, 4, 7, 5, 10]
                },
                {
                    name: '厅市级',
                    type: 'line',


                    data: [37, 43, 37, 34, 28]
                }


            ]
        }, {
            title: {
                text: "某院重点学（专）科情况"
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['省级临床\n培育专科', '省级临床\n特色专科', '市级临床\n医学重点学科', '市级临床\n医学重点建设学科'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '',
                    type: 'bar',
                    //barWidth: '60%',
                    data: [5, 2, 23, 5]
                }
            ]
        }, {
            title: {
                text: '2007-2012年某院科研立项数'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '',
                    type: 'bar',

                    data: [71, 21, 12, 21, 30, 41]
                }
            ]
        }, {
            title: {
                text: '2008-2012年各级科研课题获经费资助情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['国家级', '省部级', '厅市级'],
                x: 'right'
            },
            toolbox: {
                feature: {
                    //saveAsImage: {}
                }
            },

            xAxis: [
                {
                    type: 'category',

                    data: ['2008年', '2009年', '2010年', '2011年', '2012年']
                }
            ],
            yAxis: [
                {
                    name: '万元',
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '国家级',
                    type: 'line',

                    data: [49, 113, 421, 490, 799]
                },
                {
                    name: '省部级',
                    type: 'line',

                    data: [21, 15, 46, 20, 146]
                },
                {
                    name: '厅市级',
                    type: 'line',
                    data: [70, 99, 89, 114, 205]
                }


            ]
        },
    ],
    sc2:[
        {
            title: {
                text: "2009-2011年某院刊发论文类别"
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['SCI', '国家级期刊', '省级期刊']
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 19, name: 'SCI'},
                        {value: 619, name: '国家级期刊'},
                        {value: 110, name: '省级期刊'},

                    ]
                }
            ]
        }, {
            title: {
                text: '2009-2011年各主要科室的科研省级获奖情况'
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.7)',
            },
            legend: {
                x: 'right',
                data: ['2009年', '2010年', '2011年'],
                itemStyle: {
                    normal: {
                        //color:['#ff7f50','#87cefa','#da70d6','#32cd32']
                    }
                }
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                y: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            grid: {
                y: 80,
                y2: 40,
                x2: 40
            },
            xAxis: [
                {
                    type: 'category',
                    data: ["骨科", "血液科", "心内科", "神经内科", "肾内科", "风湿科", "妇产科"]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: ''
                }
            ],
            series: [
                {
                    name: '2009年',
                    type: 'bar',
                    data: [1, 4, 1, 1, 2, 1, 2],
                    itemStyle: {
                        normal: {
                            //color: '#ff7f50'
                        }
                    }
                },
                {
                    name: '2010年',
                    type: 'bar',
                    data: [1, 1, 2, 3, 3, 1, 1],
                    itemStyle: {
                        normal: {
                            //color: '#87cefa'
                        }
                    }
                },
                {
                    name: '2011年',
                    type: 'bar',
                    data: [3, 2, 5, 1, 4, 5, 1],
                    itemStyle: {
                        normal: {
                            //color: '#da70d6'
                        }
                    }
                },

            ]
        }, {
            title: {
                text: '2009-2011年各主要科室的科技著作情况'
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.7)',
            },
            legend: {
                x: 'right',
                data: ['2009年', '2010年', '2011年'],
                itemStyle: {
                    normal: {
                        //color:['#ff7f50','#87cefa','#da70d6','#32cd32']
                    }
                }
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                y: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            grid: {
                y: 80,
                y2: 40,
                x2: 40
            },
            xAxis: [
                {
                    type: 'category',
                    data: ["骨科", "血液科", "心内科", "肾内科", "妇产科"]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: ''
                }
            ],
            series: [
                {
                    name: '2009年',
                    type: 'bar',
                    data: [1, 1, 4, 1, 2],
                    itemStyle: {
                        normal: {
                            //color: '#ff7f50'
                        }
                    }
                },
                {
                    name: '2010年',
                    type: 'bar',
                    data: [1, 2, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            //color: '#87cefa'
                        }
                    }
                },
                {
                    name: '2011年',
                    type: 'bar',
                    data: [2, 1, 4, 2, 2],
                    itemStyle: {
                        normal: {
                            //color: '#da70d6'
                        }
                    }
                },

            ]
        }, {
            title: {
                text: '2007-2012年某院获得专利数'
            },
            tooltip: {
                trigger: 'axis'
            },

            toolbox: {
                feature: {
                    //saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    //stack: '总量',
                    //areaStyle: {normal: {}},
                    data: [1, 3, 1, 1, 1, 4]
                },


            ]
        },
    ]
}

export default {
    M,
    F,
    E,
    Sc
}