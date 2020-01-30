//获取应用实例
var app = getApp();

Page({
  data: {  
    iScore:0,
    iContent: " ",

    scrollTop: 0, 

    items: [
      { name: '意识模糊?', value: 1, checked: false},
      { name: '尿素氮 > 19 mg/dL (7 mmol/L)?', value: 1, checked: false },
      { name: '呼吸频率 ≥ 30?', value: 1, checked: false },
      { name: '收缩压 < 90 mmHg 或 舒张压 BP ≤ 60 mmHg?', value: 1, checked: false },
      { name: '年龄 ≥ 65周岁?', value: 1, checked: false },
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
      path: '/pages/CURB65/index',
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

    var score = 0;

    var scoreitems = e.detail.value;
    
    const length = scoreitems.length

    for (let i = 0; i < length; ++i) {
      score += parseInt(scoreitems[i]);
    }

    var msg ="";
	if (score == 0) {
        msg = "低危组:30天病死率0.6%，考虑门诊治疗。"
    }
    if (score == 1) {
        msg = "低危组:30天病死率2.7%，考虑门诊治疗。"
    }
    if (score == 2) {
        msg = "中危组:30天病死率6.8%，考虑住院治疗或在门诊密切随访。"
    }
    if (score == 3) {
        msg = "高危组:30天病死率14.0%,考虑住院治疗，可能需要收入ICU。"
    }
    if (score > 3) {
        msg = "极高危组:30天病死率27.8%,考虑住院治疗，可能需要收入ICU。"
    }

    this.setData({
      iScore: score.toFixed(0),
      iContent:msg,
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
      iContent: " ",
    })
  },
});

