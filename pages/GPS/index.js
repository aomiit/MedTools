//获取应用实例
var app = getApp();

Page({
  data: {      
    iScore:0,
    iScores: [0,0],

    gitems:[
      {
        name: '血清CRP?',
        items: [
          { name: '>10mg/L', value: 1.0, checked: false },
          { name: '<=10mg/L', value: 0.0, checked: false },
        ]
      },
      {
        name: '血清白蛋白水平?',
        items: [
          { name: '<35g/L', value: 1.0, checked: false },
          { name: '<=35g/L', value: 0.0, checked: false },
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
      path: '/pages/GPS/index',
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

	for (var i = 0, len = iScores.length; i < len; i++) 
	{
		score += iScores[i];
	}

	console.log(score) 
	var msg = null;

	score = score.toFixed(0);

	if(score==0)
	{
		msg="低危型，中位生存期约为25.2月";
	}
	else if(score==1)
	{
		msg="中危型，中位生存期约为15.3月";
	}
    else if(score==2)
	{
		msg="高危型，中位生存期约为5.8月"
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

