//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0],

    gitems:[ 
      {
        name: '年龄(A) ≥ 60岁?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '血压(B)初始评估血压 ≥ 140/90 mmHg?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '临床症状(C)TIA症状?',
        items: [
          { name: '单侧乏力', value: 2.0, checked: false },
          { name: '不伴乏力的语言障碍', value: 1.0, checked: false },
		  { name: '无症状', value: 0.0, checked: false },
        ]
      },
      {
        name: '症状持续时间?',
        items: [
          { name: '<10分钟', value: 0.0, checked: false },
          { name: '10-59分钟', value: 1.0, checked: false },
		  { name: '≥60分钟', value: 2.0, checked: false },
        ]
      },
      {
        name: '有糖尿病史?',
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
      path: '/pages/ABCD2/index',
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
	  
	  if(iScores[2] == 0)
	  {
		score -= iScores[3];
	  }
      
      console.log(score) 
      var msg = "";

      score = score.toFixed(0);

		if (score < 4) {
			msg = "根据验证试验的结果,0-3 分:低危. 2天卒中危险:1.0%.7天卒中危险:1.2%.90天卒中危险:3.1%."
		}
		else if (score < 6) {
			msg = "根据验证试验的结果, 4-5 分:中危.2天卒中危险:4.1%.7天卒中危险:5.9%.90天卒中危险:9.8%."
		}
		else if (score >= 6) {
			msg = "根据验证试验的结果, 6-7 分:高危.2天卒中危险:8.1%.7天卒中危险:11.7%.90天卒中危险:17.8%."
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

