//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0,0,0,0,0,0,0,0,0],

    gitems:[  
	  {
        name: 'WHO分类',
        items: [
          { name: '结缔组织疾病相关的肺动脉高压', value: 1.0, checked: false },
          { name: '家族性肺动脉高压', value: 2.0, checked: false },
		  { name: '门脉性肺动脉高压', value: 3.0, checked: false },		  
        ]
      },	
      {
        name: 'eGFR<60 mL/min/1.73m^2或肾功能不全(如果无EGFR)',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
		]
      },
	  {
        name: '男性，且年龄大于60岁',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
		]
      },
      {
        name: 'NYHA/WHO心功能分级',
        items: [
          { name: 'I级', value: -1.0, checked: false },
		  { name: 'II级', value: 0.0, checked: false },
          { name: 'III级', value: 1.0, checked: false },
		  { name: 'IV级', value: 2.0, checked: false },
        ]
      },
      {
        name: '收缩压',
        items: [
          { name: '≥110mmHg', value: 0.0, checked: false },
          { name: '<110mmHg', value: 1.0, checked: false },
        ]
      },
	  {
        name: '心律/脉搏',
        items: [
          { name: '≤96次/分', value: 0.0, checked: false },
          { name: '>96次/分', value: 1.0, checked: false },
        ]
      },
	  {
        name: '6个月全因住院',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 1.0, checked: false },
		]
      },
	  {
        name: '六分钟步行测试',
        items: [
          { name: '<165米', value: 1.0, checked: false },
          { name: '165~439', value: -1.0, checked: false },
		  { name: '≥440', value: -2.0, checked: false },
		]
      },
	  
      {
        name: '心包积液',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 1.0, checked: false },
        ]
      },
	  {
        name: '血BNP水平',
        items: [
          { name: 'BNP<50pg/mL或NT-proBNP<300 pg/mL', value: -2.0, checked: false },
          { name: 'BNP在50-200pg/mL或NT-proBNP在300-1100 pg/mL', value: 0.0, checked: false },
		  { name: 'BNP在200-799pg/mL', value: 1.0, checked: false },
		  { name: '≥800 pg/mL或NT-proBNP≥1100 pg/mL', value: 1.0, checked: false },
		]
      },
	  {
        name: '肺一氧化碳弥散量(DLCO)预测值%',
        items: [
          { name: '≥40%', value: 0.0, checked: false },
          { name: '<40%', value: 1.0, checked: false },
        ]
      },
	  {
        name: '一年内右心房的平均压',
        items: [
          { name: '≤20 mmHg', value: 0.0, checked: false },
          { name: '>20 mmHg', value: 1.0, checked: false },
        ]
      },	  
	  {
        name: '肺血管阻力(PVR)',
        items: [
          { name: '≥5 Wood单位', value: 0.0, checked: false },
          { name: '<5 Wood单位', value: -1.0, checked: false },
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
      path: '/pages/REVEAL/index',
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
	  
	  score = score + 6;
	 
	if (score <= 6) {
		msg = "低风险，1年内生存率在95%以上"
	}
	if (score == 8 || score == 7) {
		msg = "平均风险，1年内生存率在94%"
	}
	if (score == 9) {
		msg = "高风险，1年内生存率在90%"
	}
	if (score == 10) {
		msg = "中高度风险，1年内生存率在80%"
	}
	if (score == 11) {
		msg = "高风险，1年内生存率在75%左右"
	}
	if (score == 12) {
		msg = "高风险，1年内生存率在60%左右"
	}
	if (score >= 13) {
		msg = "极高风险，1年内生存率在45%左右"
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

