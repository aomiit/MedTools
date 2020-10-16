//获取应用实例
var app = getApp();

function Round(value, digits) {
	let d = Math.pow(10, digits);//x的y次方
	return Math.round(value * d) / d//四舍五入
}

Page({
  data: {
    iSex:null,
    iAge: null,
    iSP:null,    
	iTC:null,  
	iHDL:null,  
	iWaist:null,  
	
	iSmoke:null,
	iDiabetes:null,
	iLiveAd:null,
	iLiveType:null,
	iASCVD:null,
	
	iScore:null,	
	iContent:null,
	
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
      path: '/pages/ChinaPAR/index',
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

  SexradioChange: function(e)
  {
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

  oniSP: function (ev) {
    var iSP = ev.detail.value;
    this.setData({
      iSP: iSP
    })
  },
  
   oniTC: function (ev) {
    var iTC = ev.detail.value;
    this.setData({
      iTC: iTC
    })
  },
   oniHDL: function (ev) {
    var iHDL = ev.detail.value;
    this.setData({
      iHDL: iHDL
    })
  },
   oniWaist: function (ev) {
    var iWaist = ev.detail.value;
    this.setData({
      iWaist: iWaist
    })
  },

  SmokeChange: function(e)
  {
    var iSmoke = e.detail.value;
    this.setData({
      iSmoke: iSmoke
    })
  },
 
  DiabetesChange: function(e)
  {
    var iDiabetes = e.detail.value;
    this.setData({
      iDiabetes: iDiabetes
    })
  },
 
  LiveAdChange: function(e)
  {
    var iLiveAd = e.detail.value;
    this.setData({
      iLiveAd: iLiveAd
    })
  },
 
  LiveTypeChange: function(e)
  {
    var iLiveType = e.detail.value;
    this.setData({
      iLiveType: iLiveType
    })
  },
  
  ASCVDeChange: function(e)
  {
    var iASCVD = e.detail.value;
    this.setData({
      iASCVD: iASCVD
    })
  },
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
		iSex:null,
		iAge: null,
		iSP:null,    
		iTC:null,  
		iHDL:null,  
		iWaist:null,  
		
		iSmoke:null,
		iDiabetes:null,
		iLiveAd:null,
		iLiveType:null,
		iASCVD:null
    })
  },

  calChinapar: function () {	
	let sex = this.data['iSex'];
	let a1 = this.data['iAge']
	let a2 = this.data['iSP']
	let a3 = this.data['iTC']
	let a4 = this.data['iHDL']
	let a5 = this.data['iWaist']
	let a6 = this.data['iSmoke']
	let a7 = this.data['iDiabetes']
	let a8 = this.data['iLiveAd']
	let a9 = this.data['iLiveType']
	let a10 = this.data['iASCVD']
	let ln_year = Math.log(a1);
	let ln_sbp = Math.log(a2);
	let ln_tc = Math.log(a3);
	let ln_hdl = Math.log(a4);
	let ln_wc = Math.log(a5);
	var risk = 0;
	
	if (sex == 1) {
		let value = 31.97 * ln_year + 26.15 * ln_sbp + 0.62 * ln_tc - 0.69 * ln_hdl - 0.71 * ln_wc + 3.96 * a6 + 0.36 * a7 + 0.48 * a8 - 0.16 * a9 + 6.22 * a10 - 5.73 * ln_year * ln_sbp - 0.94 * ln_year * a6 - 1.53 * ln_year * a10;
		let num1 = value - 140.68;		
		let num11 = Math.exp(num1);
		console.log('为：', num11)
		risk = 1 - Math.pow(0.9707,num11);
	}
	if (sex == 0) {
		let value2 = 24.87 * ln_year + 19.98 * ln_sbp + 0.06 * ln_tc - 0.22 * ln_hdl + 1.48 * ln_wc + 0.49 * a6 + 0.57 * a7 + 0.54 * a8 - 4.36 * ln_year * ln_sbp;
		let num2 = value2 - 117.26;		
		let num22 = Math.exp(num2);
		console.log('为：', num22)
		risk = 1 - Math.pow(0.99,num22);
	}
	
	var msg = null;
	if (risk < 0.05) {
		msg = "低危,10年心血管病风险<5%";
	}
	if (risk >= 0.05 && risk < 0.1) {
		msg ="中危,10年心血管病风险5.0%~9.9%";
	}
	if (risk >= 0.1) {
		msg = "高危,10年心血管病风险≥10.0%";
	}
	
	this.setData({
		iScore: Round(risk*100,1),
		iContent: msg,
	})

  },

  onCompute: function () {
    let data = this.data;

    if (!data.iSex || !data.iSP || !data.iAge || !data.iTC
	|| !data.iHDL || !data.iWaist || !data.iSmoke|| !data.iDiabetes 
	|| !data.iLiveAd || !data.iLiveType || !data.iASCVD) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '您有选项未填写',
      })
      return false;
    }   

    this.calChinapar();
  },
});

