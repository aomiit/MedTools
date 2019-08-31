//获取应用实例
var app = getApp();

Page({


  data: {  
    iScore:0,
    iScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    gitems:[
      {
        name: '人际关系',
        items: [
          { name: '与年龄相当；与年龄相符的害羞、自卫及表示不同意。', value: 1.0, checked: false },
          { name: '轻度异常：缺乏一些眼光接触，不愿意，回避，过分害羞，对检查者反应有轻度缺陷。', value: 2.0, checked: false },
          { name: '中度异常：回避人，要使劲打扰他才能得到反应。', value: 3.0, checked: false },
          { name: '严重异常：强烈地回避，儿童对检查者很少反应，只有检查者强烈地干扰，才能产生反应。', value: 4.0, checked: false },
        ]
      },
      {
        name: '模仿(词和动作)',
        items: [
          { name: '与年龄相当：与年龄相符的模仿。', value: 1.0, checked: false },
          { name: '轻度异常：大部分时间都模仿，有时激动，有时延缓。', value: 2.0, checked: false },
          { name: '中度异常：在检查者极大的要求下有时模仿。', value: 3.0, checked: false },
          { name: '重度异常：很少用语言或运动模仿他人。', value: 4.0, checked: false },
        ]
      },
      {
        name: '情感反应',
        items: [
          { name: '与年龄相当：与年龄、情境相适应的情感反应--愉快不愉快，以及兴趣，通过面部表情姿势的变化来表达。', value: 1.0, checked: false },
          { name: '轻度异常：对不同的情感刺激有些缺乏相应的反应，情感可能受限或过份。', value: 2.0, checked: false },
          { name: '中度异常：不适当的情感的示意，反应相当受限或过份，或往往与刺激无关。', value: 3.0, checked: false },
          { name: '严重异常：极刻板的情感反应，对检查者坚持改变的情境很少产生适当的反应。', value: 4.0, checked: false },
        ]
      },
      {
        name: '躯体运用能力',
        items: [
          { name: '与年龄相当：与年龄相适应的利用和意识。', value: 1.0, checked: false },
          { name: '轻度异常：躯体运用方面有点特殊--某些刻板运动，笨拙，缺乏协调性。', value: 2.0, checked: false },
          { name: '中度异常：有中度特殊的手指或身体姿势功能失调的征象，摇动旋转，手指摆动，脚尖走。', value: 3.0, checked: false },
          { name: '重度异常：如上述所描述的严重而广泛地发生。', value: 4.0, checked: false },
        ]
      },
      {
        name: '与非生命物体的关系',
        items: [
          { name: '与年龄相当：适合年龄的兴趣运用和探索。', value: 1.0, checked: false },
          { name: '轻度异常：轻度的对东西缺乏或不适当地使用物体，象婴儿一样咬东西，猛敲东西，或者迷恋于物体发出的吱吱叫声或不停地开灯、关灯。', value: 2.0, checked: false },
          { name: '中度异常：对多数物体缺乏兴趣或表现有些特别，如重复转动某件物体，反复用手指尖捏起东西，旋转轮子或对某部分着迷。', value: 3.0, checked: false },
          { name: '严重异常：严重的对物体的不适当的兴趣，使用和探究，如上边发生的情况频繁的发生，很难使儿童分心。', value: 4.0, checked: false },
        ]
      },
      {
        name: '对环境变化的适应',
        items: [
          { name: '与年龄相当：对改变产生与年龄相适应的反应。', value: 1.0, checked: false },
          { name: '轻度异常：对环境改变产生某些反应，倾向维持某一物体活动或坚持相同的反应形式。', value: 2.0, checked: false },
          { name: '中度异常：对环境改变出现烦躁、沮丧的征象，当干扰他时很难被吸引过来。', value: 3.0, checked: false },
          { name: '严重异常：对改变产生严重的反应，假如坚持把环境的变化强加给他，儿童可能逃跑。', value: 4.0, checked: false },
        ]
      },
      {
        name: '视觉反应',
        items: [
          { name: '与年龄相当：适合年龄的视觉反应，与其他感觉系统是整合方式。', value: 1.0, checked: false },
          { name: '轻度异常：有时必须提醒儿童去注意物体，有时全神贯注于"镜象"，有的回避眼光接触，有的凝视空间，有的着迷于灯光。', value: 2.0, checked: false },
          { name: '中度异常：经常要提醒他们正在干什么，喜欢观看光亮的物体，即使强迫他，也只有很少的眼光接触，盯着看人，或凝视空间。', value: 3.0, checked: false },
          { name: '重度异常：对物体和人的广泛严重的视觉回避，着迷于使用"余光"。', value: 4.0, checked: false },
        ]
      },
      {
        name: '听觉反应',
        items: [
          { name: '与年龄相当：适合年龄的听觉反应。', value: 1.0, checked: false },
          { name: '轻度异常：对听觉刺激或某些特殊声音缺乏一些反应，反应可能延迟，有时必须重复声音刺激，有时对大的声音敏感，或对此声音分心。', value: 2.0, checked: false },
          { name: '中度异常：对听觉不构成反应，或必须重复数次刺激才产生反应，或对某些声音敏感(如很容易受惊，捂上耳朵等)。', value: 3.0, checked: false },
          { name: '重度异常：对声音全面回避，对声音类型不加注意或极度敏感。', value: 4.0, checked: false },
        ]
      },
      {
        name: '近处感觉反应',
        items: [
          { name: '与年龄相当：对疼痛产生适当强度的反应，正常触觉和嗅觉。', value: 1.0, checked: false },
          { name: '轻度异常：对疼痛或轻度触碰，气味、味道等有点缺乏适当的反应，有时出现一些婴儿吸吮物体的表现。', value: 2.0, checked: false },
          { name: '中度异常：对疼痛或意外伤害缺乏反应，比较集中于触觉、嗅觉、味觉。', value: 3.0, checked: false },
          { name: '严重异常：过度的集中于触觉的探究感觉而不是功能的作用(吸吮、舔或磨擦)，完全忽视疼痛或过分地作出反应。', value: 4.0, checked: false },
        ]
      },
      {
        name: '焦虑反应',
        items: [
          { name: '与年龄相当：对情境产生与年龄相适应的反应，并且反应无延长。', value: 1.0, checked: false },
          { name: '轻度异常：轻度焦虑反应。', value: 2.0, checked: false },
          { name: '中度异常：中度焦虑反应。', value: 3.0, checked: false },
          { name: '严重异常：严重的焦虑反应，可能儿童在会见的一段时间内不能坐下，或很害怕，或退缩等。', value: 4.0, checked: false },
        ]
      },
      {
        name: '语言交流',
        items: [
          { name: '与年龄相当：适合年龄的语言。', value: 1.0, checked: false },
          { name: '轻度异常：语言迟钝，多数语言有意义，但有一点模仿语言。', value: 2.0, checked: false },
          { name: '中度异常：缺乏语言或有意义的语言与不适当的语言相混淆(模仿言语或莫名其妙的话)。', value: 3.0, checked: false },
          { name: '严重异常： 严重的不正常言语，实质上缺乏可理解的语言或运用特殊的离奇的语言。', value: 4.0, checked: false },
        ]
      },     
      {
        name: '非语言交流',
        items: [
          { name: '与年龄相当：与年龄相符的非语言性交流。', value: 1.0, checked: false },
          { name: '轻度异常：非语言交流迟钝，交往仅为简单的或含糊的反应，如指出或去取他想要的东西。', value: 2.0, checked: false },
          { name: '中度异常：缺乏非语言交往，儿童不会利用或对非语言的交往作出反应。', value: 3.0, checked: false },
          { name: '严重异常：特别古怪的和不可理解的非语言的交往。', value: 4.0, checked: false },
        ]
      },
      {
        name: '活动很大',
        items: [
          { name: '与年龄相当：正常活动水平--不多动亦不少动。', value: 1.0, checked: false },
          { name: '轻度异常：轻度不安静或有轻度活动缓慢，但一般可控制。', value: 2.0, checked: false },
          { name: '中度异常：活动相当多，并且控制其活动量有困难，或者相当不活动或运动缓慢，检查者很频繁地控制或以极大努力才能得到反应。', value: 3.0, checked: false },
          { name: '严重异常：极不正常的活动水平，要么是不停，要么是冷淡的，很难得到儿童对任何事件的反应，差不多不断地需要大人控制。', value: 4.0, checked: false },
        ]
      },
      {
        name: '智力功能',
        items: [
          { name: '与年龄相当：正常智力功能--无迟钝的证据。', value: 1.0, checked: false },
          { name: '轻度异常：轻度智力低下--技能低下表现在各个领域。', value: 2.0, checked: false },
          { name: '中度异常：中度智力低下--某些技能明显迟钝，其他的接近年龄水平。', value: 3.0, checked: false },
          { name: '严重异常：智力功能严重障碍--某些技能表现迟钝，另外一些在年龄水平以上或不寻常。', value: 4.0, checked: false },
        ]
      },
      {
        name: '总的印象',
        items: [
          { name: '与年龄相当：不是孤独症。', value: 1.0, checked: false },
          { name: '轻度异常：轻微的或轻度孤独症。', value: 2.0, checked: false },
          { name: '中度异常：孤独症的中度征象。', value: 3.0, checked: false },
          { name: '严重异常：非常多的孤独症征象。', value: 4.0, checked: false },
        ]
      }
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
      path: '/pages/CARS/index',
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

    for (var i = 0, len = iScores.length; i < len; i++) {
      score += iScores[i];
    }
    
    console.log(score) 

    var showScore = "评分:" + score.toFixed(0) ;

    var msg = null;

    if (score < 30) {
      msg = "正常儿童"
    }
    if (score >= 30 && score <= 36) {
      msg = "轻中度孤儿症"
    }
    if (score > 36) {
      msg = "重度孤儿症危险。注意：总分需要大于36分并且5项以上达3分或大于3分时才可以判断"
    }
   
    this.setData({
      iScore: showScore,
      iContent: msg,
    })
  },
 
  //清空重置
  formReset: function () {

    console.log('reset触发')

    this.setData({
      iScore: null,
      iContent: "",
    })
  },
});

