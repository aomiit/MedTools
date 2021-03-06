//index.js
//获取应用实例
const app = getApp()

Page(
  {
    data: 
    {
      nDosefx:0,
      nDosetotal:0,
      objectArray: [
        { id: 1, alphabetavalue: 1, eqd2value: '', bedvalue: ''},
        { id: 2, alphabetavalue: 2, eqd2value: '', bedvalue: '' },
        { id: 3, alphabetavalue: 3, eqd2value: '', bedvalue: '' },
        { id: 4, alphabetavalue: 4, eqd2value: '', bedvalue: '' },
        { id: 5, alphabetavalue: 5, eqd2value: '', bedvalue: '' },
        { id: 6, alphabetavalue: 6, eqd2value: '', bedvalue: '' },
        { id: 7, alphabetavalue: 7, eqd2value: '', bedvalue: '' },
        { id: 8, alphabetavalue: 8, eqd2value: '', bedvalue: '' },
        { id: 9, alphabetavalue: 9, eqd2value: '', bedvalue: '' },
        { id: 10, alphabetavalue: 10, eqd2value: '', bedvalue: '' },
      ]
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
        path: '/pages/bed/index',
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

    ClearResult: function() {
      const length = this.data.objectArray.length
      for (let i = 0; i < length; ++i) {
        this.data.objectArray[i].eqd2value = "";
        this.data.objectArray[i].bedvalue = "";
      }

      this.setData({
        objectArray: this.data.objectArray
      })
    },

    DosefxInput: function (e) {
      this.ClearResult()

      this.setData({
        nDosefx: e.detail.value
      })
    },

    DosetotalInput: function (e) {
      this.ClearResult()

      this.setData({
        nDosetotal: e.detail.value
      })
    },

    AlphaBetaInput: function (e) {      
      this.data.objectArray[parseInt(e.currentTarget.id) - 1].alphabetavalue = e.detail.value
      this.setData({
        objectArray: this.data.objectArray
      })
      this.ClearResult()
    },

    EQD2: function (e)
    {
      var Dosefx = this.data.nDosefx;
      Dosefx = Dosefx.replace(/,/g, '.');
      Dosefx = parseFloat(Dosefx);
      var Dosetotal = this.data.nDosetotal;
      Dosetotal = Dosetotal.replace(/,/g, '.');
      Dosetotal = parseFloat(Dosetotal);
      
      const length = this.data.objectArray.length
      for (let i = 0; i < length; ++i)
      {
        var alphabetaA = parseFloat(this.data.objectArray[i].alphabetavalue);

        var EQD2A = Dosetotal * ((Dosefx + alphabetaA) / (2 + alphabetaA));
        EQD2A = (Math.round(EQD2A * 100) / 100);
        var BEDA = Dosetotal * ((Dosefx + alphabetaA) / (0 + alphabetaA));
        BEDA = (Math.round(BEDA * 100) / 100);

        this.data.objectArray[i].eqd2value = String(EQD2A);
        this.data.objectArray[i].bedvalue = String(BEDA);
      }

      this.setData({
        objectArray: this.data.objectArray
      })
    },

     //事件处理函数
    bindViewTap: function()
    {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },

    formSubmit: function (e)
    {
      //console.log('form发生了submit事件，携带数据为：', e.detail.value)
      this.EQD2(e)
    },

    onLoad: function () 
    {
      this.setData({
        objectArray: this.data.objectArray
      })      
   },

  }
)
