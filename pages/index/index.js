//获取应用实例
const app = getApp();
const updatetemplateID = "sNRVmlcjkeQzrK90XaUQNibSnn5fL8dGHovT7yNinkM";

Page({
  data: {
    objectArray: app.globalData.objectArray,
    listGroup: app.globalData.listGroup,

    isAccept: true,// 防止静态先显现出来，你也可以添加loading判断
    openid: '' // 当前用户openid

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

    //this.getOpenid();
  },

  getOpenid: function () {
    let that = this;
    wx.showLoading({
      title: '数据加载中',
    })
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.OPENID)
        var openid = res.result.OPENID;
        that.setData({
          openid: openid
        }, () => {
          // 检测用户是否已经订阅
          this.checkIsAccept(openid)
        })
      }
    })
  },

  checkIsAccept: function (id) {
    let that = this;
    db.collection('notices').where({ _openid: id }).get({
      success(res) {
        if (res.data.length = 0) {
          that.setData({
            isAccept: true
          })
        }
      },
      fail(res) {
        console.log("请求失败", res);
        that.fetchList();
      }
    })
  },

  subscriptionNotice: function () {
    wx.vibrateShort();
    let that = this;
    let id = updatetemplateID; // 订阅消息模版id
    if (wx.requestSubscribeMessage) {
      wx.requestSubscribeMessage({
        tmplIds: [id],
        success(res) {
          if (res[id] == 'accept') {
            //用户同意了订阅，添加进数据库
            that.addAccept(that.data.openid)
          } else {
            //用户拒绝了订阅或当前游戏被禁用订阅消息
            wx.showToast({
              title: '订阅失败'
            })
          }
        },
        fail(res) {
          console.log(res)
        },
        complete(res) {
          console.log(res)
        }
      })
    } else {
      // 兼容处理
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  // 用户点击订阅添加到数据库
  addAccept: function (_id) {
    db.collection('notices')
      .add({
        data: {
          id: _id
        }
      })
      .then((res) => {
        console.log('入notices库成功', res);
        this.setData({
          isAccept: true
        }, () => {
          wx.showToast({
            title: '订阅成功'
          })
        })
      })
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