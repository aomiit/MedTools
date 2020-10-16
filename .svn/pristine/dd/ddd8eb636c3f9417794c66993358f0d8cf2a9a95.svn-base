//获取应用实例
var app = getApp();

const iAUCs = []

for (let i = 3; i <= 8; i++) {
  var lName = '          ' + i + '          '
  let height = { name: lName, value: i }
  iAUCs.push(height)
}

Page({
  data: {
    iAUCs: iAUCs,
    iSex:'Male',
    iType:'Mol',
    iAge: null,
    iWeight:null,
    iSC:null,    
    iAUC:null,
    iGFR:0,
    iCPD:0,    
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
      path: '/pages/carb/index',
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
      key: 'iAge',
      success: function (res) {
        let iAge = res.data;
        that.setData({
            iAge: iAge,
          }) 
      }
    })
    wx.getStorage({
      key: 'iWeight',
      success: function (res) {
        let iWeight = res.data;
        that.setData({
          iWeight: iWeight,
        })
      }
    })

    wx.getStorage({
      key: 'iSC',
      success: function (res) {
        let iSC = res.data;
        that.setData({
          iSC: iSC,
        })
      }
    })

    wx.getStorage({
      key: 'iAUC',
      success: function (res) {
        let iAUC = res.data;
        that.setData({
          iAUC: iAUC,
        })
      }
    })
    
  },

  SexradioChange: function(e)
  {
    var iSex = e.detail.value;
    this.setData({
      iSex: iSex
    })
  },

  TypeChange: function (e) {
    var iType = e.detail.value;
    this.setData({
      iType: iType
    })
  },

  iAUCChange: function (e) {
    this.setData({
      iAUC: e.detail.value
    })
  },

  oniAge: function (ev) {
    var iAge = parseFloat(ev.detail.value);
    this.setData({
      iAge: iAge
    })
  },

  oniSC: function (ev) {
    var iSC = ev.detail.value;
    this.setData({
      iSC: iSC
    })
  },

  //体重
  oniWeight: function (ev) {
    var iWeight = ev.detail.value;
    this.setData({
      iWeight: iWeight
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iWeight: null,
      iAge: null,
      iAUC: null,
      iSC:null,
    })
  },

  auc_dose: function () {
    let iSex = this.data['iSex']
    let a = this.data['iAge']
    let w = this.data['iWeight']
    let sc = this.data['iSC']
    let iType = this.data['iType']
    let ta = iAUCs[this.data['iAUC']]['value']

    if (a == '') {
      wx.showToast({
        title: '输入年龄',
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

    else if (sc == '') {
      wx.showToast({
        title: '输入血肌酐',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (ta == '') {
      wx.showToast({
        title: '输入目标AUC',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {
      if (iSex == "Male") {
        var mf = 1;
      }
      else if (iSex == "Female") {
        var mf = 0.85;
      }
      else {
        wx.showToast({
          title: '选择性别',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      var weight = w;
      a = parseFloat(a);
      w = parseFloat(w);
      sc = parseFloat(sc);
      ta = parseFloat(ta);

      if (a <= 0) {
        wx.showToast({
          title: '年龄必须大于零',
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
      else if (sc <= 0) {
        wx.showToast({
          title: '血肌酐值必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      else if (ta < 3 || ta > 8) {
        wx.showToast({
          title: 'AUC应为3-8',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      
      var r1 = 0;

      if (iType == "Mol")
      {
        r1 = (mf * ((140 - a) / (sc/88.41)) * (weight /72));
      }
      else
      {
        r1 = (mf * ((140 - a) / (sc)) * (weight / 72));
      }

      var r2 = (ta * (r1 + 25));

      this.setData({
        iGFR: r1.toFixed(0),
        iCPD: r2.toFixed(0)
      })
    }
  },

  onCompute: function () {
    let data = this.data;

    if (!data.iSC || !data.iWeight || !data.iAge || !data.iAUC) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '您有选项未填写',
      })
      return false;
    }
   
    wx.setStorage({
      key: "iAge",
      data: data.iAge
    })
    wx.setStorage({
      key: "iWeight",
      data: data.iWeight
    })
    wx.setStorage({
      key: "iSC",
      data: data.iSC
    })
    wx.setStorage({
      key: "iAUC",
      data: data.iAUC
    })

    this.auc_dose();
  },
});

