//获取应用实例
var app = getApp();

Page({


  data: {  
    imgsrc: '../../vendor/assets/images/inhospitalgrace.png',
    
    iScore:0,
    iScores: [0,0,0,0,0,0,0,0],

    gitems:[
      {
	  	  name: '年龄(岁)',
        items: [
		      { name: '<30', value: 0.0, checked: false },
          { name: '30~39', value: 8.0, checked: false },
          { name: '40~49', value: 25.0, checked: false },
          { name: '50~59', value: 41.0, checked: false },	
          { name: '60~69', value: 58.0, checked: false },
		      { name: '70~79', value: 75.0, checked: false },
          { name: '80~89', value: 91.0, checked: false },		  
          { name: '≥90', value: 100.0, checked: false },		 		  
        ]
      },

      {
        name: '心率(次/分)',
        items: [
          { name: '<50', value: 0.0, checked: false },
          { name: '50～69', value: 3.0, checked: false },
          { name: '70～89', value: 9.0, checked: false },
          { name: '90～109', value: 15.0, checked: false },
          { name: '110～149', value: 24.0, checked: false },
          { name: '150～199', value: 38.0, checked: false },
          { name: '≥200', value: 46.0, checked: false },        
		    ]
      },
	   
      {
        name: '收缩压(mmHg)',
        items: [
          { name: '<80', value: 58, checked: false },
          { name: '80～99', value: 53, checked: false },          
          { name: '100～119', value: 43, checked: false },
          { name: '120～139', value: 34, checked: false },
          { name: '140～159', value: 24, checked: false },
          { name: '160～199', value: 10, checked: false },
          { name: '≥200', value: 0.0, checked: false },        
		    ]
      },
	
      {
        name: '肌酐清除率(mg/dL)',
        items: [
          { name: '<0.39', value: 1.0, checked: false },
          { name: '0.4～0.79', value: 4.0, checked: false },
          { name: '0.8～1.19', value: 7.0, checked: false },
          { name: '1.2～1.59', value: 10.0, checked: false },
          { name: '1.6～1.99', value: 13.0, checked: false },
		      { name: '2.0～3.99', value: 21.0, checked: false },
          { name: '≥4.0', value: 28.0, checked: false },
        ]
      },
      {
        name: 'Killip分级',
        items: [
          { name: 'Ⅰ级', value:  0.0, checked: false },
          { name: 'Ⅱ级', value: 20.0, checked: false },
		      { name: 'Ⅲ级', value: 39.0, checked: false },
          { name: 'Ⅳ级', value: 59.0, checked: false },
        ]
      },
      {
        name: '入院时心脏骤停',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 39.0, checked: false },
        ]
      },
      {
        name: '心电图ST段改变',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 28.0, checked: false },
        ]
      },
      {
        name: '心肌坏死标志物升高',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 14.0, checked: false },
        ]
      },
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
      path: '/pages/GRACE/index',
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
      var msg = null;

      score = score.toFixed(0);

      if (score <= 108) {
        msg = "危险等级：低危,院内死亡风险：<1%"
      }
      if (score > 108 && score <= 140) {
        msg = "危险等级：中危,院内死亡风险：1%~3%"
      }
      if (score > 140 ){
        msg = "危险等级：高危,院内死亡风险：>3%"
      }
           
      this.setData({
        iScore: score,
        iContent: msg,
      })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScore: 0.0,
      iContent: "",
    })
  },
});

