//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0],

    gitems:[  
	  {
        name: '呼吸系统(PaO2/FiO2氧合指数)(mmHg)',
        items: [
		      { name: '≥400', value: 0.0, checked: false },
			  { name: '300-399', value: 1.0, checked: false },
			  { name: '200-299', value: 2.0, checked: false },	  		  
			  { name: '100-199mmHg+机械通气(无创/有创)', value: 3.0, checked: false },
			  { name: '<100mmHg+机械通气(无创/有创)', value: 4.0, checked: false },
			]
      },	
      {
        name: '血小板计数(x10^9/L)',
        items: [
			  { name: '>150', value: 0.0, checked: false },
			  { name: '101-150', value: 1.0, checked: false },
			  { name: '51-100', value: 2.0, checked: false },
			  { name: '21-50', value: 3.0, checked: false },
			  { name: '<21', value: 4.0, checked: false },
		    ]
      },
      {
        name: '胆红素(umol/L)？',
        items: [
			  { name: '<20', value: 0.0, checked: false },
			  { name: '20-32', value: 1.0, checked: false },
			  { name: '33-101', value: 2.0, checked: false },
			  { name: '102-204', value: 3.0, checked: false },
			  { name: '＞204', value: 4.0, checked: false },		  
        ]
      },
      {
        name: '循环系统功能',
        items: [
			  { name: '平均动脉压≥70mmHg', value: 0.0, checked: false },
			  { name: '平均动脉压<70mmHg', value: 1.0, checked: false },
			  { name: '多巴胺剂量≤5ug/kg/min或多巴酚丁胺任何剂量', value: 2.0, checked: false },
			  { name: '多巴胺剂量>5ug/kg/min或肾上腺素剂量≤0.1ug/kg/min或去甲肾腺剂量≤0.1ug/kg/min', value: 3.0, checked: false },
			  { name: '多巴胺剂量>15ug/kg/min或肾上腺素剂量>0.1ug/kg/min或去甲肾腺剂量>0.1ug/kg/min', value: 4.0, checked: false },			  
	  
        ]
      },
	  {
        name: 'GCS评分',
        items: [
			  { name: '15分', value: 0.0, checked: false },
			  { name: '13～14分', value: 1.0, checked: false },
			  { name: '10～12分', value: 2.0, checked: false },
			  { name: '6～9分', value: 3.0, checked: false },
			  { name: '<6分', value: 4.0, checked: false },	
        ]
      },  
	  {
        name: '肾脏功能',
        items: [
			  { name: '肌酐<110umol/L', value: 0.0, checked: false },
			  { name: '肌酐110-170umol/L', value: 1.0, checked: false },
			  { name: '肌酐171-299umol/L', value: 2.0, checked: false },
			  { name: '肌酐300-440umol/L或24小时尿量201-500ml/24h', value: 3.0, checked: false },
			  { name: '肌酐>440umol/L或24小时尿量<200ml/24h', value: 4.0, checked: false },	
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
      path: '/pages/SOFA/index',
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
	    var msg = null;
      var iScores = this.data.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        score += iScores[i];
      }
	 
      if (score <= 1) {
        msg = "可能为非脓毒症"
      }
      else if (score >= 2) {
        msg = "2分即考虑脓毒症，分数越高，表明越严重。2分时，即有10%的院内死亡率"
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

