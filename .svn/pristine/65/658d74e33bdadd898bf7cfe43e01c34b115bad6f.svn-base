//获取应用实例
var app = getApp();

Page({
  data: {
    iScore: 0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems: [
      {
        name: '过去的一段压力性事件的经历引起的反复发生令人不安的记忆、想法或形象?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '过去的一段压力性事件的经历引起的反复发生令人不安的梦境?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '过去的一段压力性事件的经历仿佛突然间又发生了、又感觉到了(好像您再次体验)?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '当有些事情让您想起过去的一段压力性事件的经历时，你会非常局促不安？',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '当有些事情让您想起过去的一段压力性事件的经历时，有身体反应(比如心悸、呼吸困难、出汗)? ',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
           {
        name: '避免想起或谈论过去的那段压力性事件经历或避免产生与之相关的感觉?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '避免那些能使您想起那段压力性事件经历的活动和局面?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '记不起压力性经历的重要内容?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '对您过去喜欢的活动失去兴趣?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
	       {
        name: '感觉与其他人疏远或脱离? ',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '感觉到感情麻木或不能对与您亲近的人有爱的感觉?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '感觉好像您的将来由于某种原因将被突然中断?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '入睡困难或易醒?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
	       {
        name: '易怒或怒气爆发?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '注意力很难集中?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '处于过度机警或警戒状态?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
        ]
      },
      {
        name: '感觉神经质或易受惊?',
        items: [
          { name: '一点也不', value: 1.0, checked: false },
          { name: '有一点', value: 2.0, checked: false },
          { name: '中度的', value: 3.0, checked: false },
          { name: '相当程度的', value: 4.0, checked: false },
		  { name: '极度的', value: 5.0, checked: false },
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
      path: '/pages/PCLC/index',
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

    //console.log('发生change事件，携带value值为：', e.detail.value)

    var dataStrArr = e.detail.value.split(":");//分割成字符串数组

    var dataIntArr = [];//保存转换后的整型字符串

    dataIntArr = dataStrArr.map(function (data) {
      return +data;
    });

    //console.log('为：', dataIntArr)

    var that = this
    var iScores = that.data.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    //console.log('为：', this.data.iScores)

    this.sumall();
  },

  sumall: function () {

    let score = 0;
    var iScores = this.data.iScores;

    for (var i = 0, len = iScores.length; i < len; i++) {
      score += iScores[i];
    }

    console.log(score)
    var sscore = score.toFixed(0);

    var msg = null;

    if (sscore <= 37) {
      msg = "无明显PTSD症状。"
    }
    else if (sscore <= 49) {
      msg = "有一定程度的PTSD症状。"
    }
    else
	{
      msg = "有较明显PTSD症状，可能被诊断为PTSD。"
    }

    this.setData({
      iScore: sscore,
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