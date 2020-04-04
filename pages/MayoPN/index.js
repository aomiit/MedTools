//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Age: null,
    Smoker: 0,
    Cancer: 0,
    Nodule_Diameter: 0,
    Spiculation: 0,
    Upper_Lobe: 0,
    score:'',
    probability: ''
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
 
  /**
   * 输入
   */
  ageInput: function (e) {
    this.setData({
      Age: e.detail.value
    })
  },
  smokeInput: function (e) {
    this.setData({
      Smoker: e.detail.value
    })
  },
  historyInput: function (e) {
    this.setData({
      Cancer: e.detail.value
    })
  },
 
  nodule_sizeInput: function (e) {
    this.setData({
      Nodule_Diameter: e.detail.value
    })
  },
 

  nodule_in_upper_lobeInput: function (e) {
    this.setData({
      Upper_Lobe: e.detail.value
    })
  },
  spiculationInput: function (e) {
    this.setData({
      Spiculation: e.detail.value
    })
  },
  /**
   * 计算概率
   */
  calculate: function () {
    let result = 0;

    let { Age, Smoker, Cancer, Nodule_Diameter, Spiculation,Upper_Lobe} = this.data;
   
    let X = (0.0391 * Age) + (0.7917 * Smoker) + (1.3388 * Cancer) + (0.1274 * Nodule_Diameter) + (1.0407 * Spiculation) + (0.7838 * Upper_Lobe) - 6.8272;;


    result = Math.exp(X)*100 / (1 + Math.exp(X));
	
    this.setData({
	    score:X.toFixed(4),
      probability: result.toFixed(2) + '%'
    })
  }
})