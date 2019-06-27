//获取应用实例
var app = getApp();

Page({
  data: {   
    iScore:0,
    iContent: "",
    scrollTop: 0, 

    items: [
      { name: '癌症活动期(近6个月内接受治疗 或当前姑息治疗)', value: 1.0, checked: false},
      { name: '偏瘫，轻瘫或最近下肢石膏固定', value: 1.0, checked: false },
      { name: '近期卧床≥3天或近12周内行大手术(全麻或局麻)', value: 1.0, checked: false },
      { name: '沿深静脉走行有局限性压痛', value: 1.0, checked: false },
      { name: '整个下肢肿胀', value: 1.0, checked: false },
      { name: '肿胀小腿周径至少大于无症状侧3cm(胫骨粗隆下10cm测量)', value: 1.0, checked: false },
      { name: '凹陷性水肿(仅症状腿)', value: 1.0, checked: false },
      { name: '浅静脉侧支(非静脉曲张)', value: 1.0, checked: false },
      { name: '既往DVT史', value: 1.0, checked: false },  
      { name: '至少可能和DVT相当的其他病因诊断*', value: 1.0, checked: false },          
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
      path: '/pages/dvtg/index',
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

  checkboxChange: function (e) {

    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    var scoreitems = e.detail.value;
    var totalscore = 0.0;
    const length = scoreitems.length

    for (let i = 0; i < length; ++i) {
      totalscore += parseFloat(scoreitems[i]);
    }

    var msg1 = ""
    if (totalscore < 2) {
      msg1 = msg1 + "DVT低危人群。不太可能发生DVT，如果同时D-二聚体阴性，可以排除DVT诊断”"
    }
    if (totalscore >= 2) {
      msg1 = msg1 + "DVT高危人群。很有可能发生DVT。如果同时伴D-二聚体阳性，可以考虑DVT诊断”"
    }
    
    this.setData({
      iScore: totalscore.toFixed(0),
      iContent: msg1,
    })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    const length = this.data.items.length
    for (let i = 0; i < length; ++i) {
      this.data.items[i].checked = false;
    }

    this.setData({
      items: this.data.items,
      iScore: 0.0,
      iContent: "",
    })
  },
});

