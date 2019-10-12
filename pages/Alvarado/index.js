//获取应用实例
var app = getApp();

Page({
  data: {   
    iScore:0.0,
    iContent: "",

    scrollTop: 0, 

    items: [
      { name: '疼痛转移到右肠窝(Migration of pain to the right iliac fossa)', value: 1.0, checked: false},
      { name: '厌食(Anorexia)', value: 1.0, checked: false },
      { name: '恶心或呕吐(Nausea/Vomiting)', value: 1.0, checked: false },
      { name: '右髂窝压痛(Tenderness in the right iliac fossa)', value: 2.0, checked: false },
      { name: '反跳痛(Rebound pain)', value: 1.0, checked: false },
      { name: '发热高于37.3°C(Elevated temperature(fever)[>37.3°C])', value: 1.0, checked: false },
      { name: '白细胞增多 计数>10000/µL(Leukocytosis:White Blood Count>10000/µL)', value: 2.0, checked: false },
      { name: '白细胞向左移动(Shift of leukocytes to the left)', value: 1.0, checked: false },
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
      path: '/pages/Alvarado/index',
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
    var msg = ""
    if (totalscore < 5) {
      msg += "Alvarado评分提示不太可能是阑尾炎。应该考虑其他症状的原因。"
    }
    else if (totalscore >= 5 && totalscore <= 6) {
      msg += "Alvarado评分提示可能患有阑尾炎。患者应可入院，应进行诊断性影像学检查。 "
    }
    else if (totalscore >= 7 && totalscore <= 8) {
      msg += "Alvarado评分显示很可能是阑尾炎。病人应该住院，可以使用诊断性成像，可以进行阑尾切除术。"
    }
    else if (totalscore > 8) {
      msg += "Alvarado评分明确为阑尾炎。病人应该住院，一般的治疗(通常是阑尾切除)应该进行。"
    }

    this.setData({
      iScore: totalscore.toFixed(1),
      iContent: msg
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

