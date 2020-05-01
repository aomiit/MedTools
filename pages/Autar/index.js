//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems:[  
	  {
        name: '年龄(岁)',
        items: [
		      { name: '10~30', value: 0.0, checked: false },
          { name: '31~40', value: 1.0, checked: false },
          { name: '41~50', value: 2.0, checked: false },
          { name: '51~60', value: 3.0, checked: false },	
          { name: '61~70', value: 4.0, checked: false },		  
          { name: '>70', value: 5.0, checked: false },		  		  
        ]
      },	
      {
        name: '体重指数(BMI)',
        items: [
          { name: '低体重,BMI<18.5', value: 0.0, checked: false },
          { name: '正常体重 BMI 18.5-22.9', value: 1.0, checked: false },
          { name: '超重 BMI 23-24.9', value: 2.0, checked: false },
          { name: '肥胖 BMI 25-29.9', value: 3.0, checked: false },
          { name: '过度肥胖 BMI≥30', value: 4.0, checked: false },
		    ]
      },
	  {
        name: '运动能力',
        items: [
          { name: '自由活动', value: 0.0, checked: false },
          { name: '运动受限(需要辅助工具)', value: 1.0, checked: false },
          { name: '运动严重受限(需他人协助)', value: 2.0, checked: false },
          { name: '使用轮椅', value: 3.0, checked: false },
          { name: '绝对卧床', value: 4.0, checked: false },
        ]
      },
      {
        name: '头部受伤',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 1.0, checked: false },
        ]
      },
      {
        name: '胸部受伤',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 1.0, checked: false },
        ]
      },
	  {
        name: '脊柱受伤',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 2.0, checked: false },
        ]
      },
	  {
        name: '骨盆受伤',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 3.0, checked: false },
		]
      },
	  {
        name: '下肢受伤',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 4.0, checked: false },
		]
      },
	  
      {
        name: '溃疡性结肠炎',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 1.0, checked: false },
        ]
      },
	  {
        name: '红细胞增多症',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 2.0, checked: false },
		]
      },
	  {
        name: '静脉曲张',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 3.0, checked: false },
        ]
      },
	  {
        name: '慢性心脏病',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 3.0, checked: false },
        ]
      },	  
	  {
        name: '急性心肌梗死',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 4.0, checked: false },
        ]
      },
	  {
        name: '恶性肿瘤',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 5.0, checked: false },
        ]
      },
	  {
        name: '脑血管疾病',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 6.0, checked: false },
        ]
      },
	  {
        name: '静脉栓塞病史',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 7.0, checked: false },
        ]
      },	
	  {
        name: '如果有口服避孕药，现在年龄',
        items: [
          { name: '未使用口服避孕药', value: 0.0, checked: false },
          { name: '20-35岁', value: 1.0, checked: false },
		      { name: '>35岁', value: 2.0, checked: false },
        ]
      },
	  {
        name: '激素治疗',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '有', value: 2.0, checked: false },
        ]
      },
	  {
        name: '怀孕/产褥期',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 3.0, checked: false },
        ]
      },
	  {
        name: '血栓形成',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 4.0, checked: false },
        ]
      },	
	  {
        name: '外科手术(只选择其中一项)',
        items: [
          { name: '无手术', value: 0.0, checked: false },
          { name: '小手术<=30分钟', value: 1.0, checked: false },
          { name: '择期大手术', value: 2.0, checked: false },
          { name: '急诊大手术', value: 3.0, checked: false },
          { name: '胸部手术', value: 3.0, checked: false },
          { name: '腹部手术', value: 3.0, checked: false },
          { name: '泌尿系手术', value: 3.0, checked: false },
          { name: '神经系统手术', value: 3.0, checked: false },
          { name: '妇科手术', value: 3.0, checked: false },
          { name: '骨科(腰部以下)手术', value: 4.0, checked: false },
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
      path: '/pages/Autar/index',
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
	    var msg = null;
      var iScores = this.data.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        score += iScores[i];
      }
	 
      if (score <= 10) {
        msg = "低风险"
      }
      if (score > 10 || score <= 14) {
        msg = "中风险"
      }
      if (score >= 15) {
        msg = "高风险"
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

