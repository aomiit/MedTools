//获取应用实例
var app = getApp();

Page({
  data: { 
    hbl:0,
    mgx:0,    
    tyx:0,   

    zyx: null,
    jyx: null,
    zyingx: null,
    jyingx: null,

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
      path: '/pages/Bayes2/index',
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

  onZYX: function (ev) {
    var iZYX= ev.detail.value;
    this.setData({
      zyx: iZYX
    })
  },

  onJYX: function (ev) {
    var iJYX = ev.detail.value;
    this.setData({
      jyx: iJYX
    })
  },

  onZYINGX: function (ev) {
    var iZYINGX = ev.detail.value;
    this.setData({
      zyingx: iZYINGX
    })
  },

  onJYINGX: function (ev) {
    var iJYINGX = ev.detail.value;
    this.setData({
      jyingx: iJYINGX
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      zyx: null,
      jyx: null,
      zyingx: null,
      jyingx: null,
    })
  },

  calculate: function () {
    let zyx = this.data['zyx']
    let jyx = this.data['jyx']
    let zyingx = this.data['zyingx']
    let jyingx = this.data['jyingx']

    if (zyx == '') {
      wx.showToast({
        title: '输入真阳性',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (jyx == '') {
      wx.showToast({
        title: '输入假阳性',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (zyingx == '') {
      wx.showToast({
        title: '输入真阴性',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (jyingx == '') {
      wx.showToast({
        title: '输入假阴性',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else
    {
      if (zyx < 0 || zyx > 100 || jyx < 0 || jyx > 100 || zyingx < 0 || zyingx > 100 || jyingx < 0 || jyingx > 100) {
        wx.showToast({
          title: '数值不合法',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }    


      zyx = zyx / 100;
      jyx = jyx / 100;
      zyingx = zyingx / 100;
      jyingx = jyingx / 100;

      var hbl = (zyx + jyingx) / (zyx + zyingx + jyx + jyingx)
      var mgx = zyx / (zyx + jyingx);
      var tyx = zyingx / (zyingx + jyx);

      var yxycz = 100 * zyx / (zyx + jyx);
      var yingxycz = 100 * zyingx / (zyingx + jyingx);
      var yxsrb = mgx / (1 - tyx) ;
      var yingxsrb = (1 - mgx) / tyx ;
      var jyqjlbzb = hbl / (1 - hbl)
      var jyhyxlbzb = jyqjlbzb * yxsrb;
      var jyhyxl = jyhyxlbzb / (1 + jyhyxlbzb) ;
      var jyhyingxlbzb = jyqjlbzb * yingxsrb;
      var jyhyingxl = jyhyingxlbzb / (1 + jyhyingxlbzb);
      var jyxl = 100 * jyx / (jyx + zyingx);
      var jyingxl = 100 * jyingx / (zyx + jyingx) ;
      var ztzqd = 100 * (zyx + zyingx) ;

      zyx = zyx*100;
      jyx = jyx*100;
      zyingx = zyingx*100;
      jyingx = jyingx*100;
      yxsrb = yxsrb*100;
      yingxsrb = yingxsrb*100;
      jyqjlbzb = jyqjlbzb*100;
      jyhyxlbzb = jyhyxlbzb*100;
      jyhyxl = jyhyxl*100;
      jyhyingxlbzb = jyhyingxlbzb*100;
      jyhyingxl = jyhyingxl*100;

      hbl = hbl * 100;
      mgx = mgx * 100;
      tyx = tyx * 100;

      
      this.setData({
        hbl: hbl.toFixed(3),
        mgx: mgx.toFixed(3),
        tyx: tyx.toFixed(3),

        yxycz: yxycz.toFixed(3),
        yingxycz: yingxycz.toFixed(3),
        yxsrb: yxsrb.toFixed(3),
        yingxsrb: yingxsrb.toFixed(3),
        jyingx: jyingx.toFixed(3),
        jyqjlbzb: jyqjlbzb.toFixed(3),

        jyhyxlbzb: jyhyxlbzb.toFixed(3),

        jyhyxl: jyhyxl.toFixed(3),
        jyhyingxlbzb: jyhyingxlbzb.toFixed(3),
        jyhyingxl: jyhyingxl.toFixed(3),
        jyxl: jyxl.toFixed(3),
        jyingxl: jyingxl.toFixed(3),
        ztzqd: ztzqd.toFixed(3),
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.zyx || !data.jyx || !data.zyingx || !data.jyingx) {
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

