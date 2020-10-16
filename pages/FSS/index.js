//获取应用实例
var app = getApp();

Page({
  data: {     
	balance:{		
		title :'FSS疲劳严重程度量表',
		iScores: [0,0,0,0,0,0,0,0,0],

		gitems:[
		  {
			name: '1.当我疲惫的时候,我的积极性是较低的',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },
		  {
		    name: '2.运动使我疲劳',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },
		  {
		    name: '3.我很容易疲劳',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },
		  {
		    name: '4.疲劳影响我的体能',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },
		  {
		    name: '5.疲劳经常给我带来频繁的不适',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },
		  {
		    name: '6.疲劳使我无法维持体能',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },
		  {
		    name: '7.疲劳影响我从事某些工作',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },	
		  {
		    name: '8.疲劳是我的三个最严重的症状之一',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },
		  {
		    name: '9.疲劳影响了我的工作、家庭或社交生活',
			items: [
			  { name: '1-非常不同意', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7-非常同意', value: 7.0, checked: false },
			]
		  },		   
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
      path: '/pages/FSS/index',
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
     
	  uscore = uscore/9;
      console.log(uscore) 

      var msg = null;
	  
	  var totalscore = uscore.toFixed(0);

	  if (totalscore <= 4) {
		msg = "轻度疲劳"
	  }	  
	  else
	  {
		msg = "中度至重度疲劳（分数越高疲劳越严重）"	
	  }	  

      this.setData({
        iScoreBalance: totalscore,
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

