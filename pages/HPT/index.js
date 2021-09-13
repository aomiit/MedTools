//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems:[
      {
        name: '觉得手头工作太多,无法应付',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '觉得时间不够用,所以要分秒必争。例如,过马路时闯红灯,走路和说话的节奏都很快',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '觉得没有时间休闲,总日记挂着工作',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '遇到挫败时很容易发脾气',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '担心别人对自己工作表现的评价',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '觉得上司、家人都不欣赏自己',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '担心自己的经济状况',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '有头痛、胃痛的毛病,难以治愈',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '需要借烟酒、药物、零食等抑制不安的情绪',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '需要借助安眠药帮助自己入睡',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '与家人、朋友、同事的相处经常发生不快，令你发脾气',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },     
      {
        name: '与人倾谈时,常打断对方的话题',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '上床后思潮起伏,牵挂很多事情,难以入睡',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '觉得工作太多,不能每件事都做到尽善尽美',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '当空闲时轻松一下也会感到内疚',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '做事急躁、任性,而事后却感到内疚',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
        ]
      },
      {
        name: '经常有自己不应该享乐的想法',
        items: [
          { name: '从未发生', value: 0.0, checked: false },
          { name: '偶尔发生', value: 1.0, checked: false },
          { name: '经常发生', value: 2.0, checked: false },
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
      path: '/pages/HPT/index',
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

    var showScore = "得分:" + score.toFixed(0);

    var msg = null;

    if (score <= 10) {
      msg = "精神压力程度低,但肯尼显示生活缺乏刺激比较简单沉闷,个人做事动力不高。"
    }
    if (score > 10 && score < 15) {
      msg = "精神压力程度中等,虽然某些时候感到压力较大,但是仍然可以应付。"
    }
    if (score >= 15) {
      msg = "精神压力程度偏高,应反省一下压力来源和寻找解决办法。"
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

