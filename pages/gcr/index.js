//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,

    iSex: 'Male',
    iAge: 0,

    t1:0,
    t2: 0,
    t3: 0,
    t4: 0,
    t5: 0,

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
      path: '/pages/gcr/index',
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

  oniAge: function (ev) {
    var iAge = parseFloat(ev.detail.value);
    this.setData({
      iAge: iAge
    })
    
    this.sumall();
  },

  SexradioChange: function (e) {
    var iSex = e.detail.value;
    this.setData({
      iSex: iSex
    })

    this.sumall();
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

  sumall: function () {
    let iSex = this.data['iSex']
    let a = this.data['iAge']

    if (a == '') {
      wx.showToast({
        title: '输入年龄',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {
      if (iSex == "Male") {
        var mf = 0;
      }
      else if (iSex == "Female") {
        var mf = 4;
      }
      else {
        wx.showToast({
          title: '选择性别',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      a = parseFloat(a);

      if (a <= 0) {
        wx.showToast({
          title: '年龄必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      var aScore = 0;
      if(a < 50)
      {
        aScore = 0;
      }
      else if(a>=50 && a <60)
      {
        aScore = 4;
      }
      else if (a >= 60 && a < 70)
      {
        aScore = 6;
      }
      else
      {
        aScore = 9;
      }


      let t1 = parseInt(this.data['t1']) 
      let t2 = parseInt(this.data['t2']) 
      let t3 = parseInt(this.data['t3']) 
      let t4 = parseInt(this.data['t4']) 
      let t5 = parseInt(this.data['t5']) 

      let score = t1 + t2 + t3 + t4 + t5 + mf + aScore;
      
      console.log(score) 
      var msg = null;

      if (score <= 11)
      { 
        msg = "低危,胃癌检出率为1.2%" 
      } 
      else if (score >= 12 && score <= 16) 
      { 
        msg = "中危,胃癌检出率为4.4%" 
      } 
      else if (score >= 17 && score <= 25) 
      {
         msg = "高危,胃癌检出率为12.3%" 
      } 
     
      this.setData({
        iScore: score,
        iContent: msg,
      })
    }
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

