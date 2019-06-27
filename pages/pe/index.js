//获取应用实例
var app = getApp();

Page({
  data: {   
    iScore:0.0,
    iContent: "",
    iContent1: "",

    scrollTop: 0, 

    items: [
      { name: '既往DVT或PE史', value: 1.5, checked: false},
      { name: '心率>100 次/分', value: 1.5, checked: false },
      { name: '4周内手术或制动史', value: 1.5, checked: false },
      { name: '咯血', value: 1.0, checked: false },
      { name: '六个月内恶性肿瘤史', value: 1.0, checked: false },
      { name: 'PE可能性大于其他', value: 3.0, checked: false },
      { name: 'DVT临床症状和体征', value: 3.0, checked: false },
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
      path: '/pages/pe/index',
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
    var msg = "三分类："
    if (totalscore < 2) {
      msg += "低危人群：PE的概率为1.3%."
    }
    if (totalscore >= 2 && totalscore <= 6) {
      msg += "中危人群：PE的概率为16.2%. "
    }
    if (totalscore > 6) {
      msg += "高危人群：PE的概率为40.6% ."
    }

    var msg1 = "二分类："
    if (totalscore <= 4) {
      msg1 = msg1 + "得分≤4的情况为“不大可能患有PE”，PE发病率为3% ."
    }
    if (totalscore > 4) {
      msg1 = msg1 + "得分>4的情况为“可能患有PE”，PE发病率为28%."
    }

    this.setData({
      iScore: totalscore.toFixed(1),
      iContent: msg,
      iContent1: msg1,
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
      iContent1: "",
    })
  },
});

