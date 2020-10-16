//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0,0,0,0],

    gitems:[ 
      {
        name: '存在导致DIC的原发病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
        ]
      },
	  {
        name: '不能用原发病解释的严重或多发出血倾向?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
	        {
        name: '不能用原发病解释的微循环障碍或休克?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
	  {
        name: '广泛性皮肤、粘膜栓塞，灶性缺血性坏死、脱落及溃疡形成，不明原因的肺、肾、脑等脏器功能衰竭?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '血小板计数?',
        items: [
          { name: '≥100*10^9/L (非恶性血液病)', value: 0.0, checked: false },
          { name: '80~<100*10^9/L(非恶性血液病)', value: 1.0, checked: false },
          { name: '<80*10^9/L(非恶性血液病)', value: 2.0, checked: false },
          { name: '24小时内下降≥50%(非恶性血液病)', value: 1.0, checked: false },
          { name: '<50*10^9/L(恶性血液病)', value: 11.0, checked: false },
          { name: '24小时内下降≥50%(恶性血液病)', value: 11.0, checked: false },	
          { name: '非上两种情况(恶性血液病)', value: 10.0, checked: false },			  
        ]
      },
	  {
        name: 'D-二聚体?',
        items: [
          { name: '<5mg/L', value: 0.0, checked: false },
          { name: '5~<9mg/L', value: 2.0, checked: false },
		      { name: '>9mg/L', value: 3.0, checked: false },
        ]
      },
	  {
        name: 'PT及APTT延长?',
        items: [
          { name: 'PT延长<3S且APTT延长<10S', value: 0.0, checked: false },
          { name: 'PT延长≥3S或APTT延长≥10S', value: 1.0, checked: false },
		      { name: 'PT延长≥6S', value: 2.0, checked: false },
        ]
      },
	  {
        name: '纤维蛋白原?',
        items: [
          { name: '≥1.0g/L', value: 0.0, checked: false },
          { name: '<1.0g/L', value: 1.0, checked: false },
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
      path: '/pages/CDSS/index',
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
	  
	  for (var i = 0, len = iScores.length; i < len; i++) 
	  {
		score += iScores[i];
	  }  
	  
	  var msg = "";
	  
	  if(iScores[4] > 9.0)
	  {
		score -= iScores[1];
		score -= 10;
		if (score >= 6) {
			msg = "恶性血液病，可诊断为DIC。"
		}  
		else
		{
			msg = "恶性血液病，DIC风险较低。"
		}
	  }
	  else
	  {
		score = score.toFixed(0);
		if (score >= 7) {
			msg = "非恶性血液病，可诊断为DIC。"
		}  
		else
		{
			msg = "非恶性血液病，DIC风险较低。"
		}
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

