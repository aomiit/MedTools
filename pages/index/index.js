//获取应用实例
var app = getApp();

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
    return {
      title: '发现一个有用的小程序!',
      path: '/pages/index/index',
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
  },

  handleCollection: function(event) {

    var objectArray = this.data.objectArray;
    var id = event.target.id;

    let currentIndex = objectArray.findIndex(item => item.id == id)
    
    console.log(event.target.id);
    console.log(currentIndex);

    var postCollected = objectArray[currentIndex].collected;
    // //收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;

    objectArray[currentIndex].collected = postCollected;

    this.setData({
       objectArray: objectArray
     })

    app.globalData.objectArray = objectArray;
    console.log(postCollected);
    console.log(objectArray);

    //更新文章是否的缓存值
    wx.setStorageSync('posts_Collected', objectArray);

    //提示用户
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
  },

})