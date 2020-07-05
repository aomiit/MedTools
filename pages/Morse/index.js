//获取应用实例
var app = getApp();

Page({
  data: {     
	balance:{		
		title :'Morse跌倒风险评估量表',
		iScores: [0,0,0,0,0,0],

		gitems:[
		  {
			name: '1.跌倒史',
			items: [
			  { name: '近三个月内无跌倒史', value: 0.0, checked: false },
			  { name: '近三个月内有跌倒史', value: 25.0, checked: false },
			]
		  },
		  {
			name: '2.超过1个医学诊断',
			items: [
			  { name: '没有', value: 0.0, checked: false },
			  { name: '有', value: 15.0, checked: false },
			]
		  },
		  {
			name: '3.行走辅助',
			items: [
			  { name: '不需要/完全卧床/有专人扶持', value: 0.0, checked: false },
			  { name: '拐杖/手杖/助行器', value: 15.0, checked: false },
			  { name: '依扶家居行走', value: 30.0, checked: false },
			]
		  },
		  {
			name: '4.静脉输液/置管/使用特殊药物',
			items: [
			  { name: '没有', value: 0.0, checked: false },
			  { name: '有', value: 20.0, checked: false },			
			]
		  },
		  {
			name: '5.步态',
			items: [
			  { name: '正常/卧床休息/轮椅代步', value: 0.0, checked: false },
			  { name: '虚弱乏力', value: 10.0, checked: false },
			  { name: '平衡失调/不平衡', value: 20.0, checked: false },
			]
		  },
		  {
			name: '6.认知状态',
			items: [
			  { name: '了解自己能力，量力而行', value: 0.0, checked: false },
			  { name: '高估自己能力/忘记自己受限制/意识障碍/躁动不安/沟通障碍/睡眠障碍', value: 15.0, checked: false },
			]
		  }		
		]
	},
	

	  iScoreBalance:0,
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
      path: '/pages/Morse/index',
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
    var iScores = that.data.balance.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.balance.iScores)

    this.sumall();
  },  
  
  sumall: function () {
   
      let uscore =0;
      var iScores = this.data.balance.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        uscore += iScores[i];
      }	  
     
      console.log(uscore) 

      var msg = null;
	  
	  var totalscore = uscore.toFixed(0);

	  if (totalscore <= 25) {
		msg = "跌倒低危人群"
	  }
	  else if(totalscore <=45)
	  {
		msg = "跌倒中危人群" 
	  }
	  else
	  {
		msg = "跌倒高危人群"	
	  }	  

      this.setData({
        iScoreBalance: uscore,
		iContent: msg,
      })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScoreBalance: 0.0,
	  iContent: ""
    })
  },
});

