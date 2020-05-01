//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0],

    gitems:[  
	  {
        name: '肿瘤原发位置',
        items: [
		      { name: '胰腺、胃', value: 2.0, checked: false },
			  { name: '肺、淋巴瘤、妇科肿瘤、膀胱、睾丸', value: 1.0, checked: false },
			  { name: '其它部位', value: 0.0, checked: false },	  		  
			]
      },	
      {
        name: '化疗前血小板水平',
        items: [
			  { name: '<350x10^9', value: 0.0, checked: false },
			  { name: '≥50x10^9', value: 1.0, checked: false },
		    ]
      },
      {
        name: '血红蛋白<10g/L或使用促红细胞生素吗？',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '化疗前白细胞水平',
        items: [
          { name: '<11x10^9', value: 0.0, checked: false },
          { name: '≥11x10^9', value: 1.0, checked: false },
        ]
      },
	  {
        name: 'BMI水平',
        items: [
          { name: '<35 kg/m^2', value: 0.0, checked: false },
          { name: '≥35 kg/m^2', value: 1.0, checked: false },
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
      path: '/pages/Khorana/index',
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
	    var msg = null;
      var iScores = this.data.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        score += iScores[i];
      }
	 
      if (score <= 0) {
        msg = "低风险"
      }
      if (score > 0 || score <= 2) {
        msg = "中风险"
      }
      if (score >= 3) {
        msg = "高风险"
      }
   
      console.log(score) 

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

