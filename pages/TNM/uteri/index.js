//获取应用实例
var app = getApp();

var tnmdata = require('tnm.js').tnm[0];
var activetnmcontent = tnmdata['th8'];

const iTs = []

if (activetnmcontent.hasOwnProperty("orderedKeys")) {
  //展示T
  for (var x in activetnmcontent.orderedKeys['T']) {
    var value = activetnmcontent.orderedKeys['T'][x];
    console.log(value)
    var showvalue = value+":"+activetnmcontent['T'][value];
    console.log(showvalue)

    let item = { name: showvalue, value: value }
    iTs.push(item)
  }
}

const iNs = []

if (activetnmcontent.hasOwnProperty("orderedKeys")) {
  //展示T
  for (var x in activetnmcontent.orderedKeys['N']) {
    var value = activetnmcontent.orderedKeys['N'][x];
    console.log(value)
    var showvalue = value + ":" + activetnmcontent['N'][value];
    console.log(showvalue)

    let item = { name: showvalue, value: value }
    iNs.push(item)
  }
}

const iMs = []

if (activetnmcontent.hasOwnProperty("orderedKeys")) {
  //展示T
  for (var x in activetnmcontent.orderedKeys['M']) {
    var value = activetnmcontent.orderedKeys['M'][x];
    console.log(value)
    var showvalue = value + ":" + activetnmcontent['M'][value];
    console.log(showvalue)

    let item = { name: showvalue, value: value }
    iMs.push(item)
  }
}

Page({
  data: {
    iKeyshow:'',
    iResult:'',
    iTs: iTs, 
    iNs: iNs,
    iMs: iMs,
    iT:null,
    iN:null,
    iM: null,
    selectT: false,
    selectN:false,
    selectM: false,
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
      path: '/pages/TNM/SmallIntestine/index',
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

    //console.log(activetnmcontent)
  },
  bindShowMsgT: function () {
    this.setData({
      selectT: !this.data.selectT,
        selectN: false,
        selectM: false
    })
  },
  mySelectT: function (e){
 
    var itValue = e.currentTarget.dataset.name

    this.setData({
      iT: itValue,
      selectT: false
    })
  },
  bindShowMsgN: function () {
    this.setData({
      selectN: !this.data.selectN,
      selectT: false,
      selectM: false
    })
  },
  mySelectN: function (e) {
    var iNValue = e.currentTarget.dataset.name
    this.setData({
      iN: iNValue,
      selectN: false
    })
  },
  bindShowMsgM: function () {
    this.setData({
      selectM: !this.data.selectM,
      selectT: false,
      selectN: false
    })
  },
  mySelectM: function (e) {
    var iMValue = e.currentTarget.dataset.name
    this.setData({
      iM: iMValue,
      selectM: false
    })
  },

  onShow: function () {

  },

  
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iT: null,
      iN: null,
      iM: null
    })
  },
  
  onCancel: function() {
    this.setData({
      selectT: false,
      selectN: false,
      selectM: false
    })
  },

  getresult: function (tnmcontent) {

    var tablecontent = null;

    let data = this.data;

    var tablekey = null;

    if (data.iT && data.iN && data.iM) {
      tablecontent = tnmcontent.Table;

      tablekey = data.iT + '_' + data.iN + '_' + data.iM;

      if (data.iT == "T4") {
        tablekey = data.iT + '_' + "AnyN" + '_' + data.iM;
      }

      if (data.iM == "M1") {
        tablekey = "AnyT" + '_' + "AnyN" + '_' + data.iM;
      }
    }  

    console.log(tablekey);
    if (tablecontent.hasOwnProperty(tablekey)) {
      return {
        key: tablekey,
        result: tablecontent[tablekey]
      };
    } 
    else {
      return {
        key: tablekey,
        result: ''
      };
    }

    return '';
  },

  onCompute: function () {
    let data = this.data;

    if (!data.iT || !data.iN || !data.iM) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '您有选项未选择',
      })
      return false;
    }

    var re = this.getresult(activetnmcontent);
    if (re.result != '') {
      var keyshow = re.key;
      keyshow = keyshow.replace(/_/g, '');

      console.log(re);

      console.log(keyshow);

      var result = ':    ' + re.result + '期';
            
      this.setData({
        iKeyshow: keyshow,
        iResult: result 
      })
    }
    else
    {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '参数不合理',
      })
      this.setData({
        iKeyshow: '',
        iResult: ''
      })
    }

  },

});

