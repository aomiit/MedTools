//获取应用实例
var app = getApp();

Page({
  data: {
    iSex:'Male',
    iAdult:'Adult',
    iHeight: null,
    iWeight:null,  
    iMedci:0,
    iBS:0,
    iDOSE:0,
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
      path: '/pages/bmr/index',
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
      key: 'iHeight',
      success: function (res) {
        let iHeight = res.data;
        that.setData({
          iHeight: iHeight,
          }) 
      }
    });

    wx.getStorage({
      key: 'iSex',
      success: function (res) {
        let iSex = res.data;
        that.setData({
          iSex: iSex,
        })
      }
    });

    wx.getStorage({
      key: 'iWeight',
      success: function (res) {
        let iWeight = res.data;
        that.setData({
          iWeight: iWeight,
        })
      }
    });

    wx.getStorage({
      key: 'iAdult',
      success: function (res) {
        let iAdult = res.data;
        that.setData({
          iAdult: iAdult,
        })
      }
    })
  },

  AdultradioChange: function (e) {
    var iAdult = e.detail.value;
    this.setData({
      iAdult: iAdult
    })
  },

  SexradioChange: function(e)
  {
    var iSex = e.detail.value;
    this.setData({
      iSex: iSex
    })
  },

  oniHeight: function (ev) {
    var iHeight = (ev.detail.value);
    this.setData({
      iHeight: iHeight
    })
  },

  //体重
  oniWeight: function (ev) {
    var num = (ev.detail.value);
    this.setData({
      iWeight: num
    })
  },

  oniMedci: function (ev) {
    var num = (ev.detail.value);
    this.setData({
      iMedci: num
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iWeight: null,
      iHeight: null,
      iDOSE: null
    })
  },

  calculate: function () {
    let iSex = this.data['iSex']
    let h = this.data['iHeight']
    let w = this.data['iWeight']
    let iAdult = this.data['iAdult']
    let im = this.data['iMedci']
    var h2 = 0.0;
    var w2 = 0.0;
    var x = 0.0;

    if (h == '') {
      wx.showToast({
        title: '输入身高',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (w == '') {
      wx.showToast({
        title: '输入体重',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {
      if (iAdult == "Adult") {
        if (iSex == "Male") {
          h2 = 0.00607;
          w2 = 0.0127;
          x = 0.0698; 
        }
        else if (iSex == "Female") {
          h2 = 0.00586;
          w2 = 0.0126;
          x = 0.0461; 
        }
        else {
          wx.showToast({
            title: '选择性别',
            icon: 'failed',
            duration: 2000
          });
          return false;
        }
      }
      else if (iAdult == "NoiAdult") {
        h2 = 0.0061;
        w2 = 0.0128;
        x = 0.1529;     
      }
      else {
        wx.showToast({
          title: '选择人群',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      h = parseFloat(h);
      w = parseFloat(w);

      if (h <= 0) {
        wx.showToast({
          title: '身高必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      else if (w <= 0) {
        wx.showToast({
          title: '体重必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      var r1 = h * h2 + w * w2 - x;
      var r2 = 1.0 * r1 * im;

      this.setData({
        iBS: r1.toFixed(2),
        iDOSE: r2.toFixed(2)
      })
    }
  },

  onCompute: function () {
    let data = this.data;

    if (!data.iSex || !data.iWeight || !data.iHeight || !data.iAdult) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '您有选项未填写',
      })
      return false;
    }
   
    wx.setStorage({
      key: "iHeight",
      data: data.iHeight
    })
    wx.setStorage({
      key: "iWeight",
      data: data.iWeight
    })
    wx.setStorage({
      key: "iSex",
      data: data.iSex
    })
    wx.setStorage({
      key: "iAdult",
      data: data.iAdult
    })

    this.calculate();
  },
});

