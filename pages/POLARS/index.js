//获取应用实例
var app = getApp();

function Round(value, digits) {
	let d = Math.pow(10, digits);//x的y次方
	return Math.round(value * d) / d//四舍五入
}

Page({
  data: {
	iAge: null,
    iSex:null,
	iType:null,
	iTumorsize:null,    

	iStoma:null,
	iPRT:null,
	
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
      path: '/pages/POLARS/index',
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

  TypeChange: function (ev) {
    var iType = ev.detail.value;
    this.setData({
      iType: iType
    })
  },
  
  TumorsizeChange: function (ev) {
    var iTumorsize = ev.detail.value;
    this.setData({
      iTumorsize: iTumorsize
    })
  },
  
  StomaChange: function(e)
  {
    var iStoma = e.detail.value;
    this.setData({
      iStoma: iStoma
    })
  },
 
  PRTChange: function(e)
  {
    var iPRT = e.detail.value;
    this.setData({
      iPRT: iPRT
    })
  },
 
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
		iAge: null,
		iSex:null,
		iType:null,
		iTumorsize:null,    

		iStoma:null,
		iPRT:null,
		
		iScore:null,	
		iContent:null,
    })
  },

  calScore: function () {	
	let genderRadio = this.data['iSex'];
	let age = this.data['iAge']
	let surgeryTypeRadio = this.data['iType']
	let tumourHeight = this.data['iTumorsize']
	let stoma = this.data['iStoma']
	let preopRadio = this.data['iPRT']

	var numAge  = parseInt(age);

	if (numAge > 75) {
		numAge = 75;
	}
	if (numAge < 35) {
		numAge = 35;
	}
		
	var larsScore = Math.round(44.9561 + (-0.2117 * numAge) + (-1.014 * genderRadio) + (-1.9655 * surgeryTypeRadio) + (-0.6374 * tumourHeight) +(0.7817 * stoma) + (3.3049 * preopRadio));
	
	var displayLars = null;
	
	if (larsScore < 20) 
		displayLars = "无直肠癌低前切除综合征(LARS)";
	else if (larsScore < 30) 
		displayLars = "轻度直肠癌低前切除综合征(LARS)风险";
	else 
		displayLars = "重度直肠癌低前切除综合征(LARS)风险";

	
	this.setData({
		iScore:  larsScore,
		iContent: displayLars,
	})

  },
	
  onCompute: function () {
    let data = this.data;

    if (!data.iSex || !data.iType || !data.iAge || !data.iTumorsize
	|| !data.iStoma || !data.iPRT) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '您有选项未填写',
      })
      return false;
    }   

    this.calScore();
  },
});

