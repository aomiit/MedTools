//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0,0,0,0],
	
	gitems:[  
      {
        name: '性别',
        items: [
          { name: '男', value: 1.0, checked: false },
          { name: '女', value: 0.972, checked: false },
        ]
      },	
      {
        name: '既往心脏手术史',
        items: [
          { name: '否', value: 1.0, checked: false },
          { name: '是', value: 1.993, checked: false },
		]
      },
	  {
        name: '血肌酐值升高',
        items: [
          { name: '否', value: 1.0, checked: false },
          { name: '是', value: 1.933, checked: false },
        ]
      },
	  {
        name: 'NYHA心功能分级III级或IV级',
        items: [
          { name: '否', value: 1.0, checked: false },
          { name: '是', value: 1.388, checked: false },
        ]
      },
	  {
        name: 'LVEF',
        items: [
		  { name: '≥45%', value: 1.0, checked: false },
          { name: '36%~44%', value: 1.516, checked: false },
          { name: '≤35%', value: 2.011, checked: false },
		]
      },
      {
        name: '合并瓣膜手术',
        items: [
          { name: '否', value: 1.0, checked: false },
          { name: '是', value: 0.866, checked: false },
        ]
      },

      {
        name: '合并主动脉手术',
        items: [
          { name: '否', value: 1.0, checked: false },
          { name: '是', value: 1.682, checked: false },
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
      path: '/pages/PGLANCE/index',
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
        score += Math.log(iScores[i]);
      }
	  
      score -= 6.553;
      
      var exp1 = Math.exp(score);
      var rate=exp1/(1+exp1);
      
      console.log(rate) 
      var msg = null;

      rate = rate.toFixed(4);

      var prate = rate * 100; 

      msg = "死亡率为:" + prate.toFixed(2) + "%"
           
      this.setData({
        iScore: rate,
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

