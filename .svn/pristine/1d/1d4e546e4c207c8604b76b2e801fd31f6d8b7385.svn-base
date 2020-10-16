//获取应用实例
var app = getApp();

Page({
  data: {
    iRealWeight: null,
    iNormalWeight:null,
    iScHb:null,    
    iRisk:0,
	  iContent:null,    
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
      path: '/pages/NRI/index',
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
      key: 'iWeight',
      success: function (res) {
        let iNormalWeight = res.data;
        that.setData({
          iNormalWeight: iNormalWeight,
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

  oniRealWeight: function (ev) {
    var iRealWeight = (ev.detail.value);
    this.setData({
      iRealWeight: iRealWeight
    })
  },
  
  oniNormalWeight: function (ev) {
    var iNormalWeight = (ev.detail.value);
    this.setData({
      iNormalWeight: iNormalWeight
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iRealWeight: null,
	    iNormalWeight: null,
      iScHb: null,
      iContent: null,
    })
  },

  calculate: function () {
    let iRealWeight = this.data['iRealWeight']
    let iScHb = this.data['iScHb']
    let iNormalWeight = this.data['iNormalWeight']

    if (iScHb == '') {
      wx.showToast({
        title: '请输入Hb目标值',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {           
      iRealWeight = parseFloat(iRealWeight);

      if (iRealWeight <= 0) {
        wx.showToast({
          title: '体重必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
	  
	    iNormalWeight = parseFloat(iNormalWeight);

      if (iNormalWeight <= 0) {
        wx.showToast({
          title: '体重必须大于零',
          icon: 'failed',
          duration: 2000
        });
        return false;
      };
	  
      iScHb = parseFloat(iScHb); 

      console.log(iScHb)
      console.log(iRealWeight)
      console.log(iNormalWeight)

	    //NRI=(1.519×血白蛋白g/L)+(0.417×实际体重/平日体重×100)
	    let result = 1.519 * iScHb + 0.417 * iRealWeight / iNormalWeight * 100;
      result = result.toFixed(1);

	    var tmpResultInfo = "";
	    if (result < 83.5) {
	      tmpResultInfo = "高度风险（SR）";
	    }
	    else if (result >= 83.5 && result < 97.5) {
	      tmpResultInfo = "中度风险（MR）";
	    }
	    else if (result >= 97.5 && result <= 100) {
	      tmpResultInfo = "轻度风险";
	    }
	    else{
	      tmpResultInfo = "无风险";
      };
      
      console.log(result)

      this.setData({
        iRisk: result,
		    iContent: tmpResultInfo,
      })
    }
  },

  onCompute: function () {
    let data = this.data;
    if (!data.iScHb || !data.iNormalWeight || !data.iRealWeight) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content:'您有选项未填写',
      })
      return false;
    }
   
    wx.setStorage({
      key: "iNormalWeight",
      data: data.iNormalWeight
    })

    this.calculate();
  },
});

