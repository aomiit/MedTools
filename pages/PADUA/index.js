//获取应用实例
var app = getApp();

Page({
  data: {  
    iScore:0,
    t1:0,
    t2: 0,
    t3: 0,
    t4: 0,
    t5: 0,
    t6: 0,

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
      path: '/pages/PADUA/index',
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

  T1radioChange: function (e) {
    var t1 = e.detail.value;
    console.log(t1) 
    this.setData({
      t1: t1
    })

    this.sumall();
  },

  T2radioChange: function (e) {
    var t2 = e.detail.value;
    this.setData({
      t2: t2
    })

    this.sumall();
  },
  T3radioChange: function (e) {
    var t3 = e.detail.value;
    this.setData({
      t3: t3
    })

    this.sumall();
  },
  T4radioChange: function (e) {
    var t4 = e.detail.value;
    this.setData({
      t4: t4
    })

    this.sumall();
  },
  T5radioChange: function (e) {
    var t5 = e.detail.value;
    this.setData({
      t5: t5
    })

    this.sumall();
  },
  T6radioChange: function (e) {
    var t6 = e.detail.value;
    this.setData({
      t6: t6
    })

    this.sumall();
  },

  sumall: function () {
    let t1 = parseInt(this.data['t1']) 
    let t2 = parseInt(this.data['t2']) 
    let t3 = parseInt(this.data['t3']) 
    let t4 = parseInt(this.data['t4']) 
    let t5 = parseInt(this.data['t5']) 
    let t6 = parseInt(this.data['t6']) 

    let value = t1+t2+t3+t4+t5+t6;
    
    console.log(value) 
    var msg = null;

    if (value < 8) 
    { 
      msg = "低度复杂性" 
    } 
    else if (value > 7 && value < 10) 
    { 
      msg = "中度复杂性" 
    } 
    else if (value > 10)
    { 
      msg = "高度复杂性" 
    } 

    this.setData({
      iScore: value,
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

