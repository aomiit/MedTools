//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0],

    gitems:[
      {
	  	name: '确诊时的年龄(岁)',
        items: [
		      { name: '<50', value: 0.0, checked: false },
          { name: '≥50', value: 1.0, checked: false },		  
        ]
      },    
      {
        name: '诊断时PSA水平(ng/mL)?',
        items: [
          { name: '<=6', value: 0.0, checked: false },
          { name: '6.1~10', value: 1.0, checked: false },
          { name: '10.1~20', value: 2.0, checked: false },
          { name: '20.1~30', value: 3.0, checked: false },
          { name: '>30', value: 4.0, checked: false },
        ]
      },
      {
        name: 'Gleason分级(primary/secondary)?',
        items: [
          { name: 'no pattern 4或5分', value: 0.0, checked: false },
          { name: 'secondary pattern 4或5分', value: 1.0, checked: false }, 
		  { name: 'primary pattern 4或5分', value: 3.0, checked: false }, 
        ]
      },
      {
        name: '临床分期?',
        items: [
          { name: 'T1或T2', value: 0.0, checked: false },
          { name: 'T3a', value: 1.0, checked: false },
        ]
      },
      {
        name: '组织切片中阳性切片比例?',
        items: [
          { name: '<34%', value: 0.0, checked: false },
          { name: '≥34%', value: 1.0, checked: false },
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
      path: '/pages/ACCI/index',
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

      for (var i = 0, len = iScores.length; i < len; i++) {
        score += iScores[i];
      }
      
      console.log(score) 
      var msg = null;

      score = score.toFixed(0);

		if (score <= 0x2) {
			msg = "低危人群,主动监测得到很好的治疗"
		}
		if (score >= 0x3 && score <= 0x5) {
			msg = "中危人群,对局部治疗反应良好(单独手术或放射治疗，近距离放疗加或[不加]外照射治疗)"
		}
		if (score >= 0x6) {
			msg = "高危人群,通常需要多模式治疗(手术加放射治疗，或激素疗法加放射治疗)"
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

