//获取应用实例
var app = getApp();

Page({
  data: {  
    iScore:0,
    iContent: " ",

    scrollTop: 0, 

    items: [
      { name: '活动性恶性肿瘤，患者先前有局部或远端转移和（或）6个月内接受过化疗和放疗', value: 3, checked: false},
      { name: '既往静脉血栓栓塞症', value: 3, checked: false },
      { name: '制动，患者身体原因或遵医嘱需卧床休息至少3天', value: 3, checked: false },
      { name: '有血栓形成倾向，抗凝血酶缺陷症，蛋白C或S缺乏，leidenV因子，凝血酶原G20210A突变，抗磷脂抗体综合症', value: 3, checked: false },
      { name: '近期（小于等于1个月）创伤或外科手术', value: 2, checked: false },
      { name: '年龄大于等于70岁', value: 1, checked: false },
      { name: '心脏和（或）呼吸衰竭', value: 1, checked: false },
      { name: '急性心肌梗死和（或）缺血性脑卒中', value: 1, checked: false },
      { name: '急性感染和（或）风湿性疾病', value: 1, checked: false },
      { name: '肥胖（体质指数≥30kg/m2）', value: 1, checked: false },
      { name: '正在接受激素治疗', value: 1, checked: false },
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
      path: '/pages/cpadua/index',
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

    var totalscore = 0.0;

    var scoreitems = e.detail.value;
    
    const length = scoreitems.length

    for (let i = 0; i < length; ++i) {
      totalscore += parseFloat(scoreitems[i]);
    }

    var msg ="";
    if (totalscore < 4) {
      msg += "静脉血栓栓塞症风险比较低";
    }
    else if (totalscore >= 4) {
      msg += "静脉血栓栓塞症风险患者";
    }

    this.setData({
      iScore: totalscore.toFixed(0),
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

