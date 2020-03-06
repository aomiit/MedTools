//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: null,
    gender: 0,
    history: 0,
    emphysema: 0,
    nodule_size: 0,
    nodule_count: 0,
    nodule_type: 0,
    nodule_in_upper_lobe: 0,
    spiculation: 0,
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
* 下载文件并预览
*/
  preview: function (e) {
    wx.cloud.init();
    wx.cloud.downloadFile({
      fileID: "cloud://medkitcloud-qtwnr.6d65-medkitcloud-qtwnr-1259361915/nejmoa1214726.pdf",
      success: res => {
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
  genderInput: function (e) {
    this.setData({
      gender: e.detail.value
    })
  },
  historyInput: function (e) {
    this.setData({
      history: e.detail.value
    })
  },
  emphysemaInput: function (e) {
    this.setData({
      emphysema: e.detail.value
    })
  },
  nodule_sizeInput: function (e) {
    this.setData({
      nodule_size: e.detail.value
    })
  },
  nodule_countInput: function (e) {
    this.setData({
      nodule_count: e.detail.value
    })
  },
  nodule_typeInput: function (e) {
    this.setData({
      nodule_type: e.detail.value
    })
  },
  nodule_in_upper_lobeInput: function (e) {
    this.setData({
      nodule_in_upper_lobe: e.detail.value
    })
  },
  spiculationInput: function (e) {
    this.setData({
      spiculation: e.detail.value
    })
  },
  /**
   * 计算概率
   */
  calculate: function () {
    let result = 0;

    let { age, gender, history, emphysema, nodule_size, nodule_count, nodule_type, nodule_in_upper_lobe, spiculation, probility } = this.data;
    result = (age - 62) * 0.0286687 + gender * 0.6010727 + history * 0.296109 + emphysema * 0.2953112 + ((nodule_size / 10) ** 
    (-0.5) - 1.58113883) * (-5.385484) + (nodule_count - 4) * (-0.0824156) + nodule_in_upper_lobe * 0.6581383 
    + spiculation * 0.7729335 + (-6.78917);

    if (nodule_type == 0) 
    {
      result = result + (-0.1276173)
    };
    if (nodule_type == 1) 
    {
      result = result + 0.3769578
    };
    result = Math.exp(result)*100 / (1 + Math.exp(result));
    this.setData({
      probability: result.toFixed(1) + '%'
    })
  }
})