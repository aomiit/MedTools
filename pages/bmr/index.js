//获取应用实例
var app = getApp();

const iworkouts = [];

let item = { name:'极少运动', value: 1.2 };
iworkouts.push(item);
item = { name: '轻微运动', value: 1.375 };
iworkouts.push(item);
item = { name: '适中运动(每周3-5天)', value: 1.55 };
iworkouts.push(item);
item = { name: '较多运动(每周6-7天)', value: 1.725 };
iworkouts.push(item);
item = { name: '很多运动(每天两次,剧烈运动)', value: 1.9 };
iworkouts.push(item);

Page({
  data: {
    iworkouts: iworkouts,
    iSex:'Male',
    iAge:null,
    iHeight: null,
    iWeight:null,  
    iworkout:null,
    ibmr:0,
    ibmi:0,
    ineedca:0,
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
      key: 'iAge',
      success: function (res) {
        let iAge = res.data;
        that.setData({
          iAge: iAge,
        })
      }
    })
  },

  oniAge: function (ev) {
    var iAge = parseFloat(ev.detail.value);
    this.setData({
      iAge: iAge
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
    var iHeight = ev.detail.value;
    this.setData({
      iHeight: iHeight
    })
  },

  //体重
  oniWeight: function (ev) {
    var num = ev.detail.value;
    this.setData({
      iWeight: num
    })
  },

  iworkoutChange: function (e) {
    this.setData({
      iworkout: e.detail.value
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
    let iAge = this.data['iAge']
    let iworkout = this.data['iworkout']

    var a = 0.0;
    var b = 0.0;
    var c = 0.0;
    var d = 0.0;

    if (iAge == '') {
      wx.showToast({
        title: '输入年龄',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (h == '') {
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
    else if (iworkout == null) {
      wx.showToast({
        title: '选择活动量',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }  
    else {     
      if (iSex == "Male") {
        a = 66.5;
        b = 13.75;
        c = 5.003;
        d = 6.755;
      }
      else if (iSex == "Female") {
        a = 655.1;
        b = 9.563;
        c = 1.85;
        d = 4.676;
      }
      else {
        wx.showToast({
          title: '选择性别',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      h = parseFloat(h);
      w = parseFloat(w);
      iAge = parseFloat(iAge);
      var excersize = iworkouts[iworkout]['value'];

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
      else if (iAge <= 0) {
        wx.showToast({
          title: '年龄必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      var lBMI = w / ((h / 100) * (h / 100));
      lBMI = lBMI.toFixed(1);
      var sbmr;

      if (lBMI < 18.5) {
        sbmr =  "偏瘦";
      }
      else if (18.5 <= lBMI && lBMI <= 23.9) {
        sbmr = "正常";        
      }
      else if (23.9 < lBMI && lBMI <= 26.9) {
        sbmr = "偏胖";        
      }
      else if (26.9 < lBMI && lBMI <= 29.9) {
        sbmr = "肥胖";        
      }
      else if (29.9 < lBMI) {
        sbmr = "重度肥胖";      
      }

      sbmr = lBMI + ",体重:" + sbmr;

      var bmr = a + b * w + c * h - d * iAge ;
      var needca = bmr * excersize;

      this.setData({
        ibmr: bmr.toFixed(2),
        ineedca: needca.toFixed(2),
        ibmi: sbmr
      })
    }
  },

  onCompute: function () {
    let data = this.data;

    if (!data.iSex || !data.iWeight || !data.iHeight || !data.iAge) {
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
      key: "iAge",
      data: data.iAge
    })

    this.calculate();
  },
});

