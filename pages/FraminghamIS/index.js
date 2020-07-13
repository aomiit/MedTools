//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: ['','','','','','',''],

    gitems:[
	  {
        name: '性别(没有双性)',
        items: [
          { name: '女性', value: 'f', checked: false },
          { name: '男性', value: 'm', checked: false },
        ]
      },
	  
      {
        name: '年龄(周岁,不适用于 <35 或 >74)',
        items: [
          { name: '30~34', value: 'a', checked: false },
          { name: '35~39', value: 'b', checked: false },
          { name: '40~44', value: 'c', checked: false },
          { name: '45~49', value: 'd', checked: false },
          { name: '50~54', value: 'e', checked: false },
          { name: '55~59', value: 'f', checked: false },		  
          { name: '60~64', value: 'g', checked: false },
          { name: '65~69', value: 'h', checked: false },
          { name: '70~74', value: 'i', checked: false },  
        ]
      },
	  {
        name: '总胆固醇(mmol/L)',
        items: [
          { name: '4.14~5.15', value: 'b', checked: false },
          { name: '5.16~6.19', value: 'c', checked: false },
          { name: '6.2~7.23', value: 'd', checked: false },
		      { name: '>7.23', value: 'e', checked: false },
        ]
      },
      {
        name: 'HDL(mmol/L)',
        items: [
          { name: '0.91~1.14', value: 'b', checked: false },
          { name: '1.15~1.27', value: 'c', checked: false },
          { name: '1.28~1.53', value: 'd', checked: false },
		      { name: '>1.53', value: 'e', checked: false },
        ]
      },
      {
        name: 'BP(mm Hg)请选择最高级别',
        items: [
          { name: 'SBP', value: 'a', checked: false },
          { name: 'SBP120-129或DBP80-84', value: 'b', checked: false },
          { name: 'SBP130-139或DBP85-89', value: 'c', checked: false },
          { name: 'SBP140-149或DBP90-99', value: 'd', checked: false },
          { name: 'SBP≥150或DBP≥100', value: 'e', checked: false },
        ]
      },
      {
        name: '患者有糖尿病?',
        items: [
          { name: '否', value: 0, checked: false },
          { name: '是', value: 1, checked: false },
        ]
      },     
      {
        name: '患者吸烟?',
        items: [
          { name: '否', value: 0, checked: false },
          { name: '是', value: 1, checked: false },
        ]
      },
    ],

    iContent:"",

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
      path: '/pages/FraminghamIS/index',
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

  radioChange: function (e) {

    console.log('发生change事件，携带value值为：', e.detail.value)

    var dataStrArr = e.detail.value.split(":");//分割成字符串数组
	
	  console.log('为：', dataStrArr)
  
    var that = this
    var iScores = that.data.iScores;
    iScores[Number(dataStrArr[0])] = dataStrArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.iScores)
  },
  
  onCompute: function () {
	let score = 0;
	let nlrisk = 0;
	var s1 = 0;
	var s2 = 0;
	var s3 = 0;
	var s4 = 0;
	var value = 0;
	
	var iScores = this.data.iScores;   
	
    let sex = iScores[0];	
    let age = iScores[1];	
    let tc = iScores[2];	
    let hdl = iScores[3];	
    let bp = iScores[4];	
	let diabetic = iScores[5];	
	let smoker = iScores[6];	
	
    if (sex == "m") {
        if (smoker == 1) {
            smoker = 2
        } else {
            smoker = 0
        }
        if ( diabetic == 1) {
            diabetic = 2
        } else {
            diabetic = 0
        }
        switch (age) {
        case "a":
            s1 = -1;
            nlrisk = 3;
            break;
        case "b":
            s1 = 0;
            nlrisk = 5;
            break;
        case "c":
            s1 = 1;
            nlrisk = 7;
            break;
        case "d":
            s1 = 2;
            nlrisk = 11;
            break;
        case "e":
            s1 = 3;
            nlrisk = 14;
            break;
        case "f":
            s1 = 4;
            nlrisk = 16;
            break;
        case "g":
            s1 = 5;
            nlrisk = 21;
            break;
        case "h":
            s1 = 6;
            nlrisk = 25;
            break;
        case "i":
            s1 = 7;
            nlrisk = 30;
            break
        }
        switch (tc) {
        case "a":
            s2 = -3;
            break;
        case "b":
            s2 = 0;
            break;
        case "c":
            s2 = 1;
            break;
        case "d":
            s2 = 2;
            break;
        case "e":
            s2 = 3;
            break
        }
        switch (hdl) {
        case "a":
            s3 = 2;
            break;
        case "b":
            s3 = 1;
            break;
        case "c":
            s3 = 0;
            break;
        case "d":
            s3 = 0;
            break;
        case "e":
            s3 = -2;
            break
        }
        switch (bp) {
        case "a":
            s4 = 0;
            break;
        case "b":
            s4 = 0;
            break;
        case "c":
            s4 = 1;
            break;
        case "d":
            s4 = 2;
            break;
        case "e":
            s4 = 3;
            break
        }
        value = s1 + s2 + s3 + s4 + smoker + diabetic;
        if (value <= -1) {
            score = 2;
        }
        if (value == 0) {
            score = 3;
        }
        if (value == 1) {
            score = 3;
        }
        if (value == 2) {
            score = 4;
        }
        if (value == 3) {
            score = 5;
        }
        if (value == 4) {
            score = 7;
        }
        if (value == 5) {
            score = 8;
        }
        if (value == 6) {
            score = 10;
        }
        if (value == 7) {
            score = 13;
        }
        if (value == 8) {
            score = 16;
        }
        if (value == 9) {
            score = 20;
        }
        if (value == 10) {
            score = 25;
        }
        if (value == 11) {
            score = 31;
        }
        if (value == 12) {
           score = 37;
        }
        if (value == 13) {
            score = 45;
        }
        if (value >= 14) {
            score = ">53";
        }
    } else if (sex == "f") {
        if (smoker == 1) {
            smoker = 2
        } else {
            smoker = 0
        }
        if (diabetic == 1) {
            diabetic = 4
        } else {
            diabetic = 0
        }
        switch (age) {
        case "a":
            s1 = -9;
            nlrisk = "<1";
            break;
        case "b":
            s1 = -4;
            nlrisk = "<1";
            break;
        case "c":
            s1 = 0;
            nlrisk = 2;
            break;
        case "d":
            s1 = 3;
            nlrisk = 5;
            break;
        case "e":
            s1 = 6;
            nlrisk = 8;
            break;
        case "f":
            s1 = 7;
            nlrisk = 12;
            break;
        case "g":
            s1 = 8;
            nlrisk = 12;
            break;
        case "h":
            s1 = 8;
            nlrisk = 13;
            break;
        case "i":
            s1 = 8;
            nlrisk = 14;
            break
        }
        switch (tc) {
        case "a":
            s2 = -2;
            break;
        case "b":
            s2 = 0;
            break;
        case "c":
            s2 = 1;
            break;
        case "d":
            s2 = 1;
            break;
        case "e":
            s2 = 3;
            break
        }
        switch (hdl) {
        case "a":
            s3 = 5;
            break;
        case "b":
            s3 = 2;
            break;
        case "c":
            s3 = 1;
            break;
        case "d":
            s3 = 0;
            break;
        case "e":
            s3 = -3;
            break
        }
        switch (bp) {
        case "a":
            s4 = -3;
            break;
        case "b":
            s4 = 0;
            break;
        case "c":
            s4 = 0;
            break;
        case "d":
            s4 = 2;
            break;
        case "e":
            s4 = 3;
            break
        }
        value = s1 + s2 + s3 + s4 + smoker + diabetic;
        if (value <= -2) {
            score = 1;
        }
        if (value == -1) {
            score = 2;
        }
        if (value == 0) {
           score = 2;
        }
        if (value == 1) {
            score = 2;
        }
        if (value == 2) {
            score =3;
        }
        if (value == 3) {
            score =3;
        }
        if (value == 4) {
            score =4;
        }
        if (value == 5) {
            score =4;
        }
        if (value == 6) {
            score =5;
        }
        if (value == 7) {
            score =6;
        }
        if (value == 8) {
            score =7;
        }
        if (value == 9) {
            score =8;
        }
        if (value == 10) {
            score =10;
        }
        if (value == 11) {
            score =11;
        }
        if (value == 12) {
            score = 13;
        }
        if (value == 13) {
            score =15;
        }
        if (value == 14) {
            score =18;
        }
        if (value == 15) {
            score =20;
        }
        if (value == 16) {
            score =24;
        }
        if (value >= 17) {
            score =">27";
        }
    }     
	
	console.log('为：',nlrisk)
    
	this.setData({
		iScore: score,
		iContent: nlrisk,
	})
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScore: 0.0,
      iContent: "",
    })
  },
});

