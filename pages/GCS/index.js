//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0],

    gitems:[
      {
        name: '睁眼',
        items: [
          { name: '自主睁眼，眨眼', value: 4.0, checked: false },
          { name: '声音指令、言语或呼喊后睁眼', value: 3.0, checked: false },
          { name: '肢体或胸骨疼痛刺激后反应性睁眼', value:2.0, checked: false },
          { name: '无', value: 1.0, checked: false }
        ]
      },
      {
        name: '言语',
        items: [
          { name: '定向准确', value: 5.0, checked: false },
          { name: '言语混乱但能回答问题', value: 4.0, checked: false },
          { name: '反应不当，词语可辨', value: 3.0, checked: false },
          { name: '言语不可理解', value: 2.0, checked: false },
          { name: '无', value: 1.0, checked: false },
        ]
      },
      {
        name: '运动',
        items: [
          { name: '能根据要求活动', value: 6.0, checked: false },
          { name: '对痛刺激有目的的反应', value: 5.0, checked: false },
          { name: '对痛刺激逃避', value: 4.0, checked: false },
          { name: '对痛刺激有屈曲反应(去皮质姿势)', value: 3.0, checked: false },
          { name: '对痛刺激有伸性反应(去大脑姿势)', value: 2.0, checked: false },
          { name: '无', value: 1.0, checked: false },
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
      path: '/pages/GCS/index',
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

    if (score < 8) {
      msg = "典型的昏迷"
    }
    else if (score >= 8 && score < 14) {
      msg = "异常，有昏迷症状"
    }
    else if (score == 15) {
      msg = "正常"
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
      iScore: null,
      iContent: "",
    })
  },
});

