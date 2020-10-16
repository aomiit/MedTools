//获取应用实例
var app = getApp();

Page({
  data: {     
	balance:{		
		title :'平衡功能',
		iScores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],

		gitems:[
		  {
			name: '1.坐到站。指令：请站起来，尝试不要用手支撑',
			items: [
			  { name: '不需要帮助独立稳定的站立', value: 4.0, checked: false },
			  { name: '需要手的帮助，独立的由坐到站', value: 3.0, checked: false },
			  { name: '需要手的帮助并且需要尝试几次才能站立', value: 2.0, checked: false },
			  { name: '需要别人最小的帮助来站立或稳定', value: 1.0, checked: false },
			  { name: '需要中度或最大帮助来站立', value: 0.0, checked: false },
			]
		  },
		  {
			name: '2.无支撑的站立。指令：请在无支撑的情况下站立2分钟',
			items: [
			  { name: '能安全站立2分钟', value: 4.0, checked: false },
			  { name: '在监护下站立２分钟', value: 3.0, checked: false },
			  { name: '无支撑下站立30秒', value: 2.0, checked: false },
			  { name: '需要尝试几次才能无支撑站立30秒', value: 1.0, checked: false },
			  { name: '不能独立的站30秒', value: 0.0, checked: false },
			]
		  },
		  {
			name: '3.无支撑下坐位，双脚放在地板上或凳子上。指令：请合拢双上肢坐2分钟',
			items: [
			  { name: '能安全地坐2分钟', value: 4.0, checked: false },
			  { name: '无靠背支持地坐2分钟，但需要监护', value: 3.0, checked: false },
			  { name: '能坐30秒', value: 2.0, checked: false },
			  { name: '能坐10秒', value: 1.0, checked: false },
			  { name: '在无支撑的情况下不能坐10秒', value: 0.0, checked: false },
			]
		  },
		  {
			name: '4.从站到坐。指令：请坐下',
			items: [
			  { name: '能安全地坐下', value: 4.0, checked: false },
			  { name: '需要用手的帮助来控制下降', value: 3.0, checked: false },
			  { name: '需要用腿的后边靠在椅子上来控制下降', value: 2.0, checked: false },
			  { name: '能独立坐下，但不能控制下降速度', value: 1.0, checked: false },
			  { name: '需要帮助才能坐下', value: 0.0, checked: false },
			]
		  },
		  {
			name: '5.转移。 指令：摆好椅子，让受检者转移到有扶手的椅子上及无扶手的椅子上。可以使用二把椅子（一把有扶手，一把无扶手）或一张床及一把椅子',
			items: [
			  { name: '需要手的少量帮助即可安全转移', value: 4.0, checked: false },
			  { name: '需要手的充分帮助才能安全转移', value: 3.0, checked: false },
			  { name: '需要语言提示或监护下才能转移', value: 2.0, checked: false },
			  { name: '需要一人帮助', value: 1.0, checked: false },
			  { name: '需要二人帮助或监护下才能安全转移', value: 0.0, checked: false },
			]
		  },
		  {
			name: '6.闭目站立。指令：请闭上眼睛站立10秒',
			items: [
			  { name: '能安全地站立10秒', value: 4.0, checked: false },
			  { name: '在监护情况下站立10秒', value: 3.0, checked: false },
			  { name: '能站3秒', value: 2.0, checked: false },
			  { name: '站立很稳，但闭眼不能超过3秒', value: 1.0, checked: false },
			  { name: '需帮助防止跌倒', value: 0.0, checked: false },
			]
		  },	 
		  {
			name: '7.双足并拢站立。指令：请你在无帮助下双脚并拢站立',
			items: [
			  { name: '双脚并拢时能独立安全地站1分钟', value: 4.0, checked: false },
			  { name: '在监护情况下站1分钟', value: 3.0, checked: false },
			  { name: '能独立将双脚并拢但不能维持30秒', value: 2.0, checked: false },
			  { name: '需帮助双脚才能并拢，但能站立15秒', value: 1.0, checked: false },
			  { name: '需要帮助双脚并拢，不能站立15秒', value: 0.0, checked: false },
			]
		  },
		  {
			name: '8.站立情况下双上肢前伸距离。 指令；将上肢抬高90度，将手指伸直并最大可能前伸。上肢上举90度后，将尺子放在手指末梢。记录经最大努力前倾时手指前伸的距离。如果可能的话，让受检者双上肢同时前伸以防止躯干旋转。',
			items: [
			  { name: '能够前伸超过25厘米', value: 4.0, checked: false },
			  { name: '能够安全前伸超过12厘米', value: 3.0, checked: false },
			  { name: '能够前伸超过5厘米', value: 2.0, checked: false },
			  { name: '在监护的情况下能够前伸', value: 1.0, checked: false },
			  { name: '在试图前伸时失去平衡', value: 0.0, checked: false },
			]
		  },
		  {
			name: '9.站立位从地面拾物',
			items: [
			  { name: '能安全容易地捡起拖鞋', value: 4.0, checked: false },
			  { name: '在监护下能捡起拖鞋', value: 3.0, checked: false },
			  { name: '不能捡起拖鞋但能达到离鞋2~5厘米处而可独立保持平衡', value: 2.0, checked: false },
			  { name: '不能捡起，而且捡的过程需要监护', value: 1.0, checked: false },
			  { name: '不能进行', value: 0.0, checked: false },
			]
		  },
		  {
			name: '10.站立位从左肩及右肩上向后看。指令：从左肩上向后看，再从右肩上向后看。检查者在受检者正后方拿个东西，鼓励患者转身',
			items: [
			  { name: '可从左右向后看，重心转移好', value: 4.0, checked: false },
			  { name: '可从一边看，从另一边看重心转移少', value: 3.0, checked: false },
			  { name: '仅能从侧方转身但能保持平衡', value: 2.0, checked: false },
			  { name: '转身时需要监护', value: 1.0, checked: false },
			  { name: '需要帮助来预防失去平衡或跌倒', value: 0.0, checked: false },
			]
		  },
		  {
			name: '11.原地旋转360度。指令：旋转完整1周，暂停，然后从另一方向旋转完整1周',
			items: [
			  { name: '左右方向均可在4秒内完成360度旋转', value: 4.0, checked: false },
			  { name: '只能在一个方向4秒内完成旋转360度', value: 3.0, checked: false },
			  { name: '能安全旋转360度但速度慢', value: 2.0, checked: false },
			  { name: '需要严密的监护或语言提示', value: 1.0, checked: false },
			  { name: '在旋转时需要帮助', value: 0.0, checked: false },
			]
		  },
		  {
			name: '12.无支撑站立情况下用双脚交替踏台阶。指令：请交替用脚踏在台阶上或踏板上，连续做直到每只脚接触台阶/踏板4次',
			items: [
			  { name: '能独立安全地在20秒内踏8次', value: 4.0, checked: false },
			  { name: '能独立安全踏8次，但时间超过20秒', value: 3.0, checked: false },
			  { name: '在监护下完成4次，但不需要帮助', value: 2.0, checked: false },
			  { name: '在轻微帮助下完成2次', value: 1.0, checked: false },
			  { name: '需要帮助预防跌倒/不能进行', value: 0.0, checked: false },
			]
		  },
		  {
			name: '13.无支撑情况下双脚前后站立。指令：将一只脚放在另一只脚的正前方。如果这样不行的话，可扩大步幅，前脚后跟应在后脚脚趾的前面（在评定3分时，步幅超过另一只脚的长度，宽度接近正常人走步宽度）',
			items: [
			  { name: '脚尖对脚跟站立没有距离，持续30秒', value: 4.0, checked: false },
			  { name: '脚尖对脚跟站立有距离，持续30秒', value: 3.0, checked: false },
			  { name: '脚向前迈一小步但不在一条直线上，持续30秒', value: 2.0, checked: false },
			  { name: '帮助下脚向前迈一步，但可维持15秒', value: 1.0, checked: false },
			  { name: '迈步或站立时失去平衡', value: 0.0, checked: false },
			]
		  },	 
		  {
			name: '14.单腿站立。指令：不需帮助情况下尽最大努力单腿站立',
			items: [
			  { name: '能用单腿站立并维持10秒以上', value: 4.0, checked: false },
			  { name: '能用单腿站立并能维持5~10秒', value: 3.0, checked: false },
			  { name: '能用单腿站立并能站立3秒或以上', value: 2.0, checked: false },
			  { name: '能抬腿，不能维持3秒', value: 1.0, checked: false },
			  { name: '不能进行或需要帮助预防跌倒', value: 0.0, checked: false },
			]
		  }
		]
	},
	

	iScoreBalance:0,
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
      path: '/pages/BergBalance/index',
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
  
  sumall: function () {
   
      let uscore =0;
      var iScores = this.data.balance.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        uscore += iScores[i];
      }	  
     
      console.log(uscore) 

      var msg = null;
	  
	  var totalscore = uscore.toFixed(0);

	  if (totalscore <= 20) {
		msg = "平衡功能差，患者需要乘坐轮椅"
	  }
	  else if(totalscore <=40)
	  {
		msg = "有一定平衡能力，患者可在辅助下步行" 
	  }
	  else
	  {
		msg = "平衡功能较好，患者可独立步行"	
	  }	  

      this.setData({
        iScoreBalance: uscore,
		iContent: msg,
      })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScoreBalance: 0.0,
	  iContent: ""
    })
  },
});

