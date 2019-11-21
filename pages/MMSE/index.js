//获取应用实例
var app = getApp();



Page({
  data: {  
    imgsrc: '../../vendor/assets/images/MMSE.png',

    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

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
      path: '/pages/MMSE/index',
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

  T1radioChange: function (e) {
    console.log('发生change事件，携带value值为：', e.detail.value)

    var dataStrArr = e.detail.value.split(":");//分割成字符串数组

    var dataIntArr = [];//保存转换后的整型字符串

    dataIntArr = dataStrArr.map(function (data) {
      return +data;
    });

    console.log('为：', dataIntArr)

    var that = this
    var iScores = that.data.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：', this.data.iScores)

    this.sumall();
  },

  sumall: function () {
    let score = 0;
    var iScores = this.data.iScores;

    for (var i = 0, len = iScores.length; i < len; i++) {
      score += iScores[i];
    }

    console.log(score)

    var showScore = score;

    var msg = null;

    if (score >= 27) {
      msg = "正常"
    }
    else if (score >= 21) {
      msg = "轻度认知功能障碍"
    }
    else if (score >= 10) {
      msg = "中度认知功能障碍"
    }
    else if (score < 10) {
      msg = "重度认知功能障碍"
    }

    this.setData({
      iScore: showScore,
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

