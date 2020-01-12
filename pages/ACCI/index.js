//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    gitems:[
      {
	  	name: '年龄(岁)',
        items: [
		  { name: '<50', value: 0.0, checked: false },
          { name: '50~59', value: 1.0, checked: false },
          { name: '60~69', value: 2.0, checked: false },	
          { name: '70~79', value: 3.0, checked: false },
          { name: '>=80', value: 4.0, checked: false },		  
        ]
      },    
      {
        name: '心肌梗死?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '充血性心衰?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
        ]
      },
      {
        name: '周围血管疾病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '脑血管疾病或TIA?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
      {
        name: '偏瘫?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
        ]
      },
	  {
        name: '痴呆/阿尔茨海默病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
	  {
        name: '慢性阻塞性肺病/哮喘?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
	  {
        name: '类风湿或结缔组织疾病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
	  {
        name: '消化性溃疡?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 1.0, checked: false },
        ]
      },
	  {
        name: '糖尿病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是,但无并发症', value: 1.0, checked: false },
		  { name: '是,伴终末器官损伤', value: 2.0, checked: false },
        ]
      },
      {
        name: '中重度慢性肾病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
        ]
      },
      {
        name: '肝脏疾病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '轻度', value: 2.0, checked: false },
		  { name: '重度', value: 3.0, checked: false },
        ]
      },
      {
        name: '实体瘤?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是,无转移', value: 2.0, checked: false },
		  { name: '是,伴转移', value: 6.0, checked: false },
        ]
      },
      {
        name: '白血病?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
        ]
      },
      {
        name: '淋巴瘤?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 2.0, checked: false },
        ]
      },
      {
        name: 'HIV/AIDS?',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 6.0, checked: false },
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
			msg = "预后良好，10年生存约为98%"
		}
		if (score == 1) {
			msg = "预后良好，10年生存约为96%"
		}
		if (score == 2) {
			msg = "10年生存约为90%"
		}
		if (score == 3) {
			msg = "10年生存约为77%"
		}
		if (score == 4) {
			msg = "10年生存约为53%"
		}
		if (score == 5) {
			msg = "10年生存约为21%"
		}
		if (score == 6) {
			msg = "10年生存约为2%"
		}
		if (score >= 7) {
			msg = "10年生存约为0%"
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

