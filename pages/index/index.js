//获取应用实例
var app = getApp();

Page({
  data: {
    objectArray: app.globalData.objectArray,
    listGroup: app.globalData.listGroup
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

  convertMyFavorite: function(){
    const listGroup = this.data.listGroup
    listGroup[0].ids.splice(0, listGroup[0].ids.length)

    const objectArray = this.data.objectArray;
    for (let i = 0, len = objectArray.length; i < len; ++i) {
      if (objectArray[i].collected) {

        listGroup[0].ids.splice(listGroup[0].ids.length, 0, i);
      }
    }

    console.log(listGroup[0].ids)

    /**
     * key和value名称一样时，可以省略
     * 
     * list:list=>list
     */
    this.setData({
      listGroup
    })
  },

  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
    
    let that = this;
    app.getAppConfig(function (config) {     
    });

    this.convertMyFavorite();
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
    });

    this.convertMyFavorite();
  },

  /**
   * 收缩核心代码
   */
  kindToggle(e) {
    const id = e.currentTarget.id
    const listGroup = this.data.listGroup
    for (let i = 0, len = listGroup.length; i < len; ++i) {
      if (listGroup[i].id === id) {
        listGroup[i].open = !listGroup[i].open
      } else {
        listGroup[i].open = false
      }
    }

    /**
     * key和value名称一样时，可以省略
     * 
     * list:list=>list
     */
    this.setData({
      listGroup
    })
  }  

})