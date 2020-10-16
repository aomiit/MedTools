//获取应用实例
var app = getApp();

Page({
  data: {     
	balance:{		
		title :'GWB总体幸福感量表(中国版)',
		iScores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],	
		gitems:[
		  {
			name: '1.你的总体感觉怎样(在过去的一个月里)?',
			items: [
			  { name: '精神很不好', value: 1.0, checked: false },
			  { name: '精神不好', value: 2.0, checked: false },
			  { name: '精神时好时坏', value: 3.0, checked: false },
			  { name: '精神不错', value: 4.0, checked: false },
			  { name: '精神很好', value: 5.0, checked: false },
			  { name: '好极了', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '2.你是否为自己的神经质或“神经病”感到烦恼(在过去的一个月里)?',
			items: [
			  { name: '极端烦恼', value: 1.0, checked: false },
			  { name: '相当烦恼', value: 2.0, checked: false },
			  { name: '有些烦恼', value: 3.0, checked: false },
			  { name: '很少烦恼', value: 4.0, checked: false },
			  { name: '一点也不烦恼', value: 5.0, checked: false },
			]
		  },
		  {
		    name: '3.你是否一直牢牢地控制着自己的行为、思维、情感或感觉(在过去的一个月里)?',
			items: [
			  { name: '非常混乱', value: 1.0, checked: false },
			  { name: '有些混乱', value: 2.0, checked: false },
			  { name: '控制得不好', value: 3.0, checked: false },
			  { name: '一般来说是的', value: 4.0, checked: false },
			  { name: '大部分是的', value: 5.0, checked: false },
			  { name: '绝对的', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '4.你是否由于悲哀、失去信心、失望或有许多麻烦而怀疑还有任何事情值得去做(在过去的一个月里)?',
			items: [
			  { name: '极端怀疑', value: 1.0, checked: false },
			  { name: '非常怀疑', value: 2.0, checked: false },
			  { name: '相当怀疑', value: 3.0, checked: false },
			  { name: '有些怀疑', value: 4.0, checked: false },
			  { name: '略微怀疑', value: 5.0, checked: false },
			  { name: '一点也不怀疑', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '5.你是否正在受到或曾经受到任何约束、刺激或压力(在过去的一个月里)?',
			items: [
			  { name: '相当多', value: 1.0, checked: false },
			  { name: '不少', value: 2.0, checked: false },
			  { name: '有些', value: 3.0, checked: false },
			  { name: '不多', value: 4.0, checked: false },
			  { name: '没有', value: 5.0, checked: false },
			]
		  },
		  {
		    name: '6.你的生活是否幸福、满足或愉快(在过去的一个月里)?',
			items: [
			  { name: '非常不满足', value: 1.0, checked: false },
			  { name: '略有些不满足', value: 2.0, checked: false },
			  { name: '满足', value: 3.0, checked: false },
			  { name: '相当幸福', value: 4.0, checked: false },
			  { name: '非常幸福', value: 5.0, checked: false },
			]
		  },
		  {
		    name: '7.你是否有理由怀疑自己曾经失去理智、或对行为、谈话、思维或记忆失去控制(在过去的一个月里)?',
			items: [
			  { name: '是的,非常严重', value: 1.0, checked: false },
			  { name: '有些,有些严重', value: 2.0, checked: false },
			  { name: '有些,不严重', value: 3.0, checked: false },
			  { name: '只有一点点', value: 4.0, checked: false },
			  { name: '一点也没有', value: 5.0, checked: false },
			]
		  },	
		  {
		    name: '8.你是否感到焦虑、担心或不安(在过去的一个月里)?',
			items: [
			  { name: '极端严重', value: 1.0, checked: false },
			  { name: '非常严重', value: 2.0, checked: false },
			  { name: '相当严重', value: 3.0, checked: false },
			  { name: '有些', value: 4.0, checked: false },
			  { name: '很少', value: 5.0, checked: false },
			  { name: '无', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '9.你睡醒后是否感到头脑清晰和精力充沛(在过去的一个月里)?',
			items: [
			  { name: '无', value: 1.0, checked: false },
			  { name: '很少', value: 2.0, checked: false },
			  { name: '不多', value: 3.0, checked: false },
			  { name: '相当频繁', value: 4.0, checked: false },
			  { name: '几乎天天', value: 5.0, checked: false },
			  { name: '天天如此', value: 6.0, checked: false },
			]
		  },		
		  {
		    name: '10.你是否因为疾病、身体的不适、疼痛或对患病恐惧而烦恼(在过去的一个月里)?',
			items: [
			  { name: '所有的时间', value: 1.0, checked: false },
			  { name: '大部分时间', value: 2.0, checked: false },
			  { name: '很多时间', value: 3.0, checked: false },
			  { name: '有时', value: 4.0, checked: false },
			  { name: '偶尔', value: 5.0, checked: false },
			  { name: '无', value: 6.0, checked: false },
			]
			},	
			{
				name: '11.你每天的生活中是否充满了让你感兴趣的事情(在过去的一个月里)?',
			items: [
			  { name: '无', value: 1.0, checked: false },
			  { name: '偶尔', value: 2.0, checked: false },
			  { name: '有时', value: 3.0, checked: false },
			  { name: '很多时间', value: 4.0, checked: false },
			  { name: '大部分时间', value: 5.0, checked: false },
			  { name: '所有的时间', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '12.你是否感到沮丧和忧郁(在过去的一个月里)?',
			items: [
			  { name: '所有的时间', value: 1.0, checked: false },
			  { name: '大部分时间', value: 2.0, checked: false },
			  { name: '很多时间', value: 3.0, checked: false },
			  { name: '有时', value: 4.0, checked: false },
			  { name: '偶尔', value: 5.0, checked: false },
			  { name: '无', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '13.你是否情绪稳定并能把握住自己(在过去的一个月里)?',
			items: [
			  { name: '无', value: 1.0, checked: false },
			  { name: '偶尔', value: 2.0, checked: false },
			  { name: '有时', value: 3.0, checked: false },
			  { name: '很多时间', value: 4.0, checked: false },
			  { name: '大部分时间', value: 5.0, checked: false },
			  { name: '所有的时间', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '14.你是否感到疲劳、过累、无力或精疲力竭(在过去的一个月里)?',
			items: [
			  { name: '所有的时间', value: 1.0, checked: false },
			  { name: '大部分时间', value: 2.0, checked: false },
			  { name: '很多时间', value: 3.0, checked: false },
			  { name: '有时', value: 4.0, checked: false },
			  { name: '偶尔', value: 5.0, checked: false },
			  { name: '无', value: 6.0, checked: false },
			]
		  },
		  {
		    name: '15.你对自己健康关心或担忧的程度如何(在过去的一个月里)?',
			items: [
			  { name: '1-不关心', value: 10.0, checked: false },
			  { name: '2', value: 9.0, checked: false },
			  { name: '3', value: 8.0, checked: false },
			  { name: '4', value: 7.0, checked: false },
			  { name: '5', value: 6.0, checked: false },
			  { name: '6', value: 5.0, checked: false },
			  { name: '7', value: 4.0, checked: false },
			  { name: '8', value: 3.0, checked: false },
			  { name: '9', value: 2.0, checked: false },
			  { name: '10-非常关心', value: 1.0, checked: false },
			]
		  },
		  {
		    name: '16.你感到放松或紧张的程度如何(在过去的一个月里)?',
			items: [
			  { name: '1-松驰', value: 10.0, checked: false },
			  { name: '2', value: 9.0, checked: false },
			  { name: '3', value: 8.0, checked: false },
			  { name: '4', value: 7.0, checked: false },
			  { name: '5', value: 6.0, checked: false },
			  { name: '6', value: 5.0, checked: false },
			  { name: '7', value: 4.0, checked: false },
			  { name: '8', value: 3.0, checked: false },
			  { name: '9', value: 2.0, checked: false },
			  { name: '10-紧张', value: 1.0, checked: false },
			]
		  },
		  {
		    name: '17.你感觉自己的精力、精神和活力如何(在过去的一个月里)?',
			items: [
			  { name: '1-无精打采', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7', value: 7.0, checked: false },
			  { name: '8', value: 8.0, checked: false },
			  { name: '9', value: 9.0, checked: false },
			  { name: '10-精力充沛', value: 10.0, checked: false },
			]
		  },	
		  {
		    name: '18.你忧郁或快乐的程度如何(在过去的一个月里)?',
			items: [
			  { name: '1-非常忧郁', value: 1.0, checked: false },
			  { name: '2', value: 2.0, checked: false },
			  { name: '3', value: 3.0, checked: false },
			  { name: '4', value: 4.0, checked: false },
			  { name: '5', value: 5.0, checked: false },
			  { name: '6', value: 6.0, checked: false },
			  { name: '7', value: 7.0, checked: false },
			  { name: '8', value: 8.0, checked: false },
			  { name: '9', value: 9.0, checked: false },
			  { name: '10-非常快乐', value: 10.0, checked: false },
			]
		  },		  
		]
	},
	
	iSex:'Male',
	iScoreTotal:0,
  iScore1:0,
	iScore2:0,
	iScore3:0,
	iScore4:0,
	iScore5:0,
	iScore6:0,
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
      path: '/pages/GWB/index',
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
  
  sumall: function () {
		let iSex = this.data['iSex']
		
		let uscore =0;
		var iScores = this.data.balance.iScores;

		for (var i = 0, len = iScores.length; i < len; i++) {
			uscore += iScores[i];
		}	  
     
	  var s2 = iScores[5] + iScores[10];
	  var s3 = iScores[9] + iScores[14];
		var s4 = iScores[0] + iScores[8] + iScores[13] + iScores[16];
		var s5 = iScores[3] + iScores[0] + iScores[17];
		var s6 = iScores[2] + iScores[6] + iScores[12];
		var s7 = iScores[1] + iScores[4] + iScores[7] + iScores[15];

		var msg = null;
	  
		var totalscore = uscore.toFixed(0);
		
		console.log(iSex);
		console.log(totalscore);
		console.log(s2);
  
	  if (iSex == "Male"&& totalscore < 75) {
        msg = "您的幸福感低于平均水平"
    }
    if (iSex == "Male" && totalscore >= 75) {
        msg = "您的幸福感大于等于平均水平"
    }
    if (iSex == "Female" && totalscore < 71) {
        msg = "您的幸福感低于平均水平"
    }
    if (iSex == "Female" && totalscore >= 71) {
        msg = "您的幸福感大于等于平均水平"
    }

		this.setData({
			iScoreTotal: totalscore,
			iScore1: s2,
			iScore2: s3,
			iScore3: s4,
			iScore4: s5,
			iScore5: s6,
			iScore6: s7,	
			iContent:msg,		
		})
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScoreTotal: 0.0,
			iScore1: 0.0,
			iScore2: 0.0,
			iScore3: 0.0,
			iScore4: 0.0,
			iScore5: 0.0,
			iScore6: 0.0,	  
			iContent:"",
    })
  },
});

