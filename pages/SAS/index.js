//获取应用实例
var app = getApp();

Page({
  data: {
    iScore: 0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems: [
      {
        name: '我觉得比平时容易紧张和着急(焦虑)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我无缘无故地感到害怕(害怕)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我容易心里烦乱或觉得惊恐(惊恐)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我觉得我可能将要发疯(发疯感)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我觉得一切都很好，也不会发生什么不幸',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我手脚发抖打颤(手足颤抖)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我因为头痛、颈痛和背痛而苦恼(躯体疼痛)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我感觉容易衰弱和疲乏(乏力)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我觉得心平气和，并且容易安静坐着',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我觉得心跳得快(心悸)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我因为一阵阵头晕而苦恼(头昏)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我有过晕倒发作，或觉得要晕倒似的(晕厥感)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我呼气吸气都感到很容易',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我手脚麻木和刺痛(手足刺痛)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我因胃痛和消化不良而苦恼(胃痛或消化不良)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我常常要小便(尿意频数)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我的手常常是干燥温暖的',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我脸红发热(面部潮红)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我容易入睡并且一夜睡得很好',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我做恶梦(恶梦)',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
    ],

    iContent: "",

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
      path: '/pages/SAS/index',
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
    var sscore = score * 1.25;
    sscore = sscore.toFixed(0);

    var showScore = "粗分:" + score.toFixed(0) + ",标准分:" + sscore;

    var msg = null;

    if (sscore < 50) {
      msg = "正常水平。"
    }
    if (sscore >= 50 && sscore < 60) {
      msg = "轻度焦虑，建议咨询专科医生。"
    }
    if (sscore >= 60 && sscore < 70) {
      msg = "中度焦虑，建议就医诊治。"
    }
    if (sscore >= 70) {
      msg = "重度焦虑，建议立即就医。"
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