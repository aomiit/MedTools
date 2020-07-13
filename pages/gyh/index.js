//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0,0],

    gitems:[
      {
        name: '总胆红素',
        items: [
          { name: '<2 mg/dL', value: 1.0, checked: false },
          { name: '2-3 mg/dL(34-50 µmol/L)', value: 2.0, checked: false },
          { name: '>3 mg/dL(>50 µmol/L)', value: 3.0, checked: false },
        ]
      },
      {
        name: '白蛋白',
        items: [
          { name: '>3.5 g/dL(>35 g/L)', value: 1.0, checked: false },
          { name: '2.8-3.5 g/dL(28-35 g/L)', value: 2.0, checked: false },
          { name: '<2.8 g/dL', value: 3.0, checked: false },
        ]
      },
      {
        name: '国际标准化比率',
        items: [
          { name: '<1.7', value: 1.0, checked: false },
          { name: '1.7-2.2', value: 2.0, checked: false },
          { name: '>2.2', value: 3.0, checked: false },
        ]
      },
      {
        name: '腹水',
        items: [
          { name: '无腹水', value: 1.0, checked: false },
          { name: '能够控制的腹水', value: 2.0, checked: false },
          { name: '难以控制的腹水', value: 3.0, checked: false },
        ]
      },
      {
        name: '脑病',
        items: [
          { name: '无脑病', value: 1.0, checked: false },
          { name: '能够控制的脑病', value: 2.0, checked: false },
          { name: '难以控制的脑病', value: 3.0, checked: false },
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
      path: '/pages/gyh/index',
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

      if (score < 7) {
        msg = "Child分级 A. 预期寿命:15-20 年. 腹部手术围手术期病死率:10%."
      }
      if (score > 6 && score < 10) {
        msg = "Child分级 B. 进行移植评价的适应证. 腹部手术围手术期病死率:30%."
      }
      if (score > 9) {
        msg = "Child分级 C. 预期寿命:1-3 年. 腹部手术围手术期病死率:82%."
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

