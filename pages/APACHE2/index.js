//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems:[
      {
        name: '直肠温度',
        items: [
          { name: '≥41℃', value: 4.0, checked: false },
          { name: '39~40.9℃', value: 3.0, checked: false },
          { name: '38.5~38.9℃', value: 1.0, checked: false },
          { name: '36~38.4℃', value: 0.0, checked: false },
          { name: '34~35.9℃', value: 1.0, checked: false },
          { name: '32~33.9℃', value: 2.0, checked: false },
          { name: '30~31.9℃', value: 3.0, checked: false },
          { name: '≤29.9℃', value: 4.0, checked: false },
        ]
      },
      {
        name: '平均动脉压',
        items: [
          { name: '≥160mmHg', value: 4.0, checked: false },
          { name: '130~159mmHg', value: 3.0, checked: false },
          { name: '110~129mmHg', value: 2.0, checked: false },
          { name: '70~109mmHg', value: 0.0, checked: false },
          { name: '50~69mmHg', value: 2.0, checked: false },
          { name: '≤49mmHg', value: 4.0, checked: false },
        ]
      },
      {
        name: '心率',
        items: [
          { name: '≥180次/分', value: 4.0, checked: false },
          { name: '140~179次/分', value: 3.0, checked: false },
          { name: '110~139次/分', value: 2.0, checked: false },
          { name: '70~109次/分', value: 0.0, checked: false },
          { name: '55~69次/分', value: 2.0, checked: false },
          { name: '40~54次/分', value: 3.0, checked: false },
          { name: '≤39次/分', value: 4.0, checked: false },
        ]
      },
      {
        name: '呼吸频率',
        items: [
          { name: '≥50次/分', value: 4.0, checked: false },
          { name: '35~49次/分', value: 3.0, checked: false },
          { name: '25~34次/分', value: 1.0, checked: false },
          { name: '12~24次/分', value: 0.0, checked: false },
          { name: '10~11次/分', value: 1.0, checked: false },
          { name: '6~9次/分', value: 2.0, checked: false },
          { name: '≤5次/分', value: 4.0, checked: false },
        ]
      },
      {
        name: 'A-aPO2(FiO2≥0.5) 或 PaO2(FiO2<0.5)',
        items: [
          { name: '≥500', value: 4.0, checked: false },
          { name: '350~499', value: 3.0, checked: false },
          { name: '200~349', value: 2.0, checked: false },
          { name: '<200或PaO2>70', value: 0.0, checked: false },
          { name: 'PaO2 61~70', value: 1.0, checked: false },
          { name: 'PaO2 55~60', value: 3.0, checked: false },
          { name: 'PaO2 <55', value: 4.0, checked: false },
        ]
      },
      {
        name: '动脉血pH值或血清HCO3(静脉血mmol/L)',
        items: [
          { name: '≥7.7;≥52', value: 4.0, checked: false },
          { name: '7.6~7.69;41~51.9', value: 3.0, checked: false },
          { name: '7.5~7.59;32~40.9', value: 1.0, checked: false },
          { name: '7.33~7.49;22~31.9', value: 0.0, checked: false },
          { name: '7.25~7.32;18~21.9', value: 2.0, checked: false },
          { name: '7.15~7.24;15~17.9', value: 3.0, checked: false },
          { name: '<7.15;<15', value: 4.0, checked: false },
        ]
      },
      {
        name: '血清钠(mmol/L)',
        items: [
          {name: '≥180', value: 4.0, checked: false },
          { name: '160~179', value: 3.0, checked: false },
          { name: '155~159', value: 2.0, checked: false },
          { name: '150~154', value: 1.0, checked: false },
          { name: '130~149', value: 0.0, checked: false },
          { name: '120~129', value: 2.0, checked: false },
          { name: '111~119', value: 3.0, checked: false },
          { name: '≤110', value: 4.0, checked: false },
        ]
      },
      {
        name: '血清钾(mmol/L)',
        items: [
          { name: '≥7', value: 4.0, checked: false },
          { name: '6~6.9', value: 3.0, checked: false },
          { name: '5.5~5.9', value: 1.0, checked: false },
          { name: '3.5~5.4', value: 0.0, checked: false },
          { name: '3~3.4', value: 1.0, checked: false },
          { name: '2.5~2.9', value: 2.0, checked: false },       
          { name: '<2.5', value: 4.0, checked: false },
        ]
      },
      {
        name: '血清肌酐(mg/dL)(ARF是指急性肾衰竭)',
        items: [
          { name: '≥3.5', value: 4.0, checked: false },
          { name: 'ARF时≥3.5', value: 8.0, checked: false },
          { name: '2~3.4', value: 3.0, checked: false },
          { name: 'ARF时2~3.4', value: 6.0, checked: false },
          { name: '1.5~1.9', value: 2.0, checked: false },
          { name: 'ARF时1.5~1.9', value: 4.0, checked: false },
          { name: '0.6~1.4', value: 0.0, checked: false },
          { name: '<0.6', value: 2.0, checked: false }, 
        ]
      },
      {
        name: '血细胞比容(%)',
        items: [
          { name: '≥60', value: 4.0, checked: false },
          { name: '50~59.9', value: 2.0, checked: false },
          { name: '46~49.9', value: 1.0, checked: false },
          { name: '30~45.9', value: 0.0, checked: false },
          { name: '20~29.9', value: 2.0, checked: false },
          { name: '<20', value: 4.0, checked: false }, 
        ]
      },
      {
        name: '白细胞计数(1000s内)',
        items: [
          { name: '≥40', value: 4.0, checked: false },
          { name: '20~39.9', value: 2.0, checked: false },
          { name: '15~19.9', value: 1.0, checked: false },
          { name: '3~14.9', value: 0.0, checked: false },
          { name: '1~2.9', value: 2.0, checked: false },
          { name: '<1', value: 4.0, checked: false }, 
        ]
      },     
      {
        name: 'Glasgow昏迷评分',
        items: [
          { name: '15', value: 0.0, checked: false }, 
          { name: '14', value: 1.0, checked: false }, 
          { name: '13', value: 2.0, checked: false }, 
          { name: '12', value: 3.0, checked: false }, 
          { name: '11', value: 4.0, checked: false }, 
          { name: '10', value: 5.0, checked: false },
          { name: '9', value: 6.0, checked: false },
          { name: '8', value: 7.0, checked: false },
          { name: '7', value: 8.0, checked: false },
          { name: '6', value: 9.0, checked: false }, 
          { name: '5', value: 10.0, checked: false },
          { name: '4', value: 11.0, checked: false },
          { name: '≤3', value: 12.0, checked: false },
        
        ]
      },
      {
        name: '年龄(岁)',
        items: [
          { name: '≤44', value: 0.0, checked: false },
          { name: '45~54', value: 2.0, checked: false },
          { name: '55~64', value: 3.0, checked: false },
          { name: '65~74', value: 5.0, checked: false },
          { name: '≥75', value: 6.0, checked: false }, 
        ]
      },
      {
        name: '慢性健康问题：1)活组织检查确定的肝硬化 2)纽约心脏协会第IV类 3)严重 COPD(慢性阻塞性肺病) - 血碳酸过多症、在家氧疗或肺高压 4)接受定期透析治疗或 5)免疫受损',
        items: [
          { name: '无 ', value: 0.0, checked: false },
          { name: '非手术 ', value: 5.0, checked: false },
          { name: '急诊手术', value: 5.0, checked: false },
          { name: '选择性手术', value: 2.0, checked: false },
        ]
      }
     
    ],

    iContent:"",

    scrollTop: 0, 
  },
  onShareAppMessage: (res) => {
    if (res.from === 'button') {
      console.log("来自转发按钮");
      console.log(res.target);
    }
    else {
      console.log("来自转发菜单")
    }
    return {
      title: '好用的小程序分享给您!',
      path: '/pages/APACHE2/index',
      imageUrl: "",
      success: function (res) {
        // 分享成功
        wx.showToast({
          title: '感谢分享',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function (res) {
        // 分享失败
        wx.showToast({
          title: '分享失败',
          icon: 'failed',
          duration: 2000
        });
      }
    }
  },

  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  radioChange: function (e) {

    console.log('发生change事件，携带value值为：', e.detail.value)

    var dataStrArr = e.detail.value.split(":");//分割成字符串数组

    var dataIntArr = [];//保存转换后的整型字符串

    dataIntArr = dataStrArr.map(function (data) {
      return +data;});

    console.log('为：', dataIntArr)

    var that = this
    var iScores = that.data.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.iScores)

    this.sumall();
  },
  
  sumall: function () {
   
    let score =0;
    var iScores = this.data.iScores;

    for (var i = 0, len = iScores.length; i < len; i++) {
      score += iScores[i];
    }
    
    console.log(score) 

    var showScore = score.toFixed(0) ;

    var msg = null;

    if (score <= 4) {
      msg = "4% 非手术，1% 手术后"
    }
    else if (score >= 5 && score < 10) {
      msg = "8% 非手术，3% 手术后"
    }
    else if (score >= 10 && score < 15) {
      msg = "15% 非手术，7% 手术后"
    }
    else if (score >= 15 && score < 20) {
      msg = "24% 非手术，12% 手术后"
    }
    else if (score >= 20 && score < 25) {
      msg = "40% 非手术，30% 手术后"
    }
    else if (score >= 25 && score < 30) {
      msg = "55% 非手术，35% 手术后"
    }
    else if (score >= 30 && score < 35) {
      msg = "二者均为约 73%"
    }
    else if (score > 35) {
      msg = "85% 非手术，88% 手术后"
    }
   
    this.setData({
      iScore: showScore,
      iContent: "死亡率估算:"+msg,
    })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScore: null,
      iContent: "",
    })
  },
});

