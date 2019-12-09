//获取应用实例
var app = getApp();

const iFormulas= [];

let item = { name: '肌酐(2009)公式', value: 0};
iFormulas.push(item);
item = { name: '胱抑素C(2012)公式', value: 1 };
iFormulas.push(item);
item = { name: '肌酐-胱抑素C儿童公式(2012)', value: 2 };
iFormulas.push(item);

Page({
  data: {
    iFormulas: iFormulas,
    biBUN: true,
    biC: true,
    biSC:false,
    biSex:true,
    biHeight: false,

    iFormula: 0,
    iBUN:null,
    iSex:'male',    
    iHeight: null,
    iSC:null,     
    iC: null, 

    iGFR173:null,
    
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
      path: '/pages/PGFR/index',
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

  onShow: function () {
    let that = this;
   
    wx.getStorage({
      key: 'iHeight',
      success: function (res) {
        let iHeight = res.data;
        that.setData({
          iHeight: iHeight,
        })
      }
    })
    wx.getStorage({
      key: 'iSC',
      success: function (res) {
        let iSC = res.data;
        that.setData({
          iSC: iSC,
        })
      }
    })

    wx.getStorage({
      key: 'iSex',
      success: function (res) {
        let iSex = res.data;
        that.setData({
          iSex: iSex,
        })
      }
    })

  },

  SexradioChange: function(e)
  {
    var iSex = e.detail.value;
    this.setData({
      iSex: iSex
    })
  },
  TypeChange: function (e) {
    var iType = e.detail.value;
    this.setData({
      iType: iType
    })
  },
  iFormulaChange: function (e) {
    var iFormula = e.detail.value
    this.setData({
      iFormula: iFormula,
      iGFR173: null
    })

    let iForm = iFormulas[this.data['iFormula']]['value']

    switch (iForm) {
      case 0:
        this.setData({
          biBUN: true,
          biC: true,
          biSC:false,
          biHeight: false,
          biSex: true
        })
        break;
      case 1:
        this.setData({
          biBUN: true,
          biC: false,
          biSex: true,
          biHeight: true,
          biSC: true
        })
        break;
      case 2:
        this.setData({
          biBUN: false,   
          biC: false,
          biSC: false,
          biHeight: false,
          biSex: false
        })
        break;             
      default:
        this.setData({
          biBUN: true,   
          biC: true,
          biHeight: true,
          biSC: true,
          biSex: true
        })
    }
  },

  oniSC: function (ev) {
    var iSC = ev.detail.value;
    this.setData({
      iSC: iSC
    })
  }, 

  oniC: function(ev) {
    var iC = ev.detail.value;
    this.setData({
      iC: iC
    })
  },

  oniBUN: function (ev) {
    var iBUN = ev.detail.value;
    this.setData({
      iBUN: iBUN
    })
  },

  oniHeight: function (ev) {
    var iHeight = ev.detail.value;
    this.setData({
      iHeight: iHeight
    })
  },

  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iFormula: 0,    
      iSex: 'male',   
      iType: 'Mg', 
      iHeight: null,
      iSC: null,
      iC: null,
      iBUN: null,
      iGFR173: null,
      biBUN: true,
      biC: true,
      biSC: true,
      biSex: true,
      biHeight: true
    })
  },

  calPGFR: function (iForm, scrType,scr, gender, heightcm, bun, scys)
  {         
    if (scrType == "mmol") {
      scr = scr / 88.4;
    }

    var creatinine = 0.413 * (heightcm / scr);

    var cystatin = 70.69 
                  * Math.pow(scys, (-0.931));
    
    var crcys = 39.8 
            * Math.pow((heightcm / (100 * scr)), 0.456) 
            * Math.pow((1.8 / scys) , 0.418) 
            * Math.pow((30 / bun), 0.079) 
            * Math.pow((heightcm / 140) ,  0.179)
            * (gender == "female" ? 1:1.076);

    if (iForm==0){
      this.setData({
        iGFR173: creatinine.toFixed(1),
      })
    }
    else if (iForm == 1) {
      this.setData({
        iGFR173: cystatin.toFixed(1),
      })
    }
    else if (iForm == 2) {
      this.setData({
        iGFR173: crcys.toFixed(10),
      })
    }
  },

  calGFR: function () {
    let data = this.data;

    let iSex = data.iSex;
    let bun = this.data['iBUN']
    let h = this.data['iHeight']
    let sc = this.data['iSC']
    let iC = this.data['iC']
    let iform = iFormulas[this.data['iFormula']]['value'];
    let iType = this.data['iType']
    
    if (iform < 0) {
      wx.showToast({
        title: '选择公式',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }  
      
    if(iform !=1)
    {
      if (h == '') {
        wx.showToast({
          title: '选择身高',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }  
      if (sc == '') {
        wx.showToast({
          title: '输入血肌酐',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
    }

    if (iform == 1 || iform == 2)
    {        
      if (iC== '') {
        wx.showToast({
          title: '输入胱抑素',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
    }

    if (iform == 2) {
      if ((iSex != "male") && (iSex != "female")) {
        wx.showToast({
          title: '输入性别',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      if (bun == '') {
        wx.showToast({
          title: '输入尿素氮BUN',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
    }

    bun = parseFloat(bun);
    h = parseFloat(h);
    sc = parseFloat(sc);  
    iC = parseFloat(iC);
    
    if (h < 10) {
      wx.showToast({
        title: '身高不合理',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
      
    this.calPGFR(iform, iType,sc, iSex, h, bun, iC);          
  },

  onCompute: function () {
    let data = this.data;

    if (data.iFormula == 0 )
    {
      if (!data.iSC || !data.iHeight) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

    if (data.iFormula == 1 ) {
      if (!data.iC ) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

    if (data.iFormula == 2) {
      if (!data.iSC || !data.iBUN || !data.iC || !data.iHeight || !data.iSex) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

     wx.setStorage({
      key: "iHeight",
      data: data.iHeight
    })
    wx.setStorage({
      key: "iSC",
      data: data.iSC
    })
    wx.setStorage({
      key: "iSex",
      data: data.iSex
    })

    this.calGFR();
  },
});

