//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0,0,0],

    gitems:[
      {
	  	name: '年龄≥65岁?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },	  
        ]
      },    
      {
        name: '≥3个冠心病的危险因素?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '已知的冠心病(狭窄≥50%)?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '过去7天服用阿司匹林?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '严重的心绞痛(24小时内发作两次以上)?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: 'ST段改变≥0.5mm?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
	  {
        name: '心肌标记物阳性?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
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
      path: '/pages/NoSTTIMI/index',
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
      var msg = null;

      score = score.toFixed(0);

		if (score <= 1) {
        msg = "14天风险为5%：总病死率，新发或复发MI，或严重复发性缺血需要紧急血管再通."
		}
		if (score == 2) {
			msg = "14天风险为8%：总病死率，新发或复发MI，或严重复发性缺血需要紧急血管再通."
		}
		if (score == 3) {
			msg = "14天风险为13%：总病死率，新发或复发MI，或严重复发性缺血需要紧急血管再通."
		}
		if (score == 4) {
			msg = "14天风险为20%：总病死率，新发或复发MI，或严重复发性缺血需要紧急血管再通."
		}
		if (score == 5) {
			msg = "14天风险为26%：总病死率，新发或复发MI，或严重复发性缺血需要紧急血管再通."
		}
		if (score > 5) {
			msg = "14天风险为41%：总病死率，新发或复发MI，或严重复发性缺血需要紧急血管再通."
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
      iScore: 0.0,
      iContent: "",
    })
  },
});

