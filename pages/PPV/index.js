//获取应用实例
var app = getApp();

Page({
  data: { 
    hbl:null,
    mgx:null,    
    tyx:null,   

    zyx:0,
    jyx:0,
    zyingx:0,
    jyingx:0,
    yxycz:0,
    yingxycz:0,
    yxsrb:0,
    yingxsrb:0,
    jyqjlbzb:0,
    jyhyxlbzb:0,
    jyhyxl:0,
    jyhyingxlbzb:0,
    jyhyingxl:0,
    jyxl:0,
    jyingxl:0,
    ztzqd:0,

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
      path: '/pages/PPV/index',
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

  onLXX: function (ev) {
    var iLXX= ev.detail.value;
    this.setData({
      lxx: iLXX
    })
  },

  onMGX: function (ev) {
    var iMGX = ev.detail.value;
    this.setData({
      mgx: iMGX
    })
  },

  onTYX: function (ev) {
    var iTYX = ev.detail.value;
    this.setData({
      tyx: iTYX
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      hbl: null,
      mgx: null,
      tyx: null,
    })
  },

  calculate: function () {
    let lxx = this.data['lxx']
    let mgx = this.data['mgx']
    let tyx = this.data['tyx']

    if (lxx == '') {
      wx.showToast({
        title: '输入流行性',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (mgx == '') {
      wx.showToast({
        title: '输入敏感性',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (tyx == '') {
      wx.showToast({
        title: '输入特异性',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else
    {
      if (lxx < 0 || lxx > 100 || mgx < 0 || mgx > 100 || tyx < 0 || tyx > 100) {
        wx.showToast({
          title: '数值不合法',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }    

      lxx = lxx/100;
      mgx = mgx/100;
      tyx=tyx/100;

      var ppv = 100 * (lxx * mgx) / (lxx * mgx + ((1 - lxx) * (1 - tyx)));
            
      this.setData({
        ppv: ppv.toFixed(3),       
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.lxx || !data.tyx || !data.mgx) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content:'您有选项未填写',
      })
      return false;
    }  

    this.calculate();
  },
});

