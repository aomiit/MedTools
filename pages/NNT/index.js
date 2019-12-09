//获取应用实例
var app = getApp();

const iFormulas= [];

let item = { name: '按发生率', value: 0};
iFormulas.push(item);
item = { name: '按事件发生人年', value: 1 };
iFormulas.push(item);

Page({
  data: {
    iFormulas: iFormulas,
    iFormula: 0,

    biFre: false,
    biN: true,

    iFirstFre1: null,
    iFirstFre2: null,
    iNN:100,
    iN1:null,
    iN2:null,
    
    iNNT:null,
    
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
      path: '/pages/NNT/index',
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

  onShow: function () {
    let that = this;   
  },

  iNNChange: function (e) {
    var iNN = e.detail.value;
    this.setData({
      iNN: iNN
    })
  },

  iFormulaChange: function (e) {
    var iFormula = e.detail.value
    this.setData({
      iFormula: iFormula,
      iNNT: null
    })

    let iForm = iFormulas[this.data['iFormula']]['value']
   
    switch (iForm) {
      case 0:
        this.setData({
          biFre:false,
          biN: true
        })
        break;
      case 1:
        this.setData({
          biFre: true,
          biN: false
        })
        break;      
    }
  },

  oniFirstFre1: function (ev) {
    var iFirstFre1 = ev.detail.value;
    this.setData({
      iFirstFre1: iFirstFre1
    })
  }, 

  oniFirstFre2: function (ev) {
    var iFirstFre2 = ev.detail.value;
    this.setData({
      iFirstFre2: iFirstFre2
    })
  }, 

  oniN1: function(ev) {
    var iN1 = ev.detail.value;
    this.setData({
      iN1: iN1
    })
  },
  oniN2: function (ev) {
    var iN2 = ev.detail.value;
    this.setData({
      iN2: iN2
    })
  },
  
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iFormula: 0,   

      iFirstFre1: null,
      iFirstFre2: null,
      iNN: 100,
      iN1: null,
      iN2: null,

      iNNT: null,      
      biFre: false,
      biN: true

    })
  },

  calNNTF: function (iForm, iFirstFre1, iFirstFre2, iNN, iN1, iN2)
  {         
    let ARR = (iFirstFre1 - iFirstFre2) / 100;
    let NNT = 1 / ARR;
    let value = Math.abs(NNT);

    let r0 = 1 - Math.exp(-iN1 / iNN);
    let r1 = 1 - Math.exp(-iN2/ iNN);
    let nnt2 = 1 / (r0 - r1);
    let value2 = Math.abs(nnt2);


    if (iForm==0){
      this.setData({
        iNNT: value.toFixed(1),
      })
    }
    else if (iForm == 1) {
      this.setData({
        iNNT: value2.toFixed(1),
      })
    }
   
  },

  calNNT: function () {
    let data = this.data;
    let iForm = iFormulas[this.data['iFormula']]['value'];

    let iFirstFre1 = this.data['iFirstFre1']
    let iFirstFre2 = this.data['iFirstFre2']
    let iNN = this.data['iNN']
    let iN1 = this.data['iN1']   
    let iN2 = this.data['iN2']   
   
    iFirstFre1 = parseFloat(iFirstFre1);
    iFirstFre2 = parseFloat(iFirstFre2);
    iNN = parseInt(iNN);  
    iN1 = parseInt(iN1); 
    iN2 = parseInt(iN2); 

    if (iForm == 0) {
      if ((iFirstFre1 < 0 || iFirstFre1 > 100) || (iFirstFre2 < 0 || iFirstFre2 > 100) ) {
        wx.showToast({
          title: '数值不合理',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
    }
    
    if (iForm == 1) {
      if (iNN != 100 && iNN != 1000) {
        wx.showToast({
          title: '数值不合理',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      if ((iN1 < 0 || iN1 > iNN) || (iN2 < 0 || iN2 > iNN)) {
        wx.showToast({
          title: '数值不合理',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
    }
      
    this.calNNTF(iForm, iFirstFre1, iFirstFre2, iNN, iN1, iN2);          
  },

  onCompute: function () {
    let data = this.data;

    if (data.iFormula == 0 )
    {
      if (!data.iFirstFre1 || !data.iFirstFre2) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

    if (data.iFormula == 1) {
      if (!data.iNN || !data.iN1 || !data.iN2) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

    this.calNNT();
  },
});

