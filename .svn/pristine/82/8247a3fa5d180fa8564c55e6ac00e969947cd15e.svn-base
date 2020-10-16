//获取应用实例
var app = getApp();


Page({
  data: {
    iAge: null,
    iBPM:null,
    iSP:null,    
    iTIMI:0,    
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
      path: '/pages/TIMI/index',
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

  onShow: function () {
    
  },


  oniAge: function (ev) {
    var iAge = parseFloat(ev.detail.value);
    this.setData({
      iAge: iAge
    })
  },

  oniSP: function (ev) {
    var iSP = ev.detail.value;
    this.setData({
      iSP: iSP
    })
  },

  oniBPM: function (ev) {
    var iBPM = ev.detail.value;
    this.setData({
      iBPM: iBPM
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iBPM: null,
      iAge: null,
      iSP: null,
      iBPM:null,
    })
  },

  calculate: function () {
    let a = this.data['iAge']
    let b = this.data['iBPM']
    let s = this.data['iSP']

    if (a == '') {
      wx.showToast({
        title: '输入年龄',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (b == '') {
      wx.showToast({
        title: '输入心率',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (s == '') {
      wx.showToast({
        title: '输入收缩压',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    
	a = parseFloat(a);
	b = parseFloat(b);
	s = parseFloat(s);


	a=a/10;
	
	var score=b*a*a/s;	

  var msg = "";
  
  score = score.toFixed(1)
	
	if(score<30)
	{
		msg="研究表明是低TRI级别，即医院死亡率为 -10% 或更低."
	}
	if(score>=30)
	{
		msg="研究表明为“中/高TRI”，即医院死亡率>10%."
	}

	this.setData({
	  iScore: score,
    iTIMI: msg
	})

  },

  onCompute: function () {
    let data = this.data;

    if (!data.iSP || !data.iBPM || !data.iAge) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '您有选项未填写',
      })
      return false;
    }  
    this.calculate();
  },
});

