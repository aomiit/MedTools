//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0],

    gitems:[     
      {
        name: '左心房内径(mm)',
        items: [
          { name: '<35', value: 0.0, checked: false },
          { name: '35~44', value: 1.0, checked: false },
		  { name: '≥45', value: 2.0, checked: false },
		]
      },
      {
        name: '年龄(岁)',
        items: [
          { name: '<60', value: 0.0, checked: false },
		  { name: '60~79', value: 1.0, checked: false },
          { name: '≥80', value: 2.0, checked: false },
        ]
      },
      {
        name: '诊断',
        items: [
          { name: 'TIA', value: 0.0, checked: false },
          { name: '卒中', value: 1.0, checked: false },
        ]
      },
      {
        name: '既往几年吸烟',
        items: [
          { name: '否', value: 1.0, checked: false },
          { name: '是', value: 0.0, checked: false },
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
      path: '/pages/STAF/index',
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

      if (score >= 4 ) {
        msg = "总分6,评分≥4分,房颤检出的敏感性为85.5%,特异性为53.1%。"
      }
      if (score < 4) {
        msg = "总分6,评分<4分,房颤可能性小。"
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

