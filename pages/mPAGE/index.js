//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0],

    gitems:[
      {
        name: '年龄(周岁)',
        items: [
          { name: '<30', value: 0.0, checked: false },
          { name: '30~39', value: 3.0, checked: false },
          { name: '40~49', value: 5.0, checked: false },
          { name: '50~59', value: 7.0, checked: false },
          { name: '60~69', value: 9.0, checked: false },
          { name: '≥70', value: 11.0, checked: false },
        ]
      },
      {
        name: '性别',
        items: [
          { name: '女性', value: 0.0, checked: false },
          { name: '男性', value: 2.0, checked: false },
        ]
      },
      {
        name: '血小板(x10^9/L)',
        items: [
          { name: '≥250', value: 0.0, checked: false },
          { name: '200~250', value: 2.0, checked: false },
          { name: '150~200', value: 3.0, checked: false },
          { name: '100~150', value: 4.0, checked: false },
          { name: '<100', value: 5.0, checked: false },
        ]
      },
      {
        name: '白蛋白水平(g/dL)',
        items: [
          { name: '≥4.0', value: 0.0, checked: false },
          { name: '3.5~4.0', value: 1.0, checked: false },
          { name: '3.0~3.5', value: 2.0, checked: false },
          { name: '<3.0', value: 3.0, checked: false },
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
      path: '/pages/mPAGE/index',
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
      var msg = '';  
	  if (score <= 8) {
        msg = "低风险，未来7年肝癌发生率接近0%"
	  }
      if (score >= 9 && score <= 12) {
        msg = "中度风险，肝癌风险在未来3，5，7年分别为4.1%，6.1%，10.8%左右"
      }
      if (score >= 13) {
        msg = "高度风险，肝癌风险在未来3，5，7年分别为10.8%，18.7%，26.7%左右"
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

