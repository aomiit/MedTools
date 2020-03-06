// pages/PET-CT/PET-CT.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: null,
    smoke: 0,
    history: 0,
    size: 0,
    lobe: 0,
    spiculation: 0,
    avidity: 0,
    probability: ''
  },


  /**
* 下载文件并预览
*/
  preview: function (e) {
    wx.cloud.init();

    wx.cloud.downloadFile({
      fileID: "cloud://medkitcloud-qtwnr.6d65-medkitcloud-qtwnr-1259361915/PN.pdf",
      success: res => {
        // 返回临时文件路径
        // console.log(res.tempFilePath),
        wx.openDocument({
          filePath: res.tempFilePath,
        })
      },
      fail: err => {
        console.log('failed')
      }
    })
  },
  /**
   * 输入
   */

  ageInput: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  smokeInput: function (e) {
    this.setData({
      smoke: e.detail.value
    })
  },
  historyInput: function (e) {
    this.setData({
      history: e.detail.value
    })
  },
  sizeInput: function (e) {
    this.setData({
      size: e.detail.value
    })
  },
  lobeInput: function (e) {
    this.setData({
      lobe: e.detail.value
    })
  },
  spiculationInput: function (e) {
    this.setData({
      spiculation: e.detail.value
    })
  },
  avidityInput: function (e) {
    this.setData({
      avidity: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  calculation: function () {
    let age = this.data['age'];
    let smoke = this.data['smoke'];
    let history = this.data['history'];
    let size = this.data['size'];
    let spiculation = this.data['spiculation'];
    let lobe = this.data['lobe'];
    let avidity = this.data['avidity'];
    let probability = -6.8272 + 0.0391 * age + 0.7917 * smoke + 1.3388 * history + 0.1274 * size + 1.0407 * spiculation + 0.7838 * lobe;
    probability = 1 / (1 + Math.exp(-1 * probability));
    let probability2 = - 4.739 + 3.691 * probability;
    if (avidity == 1 ){
      probability2 += 2.322
    };
    if (avidity == 2){
      probability2 += 4.617
    };
    if (avidity == 3){
      probability2 += 4.771
    };
    probability2 = 100/(1 + Math.exp(-1 * probability2));
    this.setData({
      probability: probability2.toFixed(1) +'%'
    })
  }
})