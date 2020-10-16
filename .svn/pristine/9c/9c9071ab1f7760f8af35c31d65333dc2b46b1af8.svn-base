//获取应用实例
var app = getApp();

Page({
  data: {
    iSex:'Male',
    iAdult: 'Adult',
    iFluidType: "p0d9",    
    iRlNA: null,
    iWeight:null,
    
    iFluidd5:0,
    iFluid1:0,    
    iFluid2: 0,   

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
      path: '/pages/hcr/index',
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

  AdultradioChange: function (e) {
    var iAdult = e.detail.value;
    this.setData({
      iAdult: iAdult
    })
  },

  FluidTyperadioChange: function (e) {
    var iFluidType = e.detail.value;
    this.setData({
      iFluidType: iFluidType
    })
  },

  oniRlNA: function (ev) {
    var iRlNA = (ev.detail.value);
    this.setData({
      iRlNA: iRlNA
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
      iRlNA: null,
    })
  },

  calculate: function () {
    let iSex = this.data['iSex']
    let iWeight = this.data['iWeight']
    let iRlNA = this.data['iRlNA']
    let iAdult = this.data['iAdult']
    let iFluidType = this.data['iFluidType']

    if (iWeight == '') {
      wx.showToast({
        title: '请输入体重',
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
      console.log(iSex) 
          
      let fNa = parseFloat(iRlNA);

      if (fNa <= 0) {
        wx.showToast({
          title: '数值非法',
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

      let a = iWeight;
      let b = fNa;
      var tbw = 0.0, totalna = 0.0;

      if (iAdult == "Older")  {
        if (iSex == "Female") {
          tbw = .45
        } else {
          tbw = .5
        }
      }
      if (iAdult == "Adult")  {
        if (iSex == "Female") {
          tbw = .5
        } else {
          tbw = .6
        }
      }
      if (iAdult == "NoAdult") {
        tbw = .6
      }

      tbw = tbw * a;
      if (iFluidType == "p3") {
        totalna = 513
      }
      if (iFluidType == "p0d9") {
        totalna = 154
      }
      if (iFluidType == "lg") {
        totalna = 130
      }
      if (iFluidType == "d5lg") {
        totalna = 77
      }

      if (b > totalna) {
        wx.showToast({
          title: "数值非法!",
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      let value = (totalna - b) / (tbw + 1);
      let value1 = 12 / value;
      value1 = value1 / 24;
      value1 = value1 * 1e3;
      let value2 = 24 / value;
      value2 = value2 / 24;
      value2 = value2 * 1e3;
      let value3 = 48 / value;
      value3 = value3 / 24;
      value3 = value3 * 1e3;

      this.setData({
        iFluidd5: value1.toFixed(0),
        iFluid1: value2.toFixed(0),
        iFluid2: value3.toFixed(0),  
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.iFluidType || !data.iWeight || !data.iSex || !data.iRlNA || !data.iAdult) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content:'有选项未填写',
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

