//获取应用实例
var app = getApp();

Page({
  data: {      
    iScore:0,
    iScores: [0,0,0,0,0,0,0],

    gitems:[
      {
	  	  name: '年龄(岁)',
        items: [
		      { name: '<=19', value: 0.0, checked: false },
		      { name: '20~29', value: 3.0, checked: false },
          { name: '30~39', value: 6.0, checked: false },
          { name: '40~49', value: 8.0, checked: false },
          { name: '50~59', value: 11.0, checked: false },	
          { name: '60~69', value: 14.0, checked: false },
		      { name: '70~79', value: 17.0, checked: false },
          { name: '80~89', value: 19.0, checked: false },		
          { name: '90~99', value: 22.0, checked: false },		
          { name: '100~109', value: 25.0, checked: false },		  
          { name: '≥110', value: 28.0, checked: false },		 		  
        ]
      },

      {
        name: '心率(次/分)',
        items: [
          { name: '<=79', value: 0.0, checked: false },
          { name: '80～84', value: 1.0, checked: false },
          { name: '85～89', value: 3.0, checked: false },
          { name: '90～94', value: 4.0, checked: false },
          { name: '95～99', value: 5.0, checked: false },
          { name: '100～104', value: 6.0, checked: false },
          { name: '≥105', value: 8.0, checked: false },        
		    ]
      },
	   
      {
        name: '收缩压(mmHg)',
        items: [
          { name: '50～59', value: 28, checked: false },  
          { name: '60～69', value: 26, checked: false },  
          { name: '70～79', value: 24, checked: false },  
          { name: '80～89', value: 23, checked: false },          
          { name: '90～99', value: 21, checked: false },
          { name: '100～109', value: 19, checked: false },
          { name: '110～119', value: 17, checked: false },
          { name: '120～129', value: 15, checked: false },
          { name: '130～139', value: 13, checked: false },  
          { name: '140～149', value: 11, checked: false },  
          { name: '150～159', value: 9, checked: false },          
          { name: '160～169', value: 8, checked: false },
          { name: '170～179', value: 6, checked: false },
          { name: '180～189', value: 4, checked: false },
          { name: '190～199', value: 2, checked: false },
          { name: '≥200', value: 0.0, checked: false },        
		    ]
      },
	
      {
        name: '血清钠水平(mEq/L)',
        items: [
          { name: '<=130', value: 4.0, checked: false },
          { name: '131～133', value: 3.0, checked: false },
          { name: '134～136', value: 2.0, checked: false },
          { name: '137～138', value: 1.0, checked: false },
          { name: '≥137', value: 0.0, checked: false },
        ]
      },
      
      {
        name: 'BUN(mg/dL)',
        items: [
          { name: '<=9', value: 0, checked: false },  
          { name: '10～19', value: 2, checked: false },  
          { name: '20～29', value: 4, checked: false }, 
          { name: '30～39', value: 6, checked: false },          
          { name: '40～49', value: 8, checked: false },
          { name: '50～59', value: 9, checked: false },
          { name: '60～69', value: 11, checked: false },
          { name: '70～79', value: 13, checked: false }, 
          { name: '80～89', value: 15, checked: false },          
          { name: '90～99', value: 17, checked: false },
          { name: '100～109', value: 19, checked: false },
          { name: '110～119', value: 21, checked: false },
          { name: '120～129', value: 23, checked: false },
          { name: '130～139', value: 25, checked: false },  
          { name: '140～149', value: 27, checked: false },  
          { name: '≥150', value: 28, checked: false },        
		    ]
      },
    

      {
        name: '是否是黑人?',
        items: [
          { name: '否', value: 3.0, checked: false },
          { name: '是', value: 0.0, checked: false },
        ]
      },
      {
        name: '是否有COPD?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
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
      path: '/pages/GWTG/index',
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

      score = score.toFixed(0);

      if (score <= 0x21) {
          msg = "院内死亡率：<1%";
      }
      if (score >= 0x22 && score <= 0x32) {
          msg = "院内死亡率：1-5%左右";
      }
      if (score >= 0x33 && score <= 0x39) {
          msg = "院内死亡率：>5-10%";
      }
      if (score >= 0x3a && score <= 0x3d) {
          msg = "院内死亡率：>10-15%";
      }
      if (score >= 0x3e && score <= 0x41) {
          msg = "院内死亡率：>15-20%";
      }
      if (score >= 0x42 && score <= 0x46) {
          msg = "院内死亡率：>20-30%";
      }
      if (score >= 0x47 && score <= 0x4a) {
          msg = "院内死亡率：>30-40%";
      }
      if (score >= 0x4b && score <= 0x4e) {
          msg = "院内死亡率：>40-50%";
      }
      if (score >= 0x4f) {
          msg = "院内死亡率：>50%";
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

