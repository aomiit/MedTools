//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0,0,0,0],

    gitems:[
      {
        name: '气管分泌物',
        items: [
          { name: '少', value: 0.0, checked: false },
          { name: '大量', value: 1.0, checked: false },
          { name: '大量+脓性', value: 2.0, checked: false },
        ]
      },
      {
        name: '胸片',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '弥漫', value: 1.0, checked: false },
          { name: '局限', value: 2.0, checked: false },
        ]
      },
      {
        name: '体温',
        items: [
          { name: '36.5-38.4℃', value: 0.0, checked: false },
          { name: '38.5-38.9℃', value: 1.0, checked: false },
          { name: '<36或 >39℃', value: 2.0, checked: false },
        ]
      },
      {
        name: '白细胞计数',
        items: [
          { name: '4-11*10^9/L', value: 0.0, checked: false },
          { name: '<4或>11*10^9/L', value: 1.0, checked: false },
		  { name: '<4或>11*10^9/L + 杆状核中性粒细胞 >500', value: 2.0, checked: false },
        ]
      },
      {
        name: 'PaO2/FiO2',
        items: [
          { name: '>240或ARDS', value: 0.0, checked: false },       
          { name: '≤240且无ARDS', value: 2.0, checked: false },
        ]
      },
	  {
        name: '病情进展',
        items: [
          { name: '影像学未见进展', value: 0.0, checked: false },       
          { name: '影像学进展（除外慢性心衰和ARDS）', value: 2.0, checked: false },
        ]
      },
      {
        name: '培养',
        items: [
          { name: '致细菌培养极少或轻度生长或无生长', value: 0.0, checked: false },
          { name: '与Gram染色下所见致病菌一致（少/轻度生长）', value: 1.0, checked: false },
          { name: '致病菌培养中或重度生长', value: 1.0, checked: false },
		      { name: '与Gram染色下所见致病菌一致（中/重度生长）', value: 1.0, checked: false },
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
      path: '/pages/PULInfect/index',
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
      var msg = '';  
           
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

