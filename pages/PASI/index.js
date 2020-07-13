//获取应用实例
var app = getApp();

Page({


  data: {  
    
    iScore:0,
    iScores: [0,0,0,0,0,0,0,0,0,0,0,0],

    gitems:[ 
      {
        name: '头颈部(含颈部)皮损面积',
        items: [
          { name: '0', value: 0.0, checked: false },
          { name: '1-9%', value: 1.0, checked: false },
          { name: '10-29%', value: 2.0, checked: false },
          { name: '30-49%', value: 3.0, checked: false },
          { name: '50-69%', value: 4.0, checked: false },
          { name: '70-89%', value: 5.0, checked: false },
          { name: '90-100%', value: 6.0, checked: false },
        ]
      },
      {
        name: '头颈部(含颈部)浸润(I)严重程度',
        items: [
          { name: '皮损与正常皮肤平齐', value: 0.0, checked: false },
          { name: '皮损轻微高出于正常皮肤表面', value: 1.0, checked: false },
          { name: '中等程度隆起,斑块的边缘为圆或斜坡型', value: 2.0, checked: false },
          { name: '皮损肥厚,隆起明显', value: 3.0, checked: false },
          { name: '皮损高度增厚,隆起极为明显', value: 4.0, checked: false },
        ]
      },
      {
        name: '头颈部(含颈部)红斑(E)严重程度',
        items: [
          { name: '无红斑可见', value: 0.0, checked: false },
          { name: '呈淡红色', value: 1.0, checked: false },
          { name: '红色', value: 2.0, checked: false },
          { name: '深红色', value: 3.0, checked: false },
          { name: '红色极深', value: 4.0, checked: false },
        ]
      },
      {
        name: '头颈部(含颈部)表皮脱屑/鳞屑(D)严重程度',
        items: [
          { name: '表面无可见鳞屑', value: 0.0, checked: false },
          { name: '部分皮损表面上覆有鳞屑,以细微的鳞屑为主', value: 1.0, checked: false },
		      { name: '大多数皮损表面完全或不完全覆有鳞屑,鳞屑呈片状', value: 2.0, checked: false },
          { name: '几乎全部皮损表面覆有鳞屑,鳞屑较厚成层', value: 3.0, checked: false },
		      { name: '全部皮损表面均覆有鳞屑,鳞屑很厚成层', value: 4.0, checked: false },	  
        ]
      },
	  
      {
        name: '上肢皮损面积',
        items: [
          { name: '0', value: 0.0, checked: false },
          { name: '1-9%', value: 1.0, checked: false },
          { name: '10-29%', value: 2.0, checked: false },
          { name: '30-49%', value: 3.0, checked: false },
          { name: '50-69%', value: 4.0, checked: false },
          { name: '70-89%', value: 5.0, checked: false },
          { name: '90-100%', value: 6.0, checked: false },
        ]
      },
      {
        name: '上肢浸润(I)严重程度',
        items: [
          { name: '皮损与正常皮肤平齐', value: 0.0, checked: false },
          { name: '皮损轻微高出于正常皮肤表面', value: 1.0, checked: false },
          { name: '中等程度隆起,斑块的边缘为圆或斜坡型', value: 2.0, checked: false },
          { name: '皮损肥厚,隆起明显', value: 3.0, checked: false },
          { name: '皮损高度增厚,隆起极为明显', value: 4.0, checked: false },
        ]
      },
      {
        name: '上肢红斑(E)严重程度',
        items: [
          { name: '无红斑可见', value: 0.0, checked: false },
          { name: '呈淡红色', value: 1.0, checked: false },
          { name: '红色', value: 2.0, checked: false },
          { name: '深红色', value: 3.0, checked: false },
          { name: '红色极深', value: 4.0, checked: false },
        ]
      },
      {
        name: '上肢表皮脱屑/鳞屑(D)严重程度',
        items: [
          { name: '表面无可见鳞屑', value: 0.0, checked: false },
          { name: '部分皮损表面上覆有鳞屑,以细微的鳞屑为主', value: 1.0, checked: false },
		      { name: '大多数皮损表面完全或不完全覆有鳞屑,鳞屑呈片状', value: 2.0, checked: false },
          { name: '几乎全部皮损表面覆有鳞屑,鳞屑较厚成层', value: 3.0, checked: false },
		      { name: '全部皮损表面均覆有鳞屑,鳞屑很厚成层', value: 4.0, checked: false },	  
        ]
      },
	  
      {
        name: '躯干部(含腋窝与腹股沟)皮损面积',
        items: [
          { name: '0', value: 0.0, checked: false },
          { name: '1-9%', value: 1.0, checked: false },
          { name: '10-29%', value: 2.0, checked: false },
          { name: '30-49%', value: 3.0, checked: false },
          { name: '50-69%', value: 4.0, checked: false },
          { name: '70-89%', value: 5.0, checked: false },
          { name: '90-100%', value: 6.0, checked: false },
        ]
      },
      {
        name: '躯干部(含腋窝与腹股沟)浸润(I)严重程度',
        items: [
          { name: '皮损与正常皮肤平齐', value: 0.0, checked: false },
          { name: '皮损轻微高出于正常皮肤表面', value: 1.0, checked: false },
          { name: '中等程度隆起,斑块的边缘为圆或斜坡型', value: 2.0, checked: false },
          { name: '皮损肥厚,隆起明显', value: 3.0, checked: false },
          { name: '皮损高度增厚,隆起极为明显', value: 4.0, checked: false },
        ]
      },	  
      {
        name: '躯干部(含腋窝与腹股沟)红斑(E)严重程度',
        items: [
          { name: '无红斑可见', value: 0.0, checked: false },
          { name: '呈淡红色', value: 1.0, checked: false },
          { name: '红色', value: 2.0, checked: false },
          { name: '深红色', value: 3.0, checked: false },
          { name: '红色极深', value: 4.0, checked: false },
        ]
      },
      {
        name: '躯干部(含腋窝与腹股沟)表皮脱屑/鳞屑(D)严重程度',
        items: [
          { name: '表面无可见鳞屑', value: 0.0, checked: false },
          { name: '部分皮损表面上覆有鳞屑,以细微的鳞屑为主', value: 1.0, checked: false },
		      { name: '大多数皮损表面完全或不完全覆有鳞屑,鳞屑呈片状', value: 2.0, checked: false },
          { name: '几乎全部皮损表面覆有鳞屑,鳞屑较厚成层', value: 3.0, checked: false },
		      { name: '全部皮损表面均覆有鳞屑,鳞屑很厚成层', value: 4.0, checked: false },	  
        ]
      },	  
     
	  {
        name: '下肢(含臀部)皮损面积',
        items: [
          { name: '0', value: 0.0, checked: false },
          { name: '1-9%', value: 1.0, checked: false },
          { name: '10-29%', value: 2.0, checked: false },
          { name: '30-49%', value: 3.0, checked: false },
          { name: '50-69%', value: 4.0, checked: false },
          { name: '70-89%', value: 5.0, checked: false },
          { name: '90-100%', value: 6.0, checked: false },
        ]
      },
      {
        name: '下肢(含臀部)浸润(I)严重程度',
        items: [
          { name: '皮损与正常皮肤平齐', value: 0.0, checked: false },
          { name: '皮损轻微高出于正常皮肤表面', value: 1.0, checked: false },
          { name: '中等程度隆起,斑块的边缘为圆或斜坡型', value: 2.0, checked: false },
          { name: '皮损肥厚,隆起明显', value: 3.0, checked: false },
          { name: '皮损高度增厚,隆起极为明显', value: 4.0, checked: false },
        ]
      },
      {
        name: '下肢(含臀部)红斑(E)严重程度',
        items: [
          { name: '无红斑可见', value: 0.0, checked: false },
          { name: '呈淡红色', value: 1.0, checked: false },
          { name: '红色', value: 2.0, checked: false },
          { name: '深红色', value: 3.0, checked: false },
          { name: '红色极深', value: 4.0, checked: false },
        ]
      },
      {
        name: '下肢(含臀部)表皮脱屑/鳞屑(D)严重程度',
        items: [
          { name: '表面无可见鳞屑', value: 0.0, checked: false },
          { name: '部分皮损表面上覆有鳞屑,以细微的鳞屑为主', value: 1.0, checked: false },
		      { name: '大多数皮损表面完全或不完全覆有鳞屑,鳞屑呈片状', value: 2.0, checked: false },
          { name: '几乎全部皮损表面覆有鳞屑,鳞屑较厚成层', value: 3.0, checked: false },
		      { name: '全部皮损表面均覆有鳞屑,鳞屑很厚成层', value: 4.0, checked: false },	  
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
      path: '/pages/PASI/index',
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

    var dataIntArr = [];//保存转换后的整型字符串

    dataIntArr = dataStrArr.map(function (data) {
      return +data;});

    console.log('为：', dataIntArr)

    var that = this
    var iScores = that.data.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.iScores)

    this.sumall();
  },
  
  sumall: function () {
   
      let score =0;
      var iScores = this.data.iScores;
	  
      for (var i = 0; i < 4; i++) {
        score += (iScores[i*4+1]+iScores[i*4+2]+iScores[i*4+3])*iScores[i*4]*0.1*(i+1);
      }
	       
      console.log(score) 

      score = score.toFixed(0);
           
      this.setData({
        iScore: score
      })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScore: 0.0,
    })
  },
});

