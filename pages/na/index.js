//获取应用实例
var app = getApp();

Page({
  data: {
    iSex:'Male',
    iRlNA: null,
    iWeight:null,
    iScNA:null,    
    iNaCl:0,
    iSLYS:0,    
    i3PNaCl: 0,   
    i5PNaCl: 0,   
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
      path: '/pages/na/index',
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
      key: 'iSex',
      success: function (res) {
        let iSex = res.data;
        that.setData({
          iSex: iSex,
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
  },

  SexradioChange: function(e)
  {
    var iSex = e.detail.value;
    this.setData({
      iSex: iSex
    })
  },

  oniScNA: function (ev) {
    var iScNA = ev.detail.value;
    this.setData({
      iScNA: iScNA
    })
  },

  oniRlNA: function (ev) {
    var iRlNA = ev.detail.value;
    this.setData({
      iRlNA: iRlNA
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
      iScNA: null,
      iRlNA: null,
    })
  },

  calculate: function () {
    let iSex = this.data['iSex']
    let iWeight = this.data['iWeight']
    let iScNA = this.data['iScNA']
    let iRlNA = this.data['iRlNA']

    var fSexfactor = 0.0;
    var fNa = 0.0;

    if (iScNA == '') {
      wx.showToast({
        title: '输入目标血钠值',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (iRlNA == '') {
      wx.showToast({
        title: '输入实测血钠值',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {     
      if (iSex == "Male") {
        fSexfactor = 0.6;
      }
      else if (iSex == "Female") {
        fSexfactor = 0.5;
      }
      else {
        wx.showToast({
          title: '选择性别',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
           
      fNa = parseFloat(iScNA) - parseFloat(iRlNA);

      if (fNa <= 0) {
        wx.showToast({
          title: '数值不合法',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }    

      iWeight = parseFloat(iWeight);

      if (iWeight <= 0) {
        wx.showToast({
          title: '体重须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      var r4 = fSexfactor * fNa * iWeight;
      var r5 = r4 * 0.0585;
      var r6 = r5 / 0.009;
      var r7 = r5 / 0.03;
      var r8 = r5 / 0.05;

      console.log(r4)

      this.setData({
        iNaCl: r5.toFixed(2),
        iSLYS: r6.toFixed(2),
        i3PNaCl: r7.toFixed(2),
        i5PNaCl: r8.toFixed(2),
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.iScNA || !data.iWeight || !data.iSex || !data.iRlNA) {
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
    wx.setStorage({
      key: "iSex",
      data: data.iSex
    })

    this.calculate();
  },
});

