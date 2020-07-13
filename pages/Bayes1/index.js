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
      path: '/pages/Bayes1/index',
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

  onHBL: function (ev) {
    var iHBL= ev.detail.value;
    this.setData({
      hbl: iHBL
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
    let hbl = this.data['hbl']
    let mgx = this.data['mgx']
    let tyx = this.data['tyx']

    if (hbl == '') {
      wx.showToast({
        title: '输入患病率',
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
      if (hbl < 0 || hbl > 100 || mgx < 0 || mgx > 100 || tyx < 0 || tyx > 100) {
        wx.showToast({
          title: '数值不合法',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }    

      hbl = hbl/100;
      mgx = mgx/100;
      tyx=tyx/100;

      var zyx = mgx*hbl;
      var jyx = (1 - tyx) * (1 - hbl);
      var zyingx = tyx * (1 - hbl);
      var jyingx = (1 - mgx) * hbl 

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

      
      this.setData({
        zyx: zyx.toFixed(3),
        jyx: jyx.toFixed(3),
        zyingx: zyingx.toFixed(3),
        jyingx: jyingx.toFixed(3),
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
    if (!data.hbl || !data.tyx || !data.mgx) {
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

