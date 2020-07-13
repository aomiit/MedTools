//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0,0,0,0,0,0,0,0],

    gitems:[
      {
        name: '基线红细胞压积(%)',
        items: [
          { name: '<31', value: 9.0, checked: false },
          { name: '31～33.9', value: 7.0, checked: false },
          { name: '34～36.9', value: 3.0, checked: false },
          { name: '37～39.9', value: 2.0, checked: false },
          { name: '≥ 40', value: 0.0, checked: false },
        ]
      },
      {
        name: '肌酐清除率(mL/min)',
        items: [
          { name: '≤15', value: 39.0, checked: false },
          { name: '16～30', value: 35.0, checked: false },
          { name: '31～60', value: 28.0, checked: false },
          { name: '61～90', value: 17.0, checked: false },
          { name: '91～120', value: 7.0, checked: false },
          { name: '≥121', value: 0.0, checked: false },
        ]
      },
      {
        name: '心率(次/分)',
        items: [
          { name: '≤70', value: 0.0, checked: false },
          { name: '71～80', value: 1.0, checked: false },
          { name: '81～90', value: 3.0, checked: false },
          { name: '91～100', value: 6.0, checked: false },
          { name: '101～110', value: 8.0, checked: false },
          { name: '111～120', value: 10.0, checked: false },
          { name: '≥121', value: 11.0, checked: false },        ]
      },
      {
        name: '收缩压(mmHg)',
        items: [
          { name: '≤90', value: 10.0, checked: false },
          { name: '91～100', value: 8.0, checked: false },
          { name: '101～120', value: 5.0, checked: false },
          { name: '121～180', value: 1.0, checked: false },
          { name: '181～200', value: 3.0, checked: false },
          { name: '≥201', value: 5.0, checked: false },        ]
      },
      {
        name: '性别',
        items: [
          { name: '男', value: 0.0, checked: false },
          { name: '女', value: 8.0, checked: false },
        ]
      },
      {
        name: '糖尿病',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 6.0, checked: false },
        ]
      },
      {
        name: '心力衰竭体征',
        items: [
          { name: '否', value: 0.0, checked: false },
          { name: '是', value: 7.0, checked: false },
        ]
      },
      {
        name: '外周血管疾病或卒中',
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
      path: '/pages/CRUSADE/index',
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

      if (score < 21) {
        msg = "危险等级：极低危,出血概率：3.1%"
      }
      if (score > 20 && score < 31) {
        msg = "危险等级：低危,出血概率：5.5%"
      }
      if (score > 30 && score < 41) {
        msg = "危险等级：中危,出血概率：8.6%"
      }
      if (score > 40 && score < 51) {
        msg = "危险等级：高危,出血概率：11.9%"
      }
      if (score > 50) {
        msg = "危险等级：极高危,出血概率：19.5%"
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

