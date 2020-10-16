//获取应用实例
var app = getApp();

Page({
  data: {  
    iSex: 'Male',
    iAge: null,

    iScore:0,
    iContent: null,

    scrollTop: 0, 

    items: [
      { name: '既往肿瘤史', value: 30, checked: false},
      { name: '慢性心力衰竭', value: 10, checked: false },
      { name: '慢性肺部疾病', value: 10, checked: false },
      { name: '脉搏≥110bpm', value: 20, checked: false },
      { name: '收缩压<100mmHg ', value: 20, checked: false },
      { name: '呼吸频率>30次/ 分', value: 20, checked: false },
      { name: '体温<36℃', value: 20, checked: false },
      { name: '精神状态改变', value: 60, checked: false },
      { name: '动脉血氧饱和度<90 %', value: 20, checked: false },
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
      path: '/pages/pesi/index',
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
      withShareTicket: true,
      menus:['shareAppMessage','shareTimeline']
    })
  },

  SexradioChange: function (e) {
    var iSex = e.detail.value;
    this.setData({
      iSex: iSex
    })
  },

  oniAge: function (ev) {
    var iAge = parseFloat(ev.detail.value);
    this.setData({
      iAge: iAge
    })
  },

  checkboxChange: function (e) {

    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    var totalscore = 0.0;

    let iSex = this.data['iSex']
    let a = this.data['iAge']

    if (iSex == "Male") {
      totalscore = 10;
    }
    else if (iSex == "Female") {
      totalscore = 0;
    }
    else {
      return;
    }

    a = parseFloat(a);

    if (a <= 0) {
      return;
    }
    else{
      totalscore += a;
    }    

    var scoreitems = e.detail.value;
    
    const length = scoreitems.length

    for (let i = 0; i < length; ++i) {
      totalscore += parseFloat(scoreitems[i]);
    }

    var msg ="指数分级：";
    if (totalscore <= 65) {
      msg += "I级，超低风险，本组0-1.6% 30天死亡率";
    }
    else if (totalscore > 65 && totalscore <= 85) {
      msg += "II级，低风险，本组1.7-3.5% 30天死亡率";
    }
    else if (totalscore > 85 && totalscore <= 105) {
      msg += "III级，中度风险，本组3.2-7.1% 30天死亡率";
    }
    else if (totalscore > 105 && totalscore <= 125) {
      msg += "IV级，高风险，本组4.0-11.4% 30天死亡率";
    }    
    else if (totalscore > 125) {
      msg += "V级，超高风险，本组10.0-24.5% 30天死亡率";
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
      iContent: "",
    })
  },
});

