//获取应用实例
var app = getApp();

Page({
  data: {
	iPhysScore: null,
	iPsychScore:null,
	iEnvirScore:null,
	iSocilScore:null,  
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems: [
      {
        name: '1.(G1)您怎样评价您的生存质量？',
        items: [
          { name: '很差', value: 1.0, checked: false },
          { name: '差', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '好', value: 4.0, checked: false },
		  { name: '很好', value: 5.0, checked: false },
        ]
      },
      {
        name: '2.(G4)您对自己的健康状况满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
      {
        name: '3.(F1.4)您觉得疼痛妨碍您去做自己需要做的事情吗？',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '很大', value: 4.0, checked: false },
		  { name: '极其', value: 5.0, checked: false },
        ]
      },
      {
        name: '4.(F11.3)您需要依靠医疗的帮助进行日常生活吗？',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '很大', value: 4.0, checked: false },
		  { name: '极其', value: 5.0, checked: false },
        ]
      },
      {
        name: '5.(F4.1)您觉得生活有乐趣吗？',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '很大', value: 4.0, checked: false },
		  { name: '极其', value: 5.0, checked: false },
        ]
      },
           {
        name: '6.(F24.2)您觉得自己的生活有意义吗？',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '很大', value: 4.0, checked: false },
		  { name: '极其', value: 5.0, checked: false },
        ]
      },
      {
        name: '7.(F5.3)您能集中注意力吗？',
        items: [
          { name: '根本不', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '很大', value: 4.0, checked: false },
		  { name: '极其', value: 5.0, checked: false },
        ]
      },
      {
        name: '8.(F16.1)日常生活中您感觉安全吗？',
        items: [
          { name: '根本不', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '很大', value: 4.0, checked: false },
		  { name: '极其', value: 5.0, checked: false },
        ]
      },
      {
        name: '9.(F22.1)您的生活环境对健康好吗？',
        items: [
          { name: '根本不', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '很大', value: 4.0, checked: false },
		  { name: '极其', value: 5.0, checked: false },
        ]
      },
	       {
        name: '10.(F2.1)您有充沛的精力去应付日常生活吗？',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '多数能', value: 4.0, checked: false },
		  { name: '完全能', value: 5.0, checked: false },
        ]
      },
      {
        name: '11.(F7.1)您认为自己的外形过得去吗？',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '多数有', value: 4.0, checked: false },
		  { name: '完全有', value: 5.0, checked: false },
        ]
      },
      {
        name: '12.(F18.1)您的钱够用吗',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '多数能', value: 4.0, checked: false },
		  { name: '完全能', value: 5.0, checked: false },
        ]
      },
      {
        name: '13.(F20.1)在日常生活中您需要的信息都齐备吗?',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '多数有', value: 4.0, checked: false },
		  { name: '完全有', value: 5.0, checked: false },
        ]
      },
	  {
        name: '14.(F21.1)您有机会进行休闲活动吗？',
        items: [
          { name: '根本没有', value: 1.0, checked: false },
          { name: '有点', value: 2.0, checked: false },
          { name: '中等', value: 3.0, checked: false },
          { name: '多数有', value: 4.0, checked: false },
		  { name: '完全有', value: 5.0, checked: false },
        ]
      },
      {
        name: '15.(F9.1)您行动的能力如何？',
        items: [
          { name: '很差', value: 1.0, checked: false },
          { name: '差', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '好', value: 4.0, checked: false },
		  { name: '很好', value: 5.0, checked: false },
        ]
      },
      {
        name: '16.(F3.3)您对自己的睡眠情况满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
      {
        name: '17.(F10.3)您对自己做日常生活事情的能力满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },	      
	  {
        name: '18.(F12.4)您对自己的工作能力满意吗?',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
      {
        name: '19.(F6.3)您对自己满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
	  {
        name: '20.(F13.3)您对自己的人际关系满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
      {
        name: '21.(F15.3)您对自己的性生活满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
	        {
        name: '22.(F14.4)您对自己从朋友那里得到的支持满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
      {
        name: '23.(F17.3)您对自己居住地的条件满意吗?',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
	  {
        name: '24.(F19.3)您对得到卫生保健服务的方便程度满意吗?',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
	  {
        name: '25.(F23.3)您对自己的交通情况满意吗？',
        items: [
          { name: '非常不满意', value: 1.0, checked: false },
          { name: '不满意', value: 2.0, checked: false },
          { name: '一般', value: 3.0, checked: false },
          { name: '满意', value: 4.0, checked: false },
		  { name: '很满意', value: 5.0, checked: false },
        ]
      },
      {
        name: '26.(F8.1)您有消极感受吗? (如情绪低落、绝望、焦虑、忧郁)',
        items: [
          { name: '从不', value: 1.0, checked: false },
          { name: '很少', value: 2.0, checked: false },
          { name: '有时', value: 3.0, checked: false },
          { name: '经常', value: 4.0, checked: false },
		  { name: '总是', value: 5.0, checked: false },
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
      path: '/pages/WHOQOLBREF/index',
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
    var iScores = this.data.iScores;

	let physscore = 4*((6-iScores[2])+(6-iScores[3])+iScores[9]+iScores[14]+iScores[15]+iScores[16]+iScores[17])/7;
	let psychscore = 4*(iScores[4]+iScores[5]+iScores[6]+iScores[10]+iScores[18]+(6-iScores[25]))/6;
	let socilscore = 4*(iScores[19]+iScores[20]+iScores[21])/3;
	let envirscore = 4*(iScores[7]+iScores[8]+iScores[11]+iScores[12]+iScores[13]+iScores[22]+iScores[23]+iScores[24])/8;
	
    console.log(physscore)
    var iphysscore = physscore.toFixed(0);
	var ipsychscore = psychscore.toFixed(0);
	var isocilscore = socilscore.toFixed(0);
	var ienvirscore = envirscore.toFixed(0);

    this.setData({
      iPhysScore: iphysscore,
	  iPsychScore:ipsychscore,
	  iEnvirScore:ienvirscore,
	  iSocilScore:isocilscore     
    })
  },

  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iPhysScore: null,
	  iPsychScore:null,
	  iEnvirScore:null,
	  iSocilScore:null,    
    })
  },
});