//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0,0,0,0,0],

    gitems:[
      {
        name: '低血压?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 5.0, checked: false },
        ]
      },
      {
        name: '主动脉内气囊反搏?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 5.0, checked: false },
        ]
      },
      {
        name: '主动脉内气囊反搏?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 5.0, checked: false },
        ]
      },
      {
        name: '年龄≥75岁?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 4.0, checked: false },
        ]
      },
      {
        name: '贫血?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 3.0, checked: false },
        ]
      },
	  {
        name: '糖尿病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 3.0, checked: false },
        ]
      },	 
	  {
        name: '对比剂剂量(ml)?',
        items: [
          { name: '0~100', value: 1.0, checked: false },
          { name: '101~200', value: 2.0, checked: false },
		  { name: '201~300', value: 3.0, checked: false },
		  { name: '301~400', value: 4.0, checked: false },
		  { name: '401~500', value: 5.0, checked: false },
		  { name: '501~600', value: 6.0, checked: false },
		  { name: '601~700', value: 7.0, checked: false },
		  { name: '701~800', value: 8.0, checked: false },
		  { name: '801~900', value: 9.0, checked: false },
		  { name: '901~1000', value: 10.0, checked: false },
		  { name: '1001~1100', value: 11.0, checked: false },
		  { name: '1101~1200', value: 12.0, checked: false },
        ]
      },
	  {
        name: '血清肌酐>1.5mg/dl?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 4.0, checked: false },
        ]
      },	  
	  {
	  	name: '肾小球滤过率估测值eGFR(ml/min/1.73㎡)',
        items: [
          { name: '>60', value: 0.0, checked: false },
          { name: '40~60', value: 2.0, checked: false },	
		  { name: '20~40', value: 4.0, checked: false },		  
		  { name: '<20', value: 6.0, checked: false },	  
        ]
      },    
    ],

    iContent:"",
	iContent2:"",

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
      path: '/pages/CIN/index',
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
      withShareTicket: true,
      menus:['shareAppMessage','shareTimeline']
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
	  var msg1 = null;

      score = score.toFixed(0);

		if (score <= 5) {
			msg = "Cin风险:7.5%."
			msg1 = "透析风险:0.04%."
		}
		else if (score <= 10) {
			msg = "Cin风险:14%."
			msg1 = "透析风险:0.12%."
		}
		else if (score < 16) {
			msg = "Cin风险:26.1%."
			msg1 = "透析风险:1.09%."
		}
		else if (score >= 16) {
			msg = "Cin风险:57.3%."
			msg1 = "透析风险:12.6%."
		}
		
           
      this.setData({
        iScore: score,
        iContent: msg,
		iContent2: msg1,
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

