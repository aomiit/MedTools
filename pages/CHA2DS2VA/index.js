//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0,0,0],

    gitems:[
      {
	  	  name: '年龄(岁)',
        items: [
		      { name: '<65', value: 0.0, checked: false },
          { name: '65~74', value: 1.0, checked: false },
          { name: '≥75', value: 2.0, checked: false },		 		  
        ]
      },    
      {
        name: '充血性心力衰竭病史?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '高血压病史?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '卒中/TIA/血栓栓塞史??',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
        ]
      },
            {
        name: '血管疾病史?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
            {
        name: '糖尿病史?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
            {
        name: '女患者?',
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
      path: '/pages/CHA2DS2VA/index',
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

	 		if (score == 0) {
	        msg = "卒中风险 0%/年"
	    }
	    if (score == 1) {
	        msg = "卒中风险 1.3%/年"
	    }
	    if (score == 2) {
	        msg = "卒中风险 2.2%/年"
	    }
	    if (score == 3) {
	        msg = "卒中风险 3.2%/年"
	    }
	    if (score == 4) {
	        msg = "卒中风险 4.0%/年"
	    }
	    if (score == 5) {
	        msg = "卒中风险 6.7%/年"
	    }
	    if (score == 6) {
	        msg = "卒中风险 9.8%/年"
	    }
	    if (score == 7) {
	        msg = "卒中风险 9.6%/年"
	    }
	    if (score == 8) {
	        msg = "卒中风险 6.7%/年"
	    }
	    if (score > 8) {
	        msg = "卒中风险 15.2%/年"
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

