//获取应用实例
var app = getApp();

Page({
  data: {
    iSex:'Male',
    iAge:null,
    iHeight: null,
    iWeight:null,  
    iWaist:null,
    iSP:null,
    iHis:0,

    iscore:0,
    icontent:null,

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
      title: '糖尿病风险评分小程序 分享给您!',
      path: '/pages/diab/index',
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

  //腰围
  oniWaist: function(ev) {
    var num = ev.detail.value;
    this.setData({
      iWaist: num
    })
  }, 

  //收缩压
  oniSP: function(ev) {
    var num = ev.detail.value;
    this.setData({
      iSP: num
    })
  },

  //家族史
  iHisradioChange: function (ev) {
    var num = ev.detail.value;
    this.setData({
      iHis: num
    })
  },

  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iSex: 'Male',
      iAge: null,
      iHeight: null,
      iWeight: null,
      iWaist: null,
      iSP: null,
      iHis: 0,
      iscore: 0,
      icontent: null
    })
  },

  calculate: function () {
    let iSex = this.data['iSex']
    let h = this.data['iHeight']
    let w = this.data['iWeight']
    let iAge = this.data['iAge']
    let iWaist = this.data['iWaist']
    let iSP = this.data['iSP']
    let iHis = this.data['iHis']    

    var a3 = 0;
    var a4 = 0;

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
    else if (iWaist == null) {
      wx.showToast({
        title: '输入腰围',
        icon: 'failed',
        duration: 2000
      });
      return false;
    } 
    else if (iSP == null) {
      wx.showToast({
        title: '输入收缩压',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }   
    else if (iHis == null) {
      wx.showToast({
        title: '选择家族史',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }   
    else {     
      if (iSex == "Male") {
        a3 = 2;
        if (iWaist < 75) {
          a4 = 0;
        }
        else if (iWaist >= 75 && iWaist < 80) {
          a4 = 3;
        }
        else if (iWaist >= 80 && iWaist < 85) {
          a4 = 5;
        }
        else if (iWaist >= 85 && iWaist < 90) {
          a4 = 7;
        }
        else if (iWaist >= 90 && iWaist < 95) {
          a4 = 8;
        }
        else if (iWaist >= 95) {
          a4 = 10;
        }
      }
      else if (iSex == "Female") {
        a3 = 0;
        if (iWaist < 70) {
          a4 = 0;
        }
        else if (iWaist >= 70 && iWaist < 75) {
          a4 = 3;
        }
        else if (iWaist >= 75 && iWaist < 80) {
          a4 = 5;
        }
        else if (iWaist >= 80 && iWaist < 85) {
          a4 = 7;
        }
        else if (iWaist >= 85 && iWaist < 90) {
          a4 = 8;
        }
        else if (iWaist >= 90) {
          a4 = 10;
        }        
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

      var a1 = 0;
      if (iAge >= 20 && iAge < 25)
      {
        a1 = 0;
      }
      else if (iAge >= 25 && iAge < 35) {
        a1 = 4;
      }
      else if (iAge >= 35 && iAge < 40) {
        a1 = 8;
      }
      else if (iAge >= 40 && iAge < 45) {
        a1 = 11;
      }
      else if (iAge >= 45 && iAge < 50) {
        a1 = 12;
      }
      else if (iAge >= 50 && iAge < 55) {
        a1 = 13;
      }
      else if (iAge >= 55 && iAge < 60) {
        a1 = 15;
      }
      else if (iAge >= 60 && iAge < 65) {
        a1 = 16;
      } 
      else if (iAge >= 65 && iAge < 75) {
        a1 = 18;
      }

      var lBMI = w / ((h / 100) * (h / 100));
      lBMI = lBMI.toFixed(1);
      var a2 = 0;

      if (lBMI < 22) {
        a2 =  0;
      }
      else if (22 <= lBMI && lBMI < 24) {
        a2 = 1;       
      }
      else if (24 <= lBMI && lBMI < 30) {
        a2 = 3;     
      }
      else if (lBMI >= 30) {
        a2 = 5;      
      }
      
      var a5 = Number(iHis);    

      var a6 = 0;

      if (iSP < 110) {
        a6 = 0;
      }
      else if (110 <= iSP && iSP < 120) {
        a6 = 1;
      }
      else if (120 <= iSP && iSP < 130) {
        a6 = 3;
      }
      else if (130 <= iSP && iSP < 140) {
        a6 = 6;
      }
      else if (140 <= iSP && iSP < 150) {
        a6 = 7;
      }
      else if (150 <= iSP && iSP < 160) {
        a6 = 8;
      }
      else if (160 <= iSP) {
        a6 = 10;
      }

      var score = a1+a2+a3+a4+a5+a6;

      var msg = null;

      if (score < 25) { 
        msg = "低风险。" 
      } 
      
      if (score >= 25) { 
        msg = "有糖尿病风险。建议您去医院进行检查，以确定是否患有糖尿病。" 
      }

      this.setData({
        iscore: score,
        icontent: msg,
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.iWeight || !data.iHeight || !data.iAge || !data.iWaist || !data.iSP) {
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

