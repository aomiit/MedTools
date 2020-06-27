//获取应用实例
var app = getApp();

Page({
  data: {     
	balance:{		
		title :'平衡功能',
		iScores: [0,0,0,0,0,0,0],

		gitems:[
		  {
			name: '1.无支撑坐位?',
			items: [
			  { name: '不能保持坐位', value: 0.0, checked: false },
			  { name: '能坐，但少于5分钟', value: 1.0, checked: false },
			  { name: '能坚持坐5分钟以上', value: 2.0, checked: false },
			]
		  },
		  {
			name: '2.健侧展翅反应?',
			items: [
			  { name: '肩部无外展或肘关节无伸展', value: 0.0, checked: false },
			  { name: '反应减弱', value: 1.0, checked: false },
			  { name: '反应正常', value: 2.0, checked: false },
			]
		  },
		  {
			name: '3.患侧展翅反应?',
			items: [
			  { name: '肩部无外展或肘关节无伸展', value: 0.0, checked: false },
			  { name: '反应减弱', value: 1.0, checked: false },
			  { name: '反应正常', value: 2.0, checked: false },
			]
		  },
		  {
			name: '4.支撑下站立?',
			items: [
			  { name: '不能站立', value: 0.0, checked: false },
			  { name: '在他人的最大支撑下可站立', value: 1.0, checked: false },
			  { name: '由他人稍给支撑即能站立1分钟', value: 2.0, checked: false },
			]
		  },
		  {
			name: '5.无支撑站立?',
			items: [
			  { name: '不能站立', value: 0.0, checked: false },
			  { name: '不能站立1分钟或身体摇晃', value: 1.0, checked: false },
			  { name: '能平衡站立1分钟以上', value: 2.0, checked: false },
			]
		  },
		  {
			name: '6.健侧站立?',
			items: [
			  { name: '不能维持1-2秒', value: 0.0, checked: false },
			  { name: '平衡站稳4-9秒', value: 1.0, checked: false },
			  { name: '平衡站立多于9秒', value: 2.0, checked: false },
			]
		  },	 
		  {
			name: '7.患侧站立?',
			items: [
			  { name: '不能维持1-2秒', value: 0.0, checked: false },
			  { name: '平衡站稳4-9秒', value: 1.0, checked: false },
			  { name: '平衡站立多于9秒', value: 2.0, checked: false },
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
      path: '/pages/FuglMeyerB/index',
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

	  if (totalscore < 14) {
		msg = "平衡功能障碍"
	  }
	  else
	  {
		msg = "平衡功能正常"	
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

