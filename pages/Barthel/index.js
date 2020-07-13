//获取应用实例
var app = getApp();

Page({
  data: {     
	balance:{		
		title :'Barthel指数评定量表',
		iScores: [0,0,0,0,0,0,0,0,0,0],

		gitems:[
		  {
			name: '1.大便',
			items: [
			  { name: '失禁', value: 0.0, checked: false },
			  { name: '偶尔失禁或需要器具帮助	', value: 5.0, checked: false },
			  { name: '能控制:如果需要,能使用灌肠剂或栓剂	', value: 10.0, checked: false },
			]
		  },
		  {
			name: '2.小便',
			items: [
			  { name: '失禁', value: 0.0, checked: false },
			  { name: '偶尔失禁或需要器具帮助	', value: 5.0, checked: false },
			  { name: '能控制:如果需要,能使用集尿器', value: 10.0, checked: false },
			]
		  },
		  {
			name: '3.修饰',
			items: [
			  { name: '需要帮助', value: 0.0, checked: false },
			  { name: '独立洗脸、梳头、刷牙、剃须', value: 5.0, checked: false },
			]
		  },
		  {
			name: '4.洗澡',
			items: [
			  { name: '依赖', value: 0.0, checked: false },
			  { name: '自理', value: 5.0, checked: false },			
			]
		  },
		  {
			name: '5.入厕',
			items: [
			  { name: '依赖别人', value: 0.0, checked: false },
			  { name: '需要部分帮助；在穿脱衣裤或使用卫生纸时需要帮助', value: 5.0, checked: false },
			  { name: '独立用厕所或便盆，穿脱衣裤，冲洗或清洗便盆', value: 10.0, checked: false },
			]
		  },
		  {
			name: '6.吃饭',
			items: [
			  { name: '依赖别人', value: 0.0, checked: false },
			  { name: '需要部分帮助(如切割食物，搅拌食物)', value: 5.0, checked: false },
			  { name: '能使用任何需要的装置，在适当的时间内独立进食', value: 10.0, checked: false },
			]
		  },
		  {
			name: '7.穿衣',
			items: [
			  { name: '依赖别人', value: 0.0, checked: false },
			  { name: '需要帮助,但在适当的时间内至少完成一半的工作', value: 5.0, checked: false },
			  { name: '自理(系、开纽扣,关、开拉锁和穿脱支具)', value: 10.0, checked: false },
			]
		  },		
		  {
			name: '8.转移',
			items: [
			  { name: '完全依赖别人,不能坐', value: 0.0, checked: false },
			  { name: '能坐,但需要大量帮助(2人)才能转移', value: 5.0, checked: false },
			  { name: '需少量帮助(1人)或指导', value: 10.0, checked: false },
			  { name: '独立从床到轮椅,再从轮椅到床,包括从床上坐起、刹住轮椅、抬起', value: 15.0, checked: false },
			]
		  },
		  {
			name: '9.行走',
			items: [
			  { name: '不能动', value: 0.0, checked: false },
			  { name: '在轮椅上独立行动,能行走45米', value: 5.0, checked: false },
			  { name: '需要1人帮助行走(体力或语言指导)45米', value: 10.0, checked: false },
			  { name: '能在水平路面上行走45米,可以使用辅助装置,不包括带轮的助行', value: 15.0, checked: false },
			]
		  },
		  {
			name: '10.上下楼梯',
			items: [
			  { name: '不能', value: 0.0, checked: false },
			  { name: '需要帮助和监督', value: 5.0, checked: false },
			  { name: '独立，可以使用辅助装置', value: 10.0, checked: false },
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
      path: '/pages/Barthel/index',
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
     
      console.log(uscore) 

      var msg = null;
	  
	  var totalscore = uscore.toFixed(0);

	  if (totalscore <= 20) {
		msg = "极严重功能障碍"
	  }
	  else if(totalscore <=45)
	  {
		msg = "严重功能障碍" 
	  }
	  else if(totalscore <=70)
	  {
		msg = "中度功能障碍" 
	  }
	  else if(totalscore <=95)
	  {
		msg = "轻度功能障碍" 
	  }
	  else
	  {
		msg = "ADL自理"	
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

