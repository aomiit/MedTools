//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems:[
      {
        name:'1',
        items: [
          { name: '我不感到悲伤', value: 0.0, checked: false },
          { name: '我感到悲伤', value: 1.0, checked: false },
          { name: '我始终悲伤，不能自制', value: 2.0, checked: false },
          { name: '我太悲伤或不愉快，不堪忍受', value: 3.0, checked: false },
        ]
      },
      {
        name: '2',
        items: [
          { name: '我对将来并不失望', value: 0.0, checked: false },
          { name: '对未来我感到心灰意冷', value: 1.0, checked: false },
          { name: '我感到全景暗淡', value: 2.0, checked: false },
          { name: '我觉得将来毫无希望，无法改善', value: 3.0, checked: false },
        ]
      },
      {
        name: '3',
        items: [
          { name: '我没有感到失败', value: 0.0, checked: false },
          { name: '我觉得比一般人失败要多一些', value: 1.0, checked: false },
          { name: '回首往事，我能看到的是很多次失败', value: 2.0, checked: false },
          { name: '我觉得我是一个完全失败的人', value: 3.0, checked: false },
        ]
      },
      {
        name: '4',
        items: [
          { name: '我和以前一样，从各种事件中得到满足', value: 0.0, checked: false },
          { name: '我不象往常一样从各种事件中得到满足', value: 1.0, checked: false },
          { name: '我不再能从各种事件中得到真正的满足', value: 2.0, checked: false },
          { name: '我对一切事情都不满意或感到枯燥无味', value: 3.0, checked: false },
        ]
      },

      {
        name: '5',
        items: [
          { name: '我不感到罪过', value: 0.0, checked: false },
          { name: '我在相当部分的时间里感到罪过', value: 1.0, checked: false },
          { name: '我在大部分时间里觉得有罪', value: 2.0, checked: false },
          { name: '我在任何时候都觉得有罪', value: 3.0, checked: false },
        ]
      },
      {
        name: '6',
        items: [
          { name: '我没有觉得受到惩罚', value: 0.0, checked: false },
          { name: '我觉得可能受到惩罚', value: 1.0, checked: false },
          { name: '我预料将受到惩罚', value: 2.0, checked: false },
          { name: '我觉得正受到惩罚', value: 3.0, checked: false },
        ]
      },
      {
        name: '7',
        items: [
          { name: '我对自己并不失望', value: 0.0, checked: false },
          { name: '我对自己感到失望', value: 1.0, checked: false },
          { name: '我对自己感到讨厌', value: 2.0, checked: false },
          { name: '我恨我自己', value: 3.0, checked: false },
        ]
      },
      {
        name: '8',
        items: [
          { name: '我觉得我并不比其他人更不好', value: 0.0, checked: false },
          { name: '我对自己的弱点和错误要批判', value: 1.0, checked: false },
          { name: '我在所有的时间里都责备自己的过错', value: 2.0, checked: false },
          { name: '我责备自己所有的事情都弄坏了', value: 3.0, checked: false },
        ]
      },
      {
        name: '9',
        items: [
          { name: '我没有任何想弄死自己的想法', value: 0.0, checked: false },
          { name: '我有自杀的想法，但我不会去做', value: 1.0, checked: false },
          { name: '我想自杀', value: 2.0, checked: false },
          { name: '如果有机会我就自杀', value: 3.0, checked: false },
        ]
      },
      {
        name: '10',
        items: [
          { name: '我哭泣和往常一样', value: 0.0, checked: false },
          { name: '我比往常哭的多', value: 1.0, checked: false },
          { name: '我现在一直要哭', value: 2.0, checked: false },
          { name: '我过去能哭，但现在要哭也哭不出来', value: 3.0, checked: false },
        ]
      },
      {
        name: '11',
        items: [
          { name: '和过去相比，我现在生气并不多', value: 0.0, checked: false },
          { name: '我现在比往常更容易生气发火', value: 1.0, checked: false },
          { name: '我觉得现在所有的时间都容易生气', value: 2.0, checked: false },
          { name: '过去使我生气的事，现在一点也不能使我生气了', value: 3.0, checked: false },
        ]
      },
      {
        name: '12',
        items: [
          { name: '我对其他人没有失去兴趣', value: 0.0, checked: false },
          { name: '和过去相比，我对别人的兴趣减少了', value: 1.0, checked: false },
          { name: '我对别人的兴趣大部分失去了', value: 2.0, checked: false },
          { name: '我对别人的兴趣已全部丧失了', value: 3.0, checked: false },
        ]
      },
      {
        name: '13',
        items: [
          { name: '我作决定和过去一样好', value: 0.0, checked: false },
          { name: '我推迟作出决定比过去多了', value: 1.0, checked: false },
          { name: '我作决定比以前困难大的多', value: 2.0, checked: false },
          { name: '我再也不能作出决定了', value: 3.0, checked: false },
        ]
      },
      {
        name: '14',
        items: [
          { name: '我觉得看上去我的外表并不比过去差', value: 0.0, checked: false },
          { name: '我担心看上去我显得老了，没吸引力了', value: 1.0, checked: false },
          { name: '我觉得我的外貌有些固定的变化，使我难看了', value: 2.0, checked: false },
          { name: '我相信我看起来很丑陋', value: 3.0, checked: false },
        ]
      },
      {
        name: '15',
        items: [
          { name: '我工作和以前一样好', value: 0.0, checked: false },
          { name: '要着手做事，我现在要额外花些力气', value: 1.0, checked: false },
          { name: '无论做什么事我必须努力', value: 2.0, checked: false },
          { name: '我什么工作也不能做了催促自己才行', value: 3.0, checked: false },
        ]
      },
      {
        name: '16',
        items: [
          { name: '我睡觉与往常一样好', value: 0.0, checked: false },
          { name: '我睡觉不如过去好', value: 1.0, checked: false },
          { name: '我比往常早醒1～2小时，难以再入睡', value: 2.0, checked: false },
          { name: '我比往常早醒几个小时，不能再睡', value: 3.0, checked: false },
        ]
      },
      {
        name: '17',
        items: [
          { name: '我并不感到比往常更疲乏', value: 0.0, checked: false },
          { name: '我比过去更容易感到疲乏', value: 1.0, checked: false },
          { name: '几乎不管做什么，我都感到疲乏无力', value: 2.0, checked: false },
          { name: '我太疲乏无力，不能做任何事情', value: 3.0, checked: false },
        ]
      },
      {
        name: '18',
        items: [
          { name: '我的食欲与往常一样', value: 0.0, checked: false },
          { name: '我的食欲不如过去好', value: 1.0, checked: false },
          { name: '我现在的食欲差得多了', value: 2.0, checked: false },
          { name: '我一点也没有食欲了', value: 3.0, checked: false },
        ]
      },
      {
        name: '19',
        items: [
          { name: '最近我的体重并无很大减轻', value: 0.0, checked: false },
          { name: '我的体重下降了5磅（约2.25kg）以上', value: 1.0, checked: false },
          { name: '我的体重下降了10磅以上', value: 2.0, checked: false },
          { name: '我的体重下降15磅以上', value: 3.0, checked: false },
        ]
      },
      {
        name: '20',
        items: [
          { name: '我对最近的健康状况并不比往常更担心', value: 0.0, checked: false },
          { name: '我担心身体上的问题，如疼痛、胃不适或便秘', value: 1.0, checked: false },
          { name: '我非常担心身体问题，想别的事情很难', value: 2.0, checked: false },
          { name: '我对身体问题如此担忧，以致不能想其他任何事情', value: 3.0, checked: false },
        ]
      },
      {
        name: '21',
        items: [
          { name: '我没有发现我对性的兴趣最近有什么变化', value: 0.0, checked: false },
          { name: '我对性的兴趣比过去降低了', value: 1.0, checked: false },
          { name: '现在我对性的兴趣又大下降', value: 2.0, checked: false },
          { name: '我对性的兴趣已经完全丧失', value: 3.0, checked: false },
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
      path: '/pages/beck/index',
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
    score = score.toFixed(0);

    var msg = null;

    if (score < 10) {
      msg = "正常水平,健康无抑郁。"
    }
    if (score >= 10 && score <= 15) {
      msg = "轻度情绪不良。"
    }
    if (score > 15 && score <= 25) {
      msg = "中度抑郁，建议就医诊治。"
    }
    if (score > 25) {
      msg = "重度抑郁，建议立即就医。"
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
      iScore: null,
      iContent: "",
    })
  },
});

