//获取应用实例
var app = getApp();

Page({
  data: {
    iRlHb: null,
    iWeight:null,
    iScHb:null,    
    iFe:0,
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
      path: '/pages/fe/index',
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

  onShow: function () {
    let that = this;  
    wx.getStorage({
      key: 'iWeight',
      success: function (res) {
        let iWeight = res.data;
        that.setData({
          iWeight: iWeight,
        })
      }
    })    
  },

  oniScHb: function (ev) {
    var iScHb = (ev.detail.value);
    this.setData({
      iScHb: iScHb
    })
  },

  oniRlHb: function (ev) {
    var iRlHb = (ev.detail.value);
    this.setData({
      iRlHb: iRlHb
    })
  },

  //体重
  oniWeight: function (ev) {
    var iWeight = (ev.detail.value);
    this.setData({
      iWeight: iWeight
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iWeight: null,
      iScHb: null,
      iRlHb: null,
    })
  },

  calculate: function () {
    let iWeight = this.data['iWeight']
    let iScHb = this.data['iScHb']
    let iRlHb = this.data['iRlHb']

    var fSexfactor = 0.0;
    var fNa = 0.0;

    if (iScHb == '') {
      wx.showToast({
        title: '请输入Hb目标值',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (iRlHb == '') {
      wx.showToast({
        title: '请输入Hb实际值',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {           
      iWeight = parseFloat(iWeight);

      if (iWeight <= 0) {
        wx.showToast({
          title: '体重必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      var num2 = parseFloat(iScHb); 
      var num3 = parseFloat(iRlHb);

      var num = iWeight * 10//贮存铁量
      num = num > 700 ? 700 : num;//贮存铁量大于700时，只能算700mg

      var r1 = num + (num2 - num3) * iWeight * 0.238;

      if (r1 < 0) {
        wx.showToast({
          title: '您输入的数值不合法',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }   

      this.setData({
        iFe: r1.toFixed(0),
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.iScHb || !data.iWeight || !data.iRlHb) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content:'您有选项未填写',
      })
      return false;
    }
   
    wx.setStorage({
      key: "iWeight",
      data: data.iWeight
    })

    this.calculate();
  },
});

