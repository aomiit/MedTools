//获取应用实例
var app = getApp();

Page({
  data: {      
    iScore:0,
    iScores: [0,0,0,0,0],

    gitems:[
      {
        name: '您是否偶尔存在控制不住排气(放屁)?',
        items: [
          { name: '从未有过', value: 0.0, checked: false },
          { name: '有，每周不超一次', value: 4.0, checked: false },
		  { name: '有，每周至少一次', value: 7.0, checked: false },
        ]
      },
      {
        name: '您是否偶尔有稀便从肛门漏出?',
        items: [
          { name: '从未有过', value: 0.0, checked: false },
          { name: '有，每周不超一次', value: 3.0, checked: false },
		  { name: '有，每周至少一次', value: 3.0, checked: false },
        ]
      },
	  {
        name: '您每天大便次数，最接近的范围?',
        items: [
          { name: '7次以上', value: 4.0, checked: false },
          { name: '4-7次', value: 2.0, checked: false },
		  { name: '1-3次', value: 0.0, checked: false },
		  { name: '不到一次', value: 5.0, checked: false },
        ]
      },
	  
	  {
        name: '您是否有刚排完便、1小时内又再次排便的情况?',
        items: [
          { name: '从未有过', value: 0.0, checked: false },
          { name: '有，每周不超一次', value: 9.0, checked: false },
		  { name: '有，每周至少一次', value: 11.0, checked: false },
        ]
      },

	  {
        name: '您是否有大便急迫，需要立即奔向厕所的情况?',
        items: [
          { name: '从未有过', value: 0.0, checked: false },
          { name: '有，每周不超一次', value: 11.0, checked: false },
		  { name: '有，每周至少一次', value: 16.0, checked: false },
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
      path: '/pages/LARS/index',
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

	if(score<=20)
	{
		msg="无LARS";
	}
	else if(score<30)
	{
		msg="轻度LARS";
	}
    else if(score<=42)
	{
		msg="重度LARS"
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

