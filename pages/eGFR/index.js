//获取应用实例
var app = getApp();

const iFormulas= [];

let item = { name: 'CKD-EPI肌酐(2009)公式', value: 0};
iFormulas.push(item);
item = { name: 'CKD-EPI胱抑素C(2012)公式', value: 1 };
iFormulas.push(item);
item = { name: 'CKD-EPI肌酐-胱抑素C(2012)公式', value: 2 };
iFormulas.push(item);
item = { name: 'MDRD公式', value:3 };
iFormulas.push(item);
item = { name: '国人改良MDRD公式', value: 4 };
iFormulas.push(item);
item = { name: 'Jelliffe公式', value: 5 };
iFormulas.push(item); 
item = { name: '梅奥二次公式', value: 6 };
iFormulas.push(item); 


Page({
  data: {
    iFormulas: iFormulas,
    biRace: true,
    biC: true,
    biSC:true,

    iFormula: -1,
    iRace:'nonblack',
    iSex:'male',    
    iAge: null,
    iHeight: null,
    iWeight:null,
    iSC:null, 
    iType: 'Mg',      
    iC: null, 

    iGFR173:null,
    iGFR:null,
   
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
      path: '/pages/eGFR/index',
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
      key: 'iAge',
      success: function (res) {
        let iAge = res.data;
        that.setData({
            iAge: iAge,
          }) 
      }
    })
    wx.getStorage({
      key: 'iWeight',
      success: function (res) {
        let iWeight = res.data;
        that.setData({
          iWeight: iWeight,
        })
      }
    })
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

  RaceChange: function (e) {
    var iRace = e.detail.value;
    this.setData({
      iRace: iRace
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
      iGFR173: null,
      iGFR: null
    })

    let iForm = iFormulas[this.data['iFormula']]['value']

    switch (iForm) {
      case 0:
        this.setData({
          biRace: false,
          biC: true,
          biSC:false
        })
        break;
      case 1:
        this.setData({
          biRace: true,
          biC: false,
          biSC: true
        })
        break;
      case 2:
        this.setData({
          biRace: false,
          biC: false,
          biSC: false
        })
        break;
      case 3:
        this.setData({
          biRace: false,
          biC: true,
          biSC: false
        })
        break;
      case 4:
        this.setData({
          biRace: true,
          biC: true,
          biSC: false
        })
        break;

      case 5:
        this.setData({
          biRace: true,
          biC: true,
          biSC: false
        })     

        break;
      case 6:
        this.setData({
          biRace: true,
          biC: true,
          biSC: false
        })
        break;
      default:
        this.setData({
          biRace: true,
          biC: true,
          biSC: false
        })
    }
  },

  oniAge: function (ev) {
    var iAge = parseFloat(ev.detail.value);
    this.setData({
      iAge: iAge
    })
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

  oniHeight: function (ev) {
    var iHeight = ev.detail.value;
    this.setData({
      iHeight: iHeight
    })
  },

  //体重
  oniWeight: function (ev) {
    var iWeight = ev.detail.value;
    this.setData({
      iWeight: iWeight
    })
  },
 
  //清空重置
  formReset: function () {
    console.log('reset触发')
    this.setData({
      iFormula: -1,
      iRace: 'nonblack',
      iSex: 'male',
      iAge: null,
      iHeight: null,
      iWeight: null,
      iSC: null,
      iType: 'Mg',
      iC: null,
      iGFR: null,
      iGFR173: null
    })
  },

  calAllGFR: function (iForm,scrType, scr, age, gender, race, heightcm, weightcm, scys)
  {
    if (scrType == "mmol"){
      scr = scr / 88.4;
    }
      
    var kappa = (gender == "female" ? 0.7 : 0.9);

    var mayoscr = (scr < 0.8 )?0.8:scr;

    var mayor = Math.exp(1.911 + (5.249 / mayoscr) - (2.114 / (mayoscr * mayoscr)) - 0.00686 * age - ((gender == "female")? 0.205 : 0));

    var mdrd =
      175 * Math.pow(scr, -1.154) *
      Math.pow(age, -0.203) *
      (gender == "female" ? 0.742 : 1) *
      (race == "black" ? 1.212 : 1);
    
    var mdrdcn =
      186 * Math.pow(scr, -1.154) *
      Math.pow(age, -0.203) *
      (gender == "female" ? 0.742 : 1);

    var alpha = (gender == "female" ? -0.329 : -0.411);

    var creatinine =
      141 * Math.pow(Math.min(scr / kappa, 1), alpha) *
      Math.pow(Math.max(scr / kappa, 1), -1.209) *
      Math.pow(0.993, age) *
      (gender == "female" ? 1.018 : 1) *
      (race == "black" ? 1.159 : 1);

    alpha = (gender == "female" ? -0.248 : -0.207);

    var crcys =
      135 * Math.pow(Math.min(scr / kappa, 1), alpha) *
      Math.pow(Math.max(scr / kappa, 1), -0.601) *
      Math.pow(Math.min(scys / 0.8, 1), -0.375) *
      Math.pow(Math.max(scys / 0.8, 1), -0.711) *
      Math.pow(0.995, age) *
      (gender == "female" ? 0.969 : 1) *
      (race == "black" ? 1.08 : 1);

    var bsa = Math.pow(weightcm, 0.425) * Math.pow(heightcm, 0.725) * 0.007184;

    var diff = age % 10;
    var mage = diff > 0 ?  age + 10 - diff : age;
    var jelliffe = ((98 - 0.8 * (age - 20)) * bsa) / (scr * 1.73) * (gender == "female" ? 0.9 : 1) ;

    var cystatin =
      133 *
      Math.pow(Math.min(scys / 0.8, 1), -0.499) *
      Math.pow(Math.max(scys / 0.8, 1), -1.328) *
      Math.pow(0.996, age) *
      (gender == "female" ? 0.932 : 1);

    var secondMultiplier = bsa / 1.73;

    var mdrd2 = mdrd * secondMultiplier;
    var mdrdcn2 = mdrdcn * secondMultiplier;
    var creatinine2 = creatinine * secondMultiplier;
    var cystatin2 = cystatin * secondMultiplier;
    var crcys2 = crcys * secondMultiplier;
    var mayor2 = mayor * secondMultiplier;

    if (iForm==0){
      this.setData({
        iGFR173: creatinine.toFixed(1),
        iGFR: creatinine2.toFixed(1),
      })
    }
    else if (iForm == 1) {
      this.setData({
        iGFR173: cystatin.toFixed(1),
        iGFR: cystatin2.toFixed(1),
      })
    }
    else if (iForm == 2) {
      this.setData({
        iGFR173: crcys.toFixed(1),
        iGFR: crcys2.toFixed(1),
      })
    }
    else if (iForm == 3) {
      this.setData({
        iGFR173: mdrd.toFixed(1),
        iGFR: mdrd2.toFixed(1),
      })
    }  
    else if (iForm == 4) {
      this.setData({
        iGFR173: mdrdcn.toFixed(1),
        iGFR: mdrdcn2.toFixed(1),
      })
    }       
    else if(iForm == 5) {
      this.setData({
        iGFR173: null,
        iGFR: jelliffe.toFixed(1),
      })
    } 
    else if (iForm == 6) {
      this.setData({
        iGFR173: mayor.toFixed(1),
        iGFR: mayor2.toFixed(1),
      })
    }     
  },

  calGFR: function () {
    let data = this.data;

    let iRace = data.iRace;
    let iSex = data.iSex;
    let a = this.data['iAge']
    let w = this.data['iWeight']
    let h = this.data['iHeight']
    let sc = this.data['iSC']
    let iType = this.data['iType']
    let iC = this.data['iC']
    let iform = iFormulas[this.data['iFormula']]['value'];

    if (a == '') {
      wx.showToast({
        title: '输入年龄',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else if (w == '') {
      wx.showToast({
        title: '输入体重',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }   
    else if (h == '') {
      wx.showToast({
        title: '选择身高',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }  
    else if (iform < 0) {
      wx.showToast({
        title: '选择公式',
        icon: 'failed',
        duration: 2000
      });
      return false;
    }
    else {
      if( (iSex != "male") && (iSex != "female") )
      {
        wx.showToast({
          title: '输入性别',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }

      if(iform !=1)
      {
        if (sc == '') {
          wx.showToast({
            title: '输入血肌酐',
            icon: 'failed',
            duration: 2000
          });
          return false;
        }
      }

      if (iform == 1 || iform == 2 )
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

      a = parseFloat(a);
      w = parseFloat(w);
      h = parseFloat(h);
      sc = parseFloat(sc);  
      iC = parseFloat(iC);

      if (a <= 0) {
        wx.showToast({
          title: '年龄不合理',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      else if (w <= 3) {
        wx.showToast({
          title: '体重不合理',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      else if (h < 50) {
        wx.showToast({
          title: '身高不合理',
          icon: 'failed',
          duration: 2000
        });
        return false;
      }
      
      this.calAllGFR(iform, iType, sc, a, iSex, iRace, h, w, iC);          
    }
  },

  onCompute: function () {
    let data = this.data;

    if (!data.iWeight || !data.iAge || !data.iSex || !data.iHeight) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '您有选项未填写',
      })
      return false;
    }
   
    if (data.iFormula == 0 )
    {
      if (!data.iSC ||!data.iRace ) {
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
      if (!data.iSC ||!data.iRace || !data.iC) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

    if (data.iFormula == 3) {
      if (!data.iSC ||!data.iRace ) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

    if (data.iFormula == 4) {
      if (!data.iSC ) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }
    if (data.iFormula == 5) {
      if (!data.iSC ) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }

    if (data.iFormula == 6) {
      if (!data.iSC) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '您有选项未填写',
        })
        return false;
      }
    }
    wx.setStorage({
      key: "iAge",
      data: data.iAge
    })
    wx.setStorage({
      key: "iWeight",
      data: data.iWeight
    })
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

