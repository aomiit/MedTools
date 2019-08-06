//获取应用实例
var app = getApp();

// 在页面中定义激励视频广告
//let videoAd = null

Page({
  data: {
    objectArray: app.globalData.objectArray,
  },
  onShareAppMessage: (res) => {
    if (res.from === 'button') {
      console.log("来自转发按钮");
      console.log(res.target);
    }
    else {
      console.log("来自转发菜单")
    }
    
    // videoAd.show()
    // .catch (() => {
    //   videoAd.load()
    //     .then(() => videoAd.show())
    //     .catch(err => {
    //       console.log('激励视频 广告显示失败')
    //     })
    // })

    return {
      title: '好用的小程序分享给您!',
      path: '/pages/me/index',
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

    let that = this;
    app.getAppConfig(function (config) {     
    });


  //   // 在页面onLoad回调事件中创建激励视频广告实例
  //   if (wx.createRewardedVideoAd) {
  //     videoAd = wx.createRewardedVideoAd({
  //       adUnitId: 'adunit-bfb3cea120a60cc0'
  //     })
  //     videoAd.onLoad(() => { })
  //     videoAd.onError((err) => { })
  //     videoAd.onClose((res) => { })
  //   }

  //   // 用户触发广告后，显示激励视频广告
  //   if (videoAd) {
  //     videoAd.show().catch(() => {
  //       // 失败重试
  //       videoAd.load()
  //         .then(() => videoAd.show())
  //         .catch(err => {
  //           console.log('激励视频 广告显示失败')
  //         })
  //     })
  //   }
   },

  onTabItemTap(item) {
    this.setData({
      objectArray: app.globalData.objectArray
    })
  },
})