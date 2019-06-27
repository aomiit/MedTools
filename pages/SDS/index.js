//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems:[
      {
        name: '我觉得闷闷不乐，情绪低沉',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我觉得一天之中早晨最好',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我一阵阵地哭出来或是想哭',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我晚上睡眠不好',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我吃的和平时一样多',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我与异性接触时和以往一样感到愉快',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我发觉我的体重在下降',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我有便秘的苦恼',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我心跳比平时快',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我无缘无故感到疲乏',
        items: [
          { name: '没有或很少时间', value: 1.0, checked: false },
          { name: '小部分时间', value: 2.0, checked: false },
          { name: '相当多时间', value: 3.0, checked: false },
          { name: '绝大部分或全部时间', value: 4.0, checked: false },
        ]
      },
      {
        name: '我的头脑和平时一样清楚',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },     
      {
        name: '我觉得经常做的事情并没有困难',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我觉得不安而平静不下来',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我对将来抱有希望',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我比平常容易激动',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我觉得做出决定是容易的',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我觉得自己是个有用的人，有人需要我',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我的生活过得很有意思',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '我认为如果我死了别人会生活的更好些',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
        ]
      },
      {
        name: '平常感兴趣的事我仍然照样感兴趣',
        items: [
          { name: '没有或很少时间', value: 4.0, checked: false },
          { name: '小部分时间', value: 3.0, checked: false },
          { name: '相当多时间', value: 2.0, checked: false },
          { name: '绝大部分或全部时间', value: 1.0, checked: false },
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
      path: '/pages/SDS/index',
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
    var sscore = score*1.25;
    sscore = sscore.toFixed(0);

    var showScore = "粗分:" + score.toFixed(0) + ",标准分:" + sscore;

    var msg = null;

    if (sscore < 53) {
      msg = "心理状况正常。"
    }
    if (sscore >= 53 && sscore <= 62) {
      msg = "轻度抑郁，建议咨询专科医生。"
    }
    if (sscore > 62 && sscore <= 72) {
      msg = "中度抑郁，建议就医诊治。"
    }
    if (sscore > 72) {
      msg = "重度抑郁，建议立即就医。"
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

