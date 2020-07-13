//获取应用实例
var app = getApp();

Page({
  data: {     
		balance:{		
			title :'平衡测试:患者坐在没有扶手的硬椅子上',
			iScores: [0,0,0,0,0,0,0,0,0],

			gitems:[
				{
				name: '1.坐位平衡',
				items: [
					{ name: '斜靠或从椅子上滑下', value: 0.0, checked: false },
					{ name: '稳定	', value: 1.0, checked: false },
				]
				},
				{
				name: '2.起身',
				items: [
					{ name: '没有帮助就无法完成', value: 0.0, checked: false },
					{ name: '用胳膊帮助才能完成	', value: 1.0, checked: false },
					{ name: '不用胳膊就能完成', value: 2.0, checked: false },
				]
				},
				{
				name: '3.试图起身',
				items: [
					{ name: '没有帮助就无法完成', value: 0.0, checked: false },
					{ name: '需要尝试1次以上才能完成', value: 1.0, checked: false },
					{ name: '1次尝试就能完成', value: 1.0, checked: false },
				]
				},
				{
				name: '4.立即站起来时平衡功能(站起的头5秒)',
				items: [
					{ name: '不稳(摇晃，移动脚步，明显躯干摆动)', value: 0.0, checked: false },
					{ name: '稳定,但是需要助行器或手杖,或抓住其他物体支撑', value: 1.0, checked: false },			
					{ name: '稳定,不需要助行器或手杖,或抓住其他物体支撑', value: 0.0, checked: false },
				]
				},		
				{
				name: '5.坐下时平衡',
				items: [
					{ name: '不稳', value: 0.0, checked: false },
					{ name: '稳定,但是两脚距离较宽[足跟中点间距离大于4英寸(1英寸=2.54cm)],或使用手杖、助行器或其他支撑', value: 1.0, checked: false },
					{ name: '稳定,两脚距离较窄,且不需要支撑', value: 2.0, checked: false },
				]
				}, 
				{
				name: '6.轻推(患者双脚尽可能靠拢站立,用手轻推3次)',
				items: [
					{ name: '开始就会摔倒', value: 0.0, checked: false },
					{ name: '摇晃并要抓东西,但是只抓自己', value: 1.0, checked: false },
					{ name: '稳定', value: 2.0, checked: false },
				]
				},
				{
				name: '7.闭眼(同第6姿势)',
				items: [
					{ name: '不稳', value: 0.0, checked: false },
					{ name: '稳定', value: 1.0, checked: false },
				]
				},		
				{
				name: '8.转身360°',
				items: [
					{ name: '不连续的步骤', value: 0.0, checked: false },
					{ name: '不稳定(手臂及身体摇晃)', value: 1.0, checked: false },
					{ name: '稳定', value: 2.0, checked: false },
				]
				},
				{
				name: '9.坐下',
				items: [
					{ name: '不安全', value: 0.0, checked: false },
					{ name: '用胳膊或动作不连贯', value: 1.0, checked: false },
					{ name: '安全且动作连贯', value: 2.0, checked: false },
				]
				},		  
			]
		},
		
		gait:{		
			title :'步态测试:以舒适速度,使用辅具___,走三公尺,需__秒。',
			iScores: [0,0,0,0,0,0,0,0,0,0],

			gitems:[
				{
				name: '1.起步',
				items: [
					{ name: '有迟疑，或须尝试多次方能启动', value: 0.0, checked: false },
					{ name: '正常启动	', value: 1.0, checked: false },
				]
				},
				{
				name: '2.抬脚高度a.左脚跨步',
				items: [
					{ name: '脚拖地,或抬高大于1-2英寸', value: 0.0, checked: false },
					{ name: '脚完全离地,但不超过1-2英寸', value: 1.0, checked: false },
				]
				},
				{
				name: '2.抬脚高度b.右脚跨步',
				items: [
					{ name: '脚拖地,或抬高大于1-2英寸', value: 0.0, checked: false },
					{ name: '脚完全离地,但不超过1-2英寸', value: 1.0, checked: false },
				]
				},
				{
				name: '3.步长a.左脚跨步',
				items: [
					{ name: '跨步的脚未超过站立的对侧脚', value: 0.0, checked: false },
					{ name: '有超过站立的对侧脚', value: 1.0, checked: false },
				]
				},
				{
				name: '3.步长b.右脚跨步',
				items: [
					{ name: '跨步的脚未超过站立的对侧脚', value: 0.0, checked: false },
					{ name: '有超过站立的对侧脚', value: 1.0, checked: false },
				]
				},
				{
				name: '4.步态对称性',
				items: [
					{ name: '两脚步长不等', value: 0.0, checked: false },
					{ name: '两脚步长相等', value: 1.0, checked: false },				
				]
				},		
				{
				name: '5.步伐连续性',
				items: [
					{ name: '步伐与步伐之间不连续或中断', value: 0.0, checked: false },
					{ name: '步伐连续', value: 1.0, checked: false },
				]
				}, 
				{
				name: '6.走路路径(行走大约三公尺长)',
				items: [
					{ name: '明显偏移到某一边', value: 0.0, checked: false },
					{ name: '轻微/中度偏移或使用步行辅具', value: 1.0, checked: false },
					{ name: '走直线,且不需辅具', value: 2.0, checked: false },
				]
				},
				{
				name: '7.躯干稳定',
				items: [
					{ name: '身体有明显摇晃或需使用步行辅具', value: 0.0, checked: false },
					{ name: '身体不晃,但需屈膝或有背痛或张开双臂以维持平衡', value: 1.0, checked: false },
					{ name: '身体不晃,无屈膝,不需张开双臂或使用辅具', value: 2.0, checked: false },
				]
				},		
				{
				name: '8.步宽(脚跟距离)',
				items: [
					{ name: '脚跟分开(步宽大)', value: 0.0, checked: false },
					{ name: '走路时两脚跟几乎靠在一起', value: 1.0, checked: false },
				]
				},		  
			]
		},
	
		iScoreBalance:0,
		iScoreGait:0,
		iScoreTotal:0,
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
      path: '/pages/Tinetti/index',
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
    var iScores = that.data.balance.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.balance.iScores)

    this.sumall();
  },  
  
  radioChange2: function (e) {

    console.log('发生change事件，携带value值为：', e.detail.value)

    var dataStrArr = e.detail.value.split(":");//分割成字符串数组

    var dataIntArr = [];//保存转换后的整型字符串

    dataIntArr = dataStrArr.map(function (data) {
      return +data;});

    console.log('为：', dataIntArr)

    var that = this
    var iScores = that.data.gait.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.gait.iScores)

    this.sumall();
  },
  
  sumall: function () {
   
      let bscore =0;
      var iScores = this.data.balance.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        bscore += iScores[i];
      }	  
	  
	  	let gscore =0;
	 	  iScores = this.data.gait.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        gscore += iScores[i];
      }	  
          
      console.log(bscore) 
	  	console.log(gscore) 

      var msg = null;
	  
			var totalscore = bscore + gscore;

			if (totalscore < 15) {
				msg = "有跌倒的危险性"
			}
			else if(totalscore < 24)
			{
				msg = "平衡功能障碍" 
			}	
			else
			{
				msg = "正常"	
			}	  

      this.setData({
				iScoreBalance: bscore.toFixed(0),
				iScoreGait: gscore.toFixed(0),
				iScoreTotal:totalscore.toFixed(0),
				iContent: msg,
      })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
			iScoreBalance: 0.0,
			iScoreGait: 0,
			iScoreTotal:0,
	  	iContent: ""
    })
  },
});

