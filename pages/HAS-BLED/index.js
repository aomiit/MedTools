//获取应用实例
var app = getApp();

Page({
  data: {   
    iScore:0.0,
    iContent: "",

    scrollTop: 0, 

    items: [
      { name: '高血压病史?', value: 1.0, checked: false},
      { name: '肾脏疾病?', value: 1.0, checked: false },
      { name: '肝脏疾病?', value: 1.0, checked: false },
      { name: '卒中病史?', value: 1.0, checked: false },
      { name: '先前主要出血或出血诱因?', value: 1.0, checked: false },
      { name: '易变INR?', value: 1.0, checked: false },
      { name: '年龄≥65?', value: 1.0, checked: false },
	  { name: '使用药物诱发出血?', value: 1.0, checked: false },
      { name: '饮酒史?', value: 1.0, checked: false },	  
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
      path: '/pages/HAS-BLED/index',
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

  checkboxChange: function (e) {

    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    var scoreitems = e.detail.value;
    var score = 0.0;
    const length = scoreitems.length

    for (let i = 0; i < length; ++i) {
      score += parseFloat(scoreitems[i]);
    }
    var msg = ""

	if(score==0)
	{
		msg="一项效度研究中风险为 0.9%，另一项效度研究中每100名患者每年有1.13名有出血风险。"
	}
	else if(score==1)
	{
		msg="一项效度研究中风险为3.4%，另一项效度研究中每100名患者每年有1.02名有出血风险。"
	}
	else if(score==2)
	{
		msg="一项效度研究中风险为4.1%，另一项效度研究中每100名患者每年有1.88名有出血风险。"
	}
	else if(score==3)
	{
		msg="一项效度研究中风险为5.8%，另一项效度研究中每100名患者每年有3.72名有出血风险。"
	}
	else if(score==4)
	{
		msg="一项效度研究中风险为8.9%，另一项效度研究中每100名患者每年有8.70名有出血风险。"
	}
	else if(score==5)
	{
		msg="一项效度研究中风险为9.1%，另一项效度研究中每100名患者每年有12.50名有出血风险。"
	}
	else if(score>5)
	{
		msg="评分高于5分的情况很罕见，不能确定风险"
	}

    this.setData({
      iScore: score.toFixed(1),
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
      iContent: ""
    })
  },
});

