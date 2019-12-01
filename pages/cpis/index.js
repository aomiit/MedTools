//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0,0,0],

    gitems:[
      {
        name: '体温(12小时平均值，℃)',
        items: [
          { name: '36～38', value: 0.0, checked: false },
          { name: '38～39', value: 1.0, checked: false },
          { name: '＞39或＜36', value: 2.0, checked: false },
        ]
      },
      {
        name: '白细胞计数(*109/l)',
        items: [
          { name: '4～11', value: 0.0, checked: false },
          { name: '11～17', value: 1.0, checked: false },
          { name: '＞17或＜4', value: 2.0, checked: false },
        ]
      },
      {
        name: '分泌物(24小时吸出物性状数量)',
        items: [
          { name: '无痰或少许', value: 0.0, checked: false },
          { name: '中~大量，非脓性', value: 1.0, checked: false },
          { name: '中~大量，脓性', value: 2.0, checked: false },
        ]
      },
      {
        name: '气体交换指数(PaO2/FiO2,kPa)或者以250(mmHg)为界',
        items: [
          { name: '>33', value: 0.0, checked: false },
          { name: '<33', value: 2.0, checked: false },
        ]
      },
      {
        name: 'X胸片浸润影',
        items: [
          { name: '无', value: 0.0, checked: false },
          { name: '斑片状', value: 1.0, checked: false },
          { name: '融合片状', value: 2.0, checked: false },
        ]
      },
      {
        name: '气管吸取物培养或痰培养',
        items: [
          { name: '无致病菌生长', value: 0.0, checked: false },
          { name: '有致病菌生长', value: 1.0, checked: false },
          { name: '两次培养到同一种细菌或者格兰染色与培养一致', value: 2.0, checked: false },
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
      path: '/pages/cpis/index',
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

      if (score <= 6) {
        msg = "评分降低，病情缓解"
      }
      if (score > 6) {
        msg = "危险高，评分越高，病情越重"
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

