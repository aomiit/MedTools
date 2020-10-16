//获取应用实例
var app = getApp();

Page({
  data: {
    ialb_2: null,
    iCa:null,
    ialb_1:null,    
    iCalCa:0,
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
      path: '/pages/lca/index',
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

  onShow: function () {
    let that = this;  
    wx.getStorage({
      key: 'iCa',
      success: function (res) {
        let iCa = res.data;
        that.setData({
          iCa: iCa,
        })
      }
    })    
  },

  onialb_1: function (ev) {
    var ialb_1 = (ev.detail.value);
    this.setData({
      ialb_1: ialb_1
    })
  },

  onialb_2: function (ev) {
    var ialb_2 = (ev.detail.value);
    this.setData({
      ialb_2: ialb_2
    })
  },

  oniCa: function (ev) {
    var iCa = (ev.detail.value);
    this.setData({
      iCa: iCa
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iCa: null,
      ialb_1: null,
      ialb_2: null,
    })
  },

  calculate: function () {
    let iCa = this.data['iCa']
    let ialb_1 = this.data['ialb_1']
    let ialb_2 = this.data['ialb_2']
    let pref = "si";

    var fSexfactor = 0.0;
    var fNa = 0.0;

    if (ialb_1 == '') {
      wx.showToast({
        title: '请输入正常白蛋白水平',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (ialb_2 == '') {
      wx.showToast({
        title: '请输入患者白蛋白水平',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {           
      iCa = parseFloat(iCa);

      if (iCa <= 0) {
        wx.showToast({
          title: '血清钙浓度大于0',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      var b = parseFloat(ialb_1); 
      var c = parseFloat(ialb_2);

      var a = iCa;
      b = ialb_1;
      c = ialb_2;
      var ca_conv;
      var alb_conv;

      if (pref == "si") {
        ca_conv = 4;
        alb_conv = .1
      }
      if (pref == "us") {
        ca_conv = 1;
        alb_conv = 1
      }
      a *= ca_conv;
      b *= alb_conv;
      c *= alb_conv;

      var r1 = (.8 * (b - c) + a) / ca_conv; 

      this.setData({
        iCalCa: r1.toFixed(1),
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.ialb_1 || !data.iCa || !data.ialb_2) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content:'您有选项未填写',
      })
      return false;
    }
   
    wx.setStorage({
      key: "iCa",
      data: data.iCa
    })

    this.calculate();
  },
});

