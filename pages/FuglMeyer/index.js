//获取应用实例
var app = getApp();

Page({


  data: {  
   
	upper:{		
		title :'上肢--坐位 ',
		iScores: [0,0,0,0,0,0,0,0,0,0,
				  0,0,0,0,0,0,0,0,0,0,
				  0,0,0,0,0,0,0,0,0,0,
				  0,0,0],

		gitems:[
		  {
			name: '1.肱二头肌有无反射活动?',
			items: [
			  { name: '不能', value: 0.0, checked: false },
			  { name: '能', value: 2.0, checked: false },
			]
		  },
		  {
			name: '2.肱三头肌有无反射活动?',
			items: [
			  { name: '否', value: 0.0, checked: false },
			  { name: '是', value: 2.0, checked: false },
			]
		  },
		  {
			name: '3.屈肌协同运动-肩上提?',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false },
			]
		  },
		  {
			name: '4.屈肌协同运动-肩后缩?',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false },
			]
		  },
		  {
			name: '5.屈肌协同运动-肩外展≥90度?',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false },
			]
		  },
		  {
			name: '6.屈肌协同运动-肩外旋?',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false },
			]
		  },	 
		  {
			name: '7.屈肌协同运动-肘屈曲?',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false },
			]
		  },
		  {
			name: '8.屈肌协同运动-前臂旋后?',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false },
			]
		  },	  
		  {
			name: '9.伸肌协同运动-肩内收、内旋',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false }, 
			]
		  },    
		  {
			name: '10.伸肌协同运动-肘伸展',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false }, 
			]
		  }, 
		  {
			name: '11.伸肌协同运动-前臂旋前',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '部分完成', value: 1.0, checked: false },
			  { name: '充分完成', value: 2.0, checked: false }, 
			]
		  }, 
		  
		  {
			name: '12.伴协同运动的活动-手触腰椎',
			items: [
			  { name: '没有明显活动', value: 0.0, checked: false },
			  { name: '手仅可向后越过髂前上棘', value: 1.0, checked: false },
			  { name: '能顺利完成', value: 2.0, checked: false }, 
			]
		  }, 
		  {
			name: '13.伴协同运动的活动-肩关节屈曲90度,前臂旋前、旋后',
			items: [
			  { name: '开始时手臂立即外展或肘关节屈曲', value: 0.0, checked: false },
			  { name: '在接近规定位置时肩关节外展或肘关节屈曲', value: 1.0, checked: false },
			  { name: '能顺利充分完成', value: 2.0, checked: false }, 
			]
		  }, 
		  {
			name: '14.伴协同运动的活动-肩0度,屈肘90度,前臂旋前、旋后',
			items: [
			  { name: '不能屈肘或前臂,不能旋前', value: 0.0, checked: false },
			  { name: '肩、肘位正确，基本能旋前、旋后', value: 1.0, checked: false },
			  { name: '能顺利完成', value: 2.0, checked: false }, 
			]
		  }, 		  
		  {
			name: '15.分离运动-肩关节外展90度时肘关节0度，前臂旋前',
			items: [
			  { name: '开始时肘就屈曲，前臂偏离方向不能旋前', value: 0.0, checked: false },
			  { name: '部分完成动作或肘关节屈曲或前臂不能旋前', value: 1.0, checked: false },
			  { name: '顺利完成', value: 2.0, checked: false }, 
			]
		  }, 		  
		  {
			name: '16.分离运动-肩关节前屈举臂过头肘伸直前臂中立位',
			items: [
			  { name: '开始时肘关节屈曲或肩关节外展', value: 0.0, checked: false },
			  { name: '肩屈曲中途，肘关节屈曲，肩关节外展', value: 1.0, checked: false },
			  { name: '顺利完成', value: 2.0, checked: false }, 
			]
		  }, 	
		  {
			name: '17.分离运动-肩屈曲30度－90度时肘伸直,前臂旋前旋后',
			items: [
			  { name: '开始时肘就屈曲，前臂偏离方向不能旋前', value: 0.0, checked: false },
			  { name: '部分完成动作或肘关节屈曲或前臂不能旋前', value: 1.0, checked: false },
			  { name: '顺利完成', value: 2.0, checked: false }, 
			]
		  }, 	
		  {
			name: '18.反射亢进-肱二头肌腱、肱三头肌腱、指屈反射',
			items: [
			  { name: '至少2－3个反射明显亢进', value: 0.0, checked: false },
			  { name: '1个反射明显亢进或至少2个反射活跃', value: 1.0, checked: false },
			  { name: '活跃反射≤1个且无反射亢进', value: 2.0, checked: false }, 
			]
		  }, 			  
		  {
			name: '19.腕稳定性-肩0度，肘屈90度腕背屈',
			items: [
			  { name: '不能背屈腕关节达15度', value: 0.0, checked: false },
			  { name: '可完成腕背屈，但不能抗拒阻力', value: 1.0, checked: false },
			  { name: '施加轻微阻力仍可保持腕背屈', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '20.腕稳定性-肩0度，肘屈90度腕屈伸',
			items: [
			  { name: '不能随意屈伸', value: 0.0, checked: false },
			  { name: '不能在全关节范围内主动活动腕关节', value: 1.0, checked: false },
			  { name: '不停顿进行', value: 2.0, checked: false }, 
			]
		  },		  
		  {
			name: '21.肘伸直，肩前屈30度时-腕背屈',
			items: [
			  { name: '不能背屈腕关节达15度', value: 0.0, checked: false },
			  { name: '可完成腕背屈，但不能抗拒阻力', value: 1.0, checked: false },
			  { name: '施加轻微阻力可保持腕背屈', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '22.肘伸直，肩前屈30度时-腕屈伸',
			items: [
			  { name: '不能随意屈伸', value: 0.0, checked: false },
			  { name: '不能在全关节范围内主动活动腕关节', value: 1.0, checked: false },
			  { name: '能平滑不停顿的进行', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '23.肘伸直，肩前屈30度时-腕环行运动',
			items: [
			  { name: '不能进行', value: 0.0, checked: false },
			  { name: '活动费力或不完全', value: 1.0, checked: false },
			  { name: '正常完成', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '24.手指-集团屈曲',
			items: [
			  { name: '不能屈曲', value: 0.0, checked: false },
			  { name: '能屈曲但不充分能放松主动屈曲的手指', value: 1.0, checked: false },
			  { name: '能完成主动屈曲和伸展', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '25.手指-集团伸展',
			items: [
			  { name: '不能伸展', value: 0.0, checked: false },
			  { name: '能放松主动屈曲的手指', value: 1.0, checked: false },
			  { name: '能完全主动伸展', value: 2.0, checked: false }, 
			]
		  },		  
		  {
			name: '26.手指-钩状抓握',
			items: [
			  { name: '不能保持要求位置', value: 0.0, checked: false },
			  { name: '握力微弱', value: 1.0, checked: false },
			  { name: '能抵抗相当大阻力', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '27.手指-侧捏',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '能用拇指捏住一张纸，但不能抵抗拉力', value: 1.0, checked: false },
			  { name: '可牢牢捏住纸', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '28.手指-对捏(拇食指可挟住一根铅笔)',
			items: [
			  { name: '完全不能', value: 0.0, checked: false },
			  { name: '捏力微弱', value: 1.0, checked: false },
			  { name: '能抵抗相当大阻力', value: 2.0, checked: false }, 
			]
		  },		  
		  {
			name: '29.手指-圆柱状抓握',
			items: [
			  { name: '不能保持要求位置', value: 0.0, checked: false },
			  { name: '握力微弱', value: 1.0, checked: false },
			  { name: '能抵抗相当大阻力', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '30.手指-球形抓握',
			items: [
			  { name: '不能保持要求位置', value: 0.0, checked: false },
			  { name: '握力微弱', value: 1.0, checked: false },
			  { name: '能抵抗相当大阻力', value: 2.0, checked: false }, 
			]
		  },		  
		  {
			name: '31.协同能力与速度(手指指鼻试验连续5次)-震颤',
			items: [
			  { name: '明显震颤', value: 0.0, checked: false },
			  { name: '轻度震颤 ', value: 1.0, checked: false },
			  { name: '无震颤', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '32.协同能力与速度(手指指鼻试验连续5次)-辨距障碍',
			items: [
			  { name: '明显或不规则', value: 0.0, checked: false },
			  { name: '轻度或规则 ', value: 1.0, checked: false },
			  { name: '无', value: 2.0, checked: false }, 
			]
		  },
		  {
			name: '33.协同能力与速度(手指指鼻试验连续5次)-震颤',
			items: [
			  { name: '较健侧长6秒', value: 0.0, checked: false },
			  { name: '较健侧长2－5秒', value: 1.0, checked: false },
			  { name: '两侧差别<2秒', value: 2.0, checked: false }, 
			]
		  } 
		]
	},
	
	lower:{		
		title :'下肢',
		iScores: [0,0,0,0,0,0,0,0,0,0,
				  0,0,0,0,0,0,0],

		gitems:[
		  {
			name: '1.有无反射活动-跟腱反射(仰卧位)?',
			items: [
			  { name: '无反射活动', value: 0.0, checked: false },
			  { name: '有反射活动', value: 2.0, checked: false },
			]
		  },
		  {
			name: '2.有无反射活动-膝腱反射(仰卧位)?',
			items: [
			  { name: '无反射活动', value: 0.0, checked: false },
			  { name: '有反射活动', value: 2.0, checked: false },
			]
		  },
		  {
			name: '3.屈肌协同运动-髋关节屈曲(仰卧位)?',
			items: [
			  { name: '不能进行', value: 0.0, checked: false },
			  { name: '部分进行', value: 1.0, checked: false },
			  { name: '充分进行', value: 2.0, checked: false },
			]
		  },
		  {
			name: '4.屈肌协同运动-膝关节屈曲(仰卧位)?',
			items: [
			  { name: '不能进行', value: 0.0, checked: false },
			  { name: '部分进行', value: 1.0, checked: false },
			  { name: '充分进行', value: 2.0, checked: false },
			]
		  },
		  {
			name: '5.屈肌协同运动-踝关节屈曲(仰卧位)?',
			items: [
			  { name: '不能进行', value: 0.0, checked: false },
			  { name: '部分进行', value: 1.0, checked: false },
			  { name: '充分进行', value: 2.0, checked: false },
			]
		  },
		  {
			name: '6.伸肌协同运动-髋关节伸展(仰卧位)?',
			items: [
			  { name: '没有运动', value: 0.0, checked: false },
			  { name: '微弱运动', value: 1.0, checked: false },
			  { name: '几乎与对侧相同', value: 2.0, checked: false },
			]
		  },		  
		  {
			name: '7.伸肌协同运动-膝关节伸展(仰卧位)?',
			items: [
			  { name: '没有运动', value: 0.0, checked: false },
			  { name: '微弱运动', value: 1.0, checked: false },
			  { name: '几乎与对侧相同', value: 2.0, checked: false },
			]
		  },	
		  {
			name: '8.伸肌协同运动-踝关节伸展(仰卧位)?',
			items: [
			  { name: '没有运动', value: 0.0, checked: false },
			  { name: '微弱运动', value: 1.0, checked: false },
			  { name: '几乎与对侧相同', value: 2.0, checked: false },
			]
		  },	
		  {
			name: '9.伸肌协同运动-踝关节跖屈(仰卧位)?',
			items: [
			  { name: '没有运动', value: 0.0, checked: false },
			  { name: '微弱运动', value: 1.0, checked: false },
			  { name: '几乎与对侧相同', value: 2.0, checked: false },
			]
		  },
		  {
			name: '10.伴协同运动的活动-膝关节屈曲(坐位)?',
			items: [
			  { name: '无主动运动', value: 0.0, checked: false },
			  { name: '膝关节能从微伸位屈曲，但<90度', value: 1.0, checked: false },
			  { name: '屈曲>90度', value: 2.0, checked: false },
			]
		  },	
		  {
			name: '11.伴协同运动的活动-踝关节背曲(坐位)?',
			items: [
			  { name: '不能主动背屈', value: 0.0, checked: false },
			  { name: '主动背屈不完', value: 1.0, checked: false },
			  { name: '正常背屈站立', value: 2.0, checked: false },
			]
		  },
		  {
			name: '12.脱离协同运动的活动-膝关节背屈(站位)?',
			items: [
			  { name: '在髋关节伸展位时不能屈膝', value: 0.0, checked: false },
			  { name: '髋关节0度时膝关节能屈  曲<90度，或进行时髋屈曲', value: 1.0, checked: false },
			  { name: '能自如运动', value: 2.0, checked: false },
			]
		  },
		  {
			name: '13.脱离协同运动的活动-踝关节背屈坐位(站位)?',
			items: [
			  { name: '不能自主活动', value: 0.0, checked: false },
			  { name: '能部分背屈', value: 1.0, checked: false },
			  { name: '能充分背屈', value: 2.0, checked: false },
			]
		  },	
		  {
			name: '14.反射亢进-查跟腱、膝和膝屈肌三张反射(坐位)?',
			items: [
			  { name: '2－3个明显亢进', value: 0.0, checked: false },
			  { name: '1个反射亢进或2个反射活跃', value: 1.0, checked: false },
			  { name: '活跃的反射≤1', value: 2.0, checked: false },
			]
		  },	
		  {
			name: '15.协调能力和速度(跟-膝-胫试验,快速连续作5次)-震颤(仰卧位)?',
			items: [
			  { name: '明显震颤', value: 0.0, checked: false },
			  { name: '轻度震颤', value: 1.0, checked: false },
			  { name: '无震颤', value: 2.0, checked: false },
			]
		  },	
		  {
			name: '16.协调能力和速度(跟-膝-胫试验,快速连续作5次)-辨距障碍(仰卧位)?',
			items: [
			  { name: '明显不规则', value: 0.0, checked: false },
			  { name: '轻度规则', value: 1.0, checked: false },
			  { name: '无', value: 2.0, checked: false },
			]
		  },
		  {
			name: '17.协调能力和速度(跟-膝-胫试验,快速连续作5次)-速度(仰卧位)?',
			items: [
			  { name: '比健侧长6秒', value: 0.0, checked: false },
			  { name: '比健侧长2－5秒', value: 1.0, checked: false },
			  { name: '比健侧长2秒', value: 2.0, checked: false },
			]
		  },		  
		 ]
	},
	
	iScoreLower:0,	
	iScoreUpper:0,
	iTotalScore:0,
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
      path: '/pages/FuglMeyer/index',
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
    var iScores = that.data.upper.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.upper.iScores)

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
    var iScores = that.data.lower.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：',this.data.lower.iScores)

    this.sumall();
  },
  
  sumall: function () {
   
      let uscore =0;
	  let lscore =0;
      var iScores = this.data.upper.iScores;

      for (var i = 0, len = iScores.length; i < len; i++) {
        uscore += iScores[i];
      }
	  
	  iScores = this.data.lower.iScores;
	  
	  for (var i = 0, len = iScores.length; i < len; i++) {
        lscore += iScores[i];
      }
      
      console.log(uscore) 
	  console.log(lscore) 
      var msg = null;
	  var msg1 = null;
	  
	  var totalscore = uscore+ lscore; 

      totalscore = totalscore.toFixed(0);

		if (totalscore < 50) {
			msg = "I级，严重运动障碍"
		}
		else if(totalscore >= 50 && totalscore < 85)
		{
			msg = "II级，明显运动障碍"
		}
		else if(totalscore >= 85 && totalscore < 96)
		{
			msg = "III级，中度运动障碍"
		}
		else
		{
			msg = "IV级，轻度运动障碍"
		}

      this.setData({
        iScoreUpper: uscore,
		iScoreLower: lscore,
        iTotalScore: totalscore,
		iContent: msg,
      })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScoreUpper: 0.0,
	  iScoreLower: 0.0,
      iTotalScore: 0.0,
	  iContent: ""
    })
  },
});

