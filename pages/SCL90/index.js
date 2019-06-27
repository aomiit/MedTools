//获取应用实例
var app = getApp();

Page({
  data: {
    iScore: 0,
    iScores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    subScores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    items: [
      { name: '没有', value: 1.0, checked: false },
      { name: '很轻', value: 2.0, checked: false },
      { name: '中等', value: 3.0, checked: false },
      { name: '偏重', value: 4.0, checked: false },
      { name: '严重', value: 5.0, checked: false },
    ],

    gitems: [
      {        				
        name: '1．头痛',
      },
      {
        name: '2．神经过敏，心中不踏实',
      },
      {
        name: '3．头脑中有不必要的想法或字句盘旋',
      },
      {
        name: '4．头昏或昏倒',
      },
      {
        name: '5．对异性的兴趣减退',
      },
      {
        name: '6．对旁人责备求全',
      },
      {
        name: '7．感到别人能控制你的思想',
      },
      {
        name: '8．责怪别人制造麻烦',
      },
      {
        name: '9．忘性大',
      },
      {
        name: '10. 担心自己的衣饰整齐及仪态的端正 ',
      },
      {
        name: '11．容易烦恼和激动',
      },
      {
        name: '12．胸痛 ',
      },
      {
        name: '13．害怕空旷的场所或街道',
      },
      {
        name: '14．感到自己的精力下降，活动减慢',
      },
      {
        name: '15．想结束自己的生命',
      },
      {
        name: '16．听到旁人听不到的声音',
      },
      {
        name: '17．发抖',
      },
      {
        name: '18．感到大多数人都不可信任 ',
      },
      {
        name: '19．胃口不好     ',
      },
      {
        name: '20．容易哭泣  ',
      },
      {
        name: '21．同异性相处时感到害羞不自在',
      },
      {
        name: '22．感到受骗、中了圈套或有人想抓住你 ',
      },
      {
        name: '23．无缘无故地突然感到害怕 ',
      },
      {
        name: '24．自己不能控制地大发脾气',
      },
      {
        name: '25．怕单独出门   ',
      },
      {
        name: '26．经常责怪自己',
      },
      {
        name: '27．腰痛    ',
      },
      {
        name: '28．感到难以完成任务',
      },
      {
        name: '29．感到孤独   ',
      },
      {
        name: '30．感到苦闷  ',
      },
      {
        name: '31．过分担忧  ',
      },
      {
        name: '32．对事物不感兴趣   ',
      },
      {
        name: '33．感到害怕    ',
      },
      {
        name: '34．感情容易受到伤害 ',
      },
      {
        name: '35．旁人能知道你的想法',
      },
      {
        name: '36．感到别人不理解  ',
      },
      {
        name: '37．感到人们对你不友好，不喜欢你',
      },
      {
        name: '38．做事必须做得很慢以保证做得正确 ',
      },
      {
        name: '39．心跳得很厉害  ',
      },
      {
        name: '40．恶心或胃部不舒服',
      },
      {
        name: '41．感到比不上他人 ',
      },
      {
        name: '42．肌肉酸痛  ',
      },
      {
        name: '43．感到有人在监视你、谈论你',
      },
      {
        name: '44．难以入睡   ',
      },
      {
        name: '45．做事必须反复检查   ',
      },
      {
        name: '46．难以作出决定',
      },
      {
        name: '47．怕乘电车、公共汽车、地铁或火车',
      },
      {
        name: '48．呼吸有困难 ',
      },
      {
        name: '49．一阵阵发冷或发热  ',
      },
      {
        name: '50．因为感到害怕而避开某些东西、场合或活动 ',
      },
      {
        name: '51．脑子变空了',
      },
      {
        name: '52．身体发麻或刺痛',
      },
      {
        name: '53．喉咙有梗塞感',
      },
      {
        name: '54．感到前途没有希望  ',
      },
      {
        name: '55．不能集中注意',
      },
      {
        name: '56．感到身体的某一部分软弱无力',
      },
      {
        name: '57．感到紧张或容易紧张',
      },
      {
        name: '58．感到手或脚发重',
      },
      {
        name: '59．想到死亡的事',
      },
      {
        name: '60．吃得太多',
      },
      {
        name: '61．当别人看着你或谈论你时感到不自在',
      },
      {
        name: '62．有一些不属于你自己的想法',
      },
      {
        name: '63．有想打人或伤害他人的冲动',
      },
      {
        name: '64．醒得太早',
      },
      {
        name: '65．必须反复洗手，清点数目或触摸某些东西',
      },
      {
        name: '66．睡得不稳不深',
      },
      {
        name: '67．有想摔坏或破坏东西的冲动',
      },
      {
        name: '68．有一些别人没有的想法或念头',
      },
      {
        name: '69．感到对别人神经过敏   ',
      },
      {
        name: '70．在商店或电影院等人多的地方感到不自在',
      },
      {
        name: '71．感到任何事情都很困难',
      },
      {
        name: '72．一阵阵恐惧或惊恐',
      },
      {
        name: '73．感到在公共场合吃东西很不舒服',
      },
      {
        name: '74．经常与人争论',
      },
      {
        name: '75．单独一人时神经很紧张',
      },
      {
        name: '76．别人对你的成绩没有作出恰当的评价',
      },
      {
        name: '77．即使和别人在一起也感到孤单',
      },
      {
        name: '78．感到坐立不安、心神不定',
      },
      {
        name: '79．感到自己没有什么价值 ',
      },
      {
        name: '80．感到熟悉的东西变成陌生或不像是真的',
      },

      {
        name: '81．大叫或摔东西 ',
      },
      {
        name: '82．害怕会在公共场合昏倒  ',
      },
      {
        name: '83．感到别人想占你的便宜',
      },
      {
        name: '84．为一些有关“性”的想法而很苦恼',
      },
      {
        name: '85．认为应该因为自己的过错而受到惩罚',
      },

      {
        name: '86．感到要赶快把事情做完',
      },
      {
        name: '87．感到自己的身体有严重问题',
      },
      {
        name: '88．从未感到和其他人很亲近',
      },
      {
        name: '89．感到自己有罪',
      },
      {
        name: '90．感到自己的脑子有毛病',
      },
     
    ],

    iContent: "",

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
      path: '/pages/SCL90/index',
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
      return +data;
    });

    console.log('为：', dataIntArr)

    var that = this
    var iScores = that.data.iScores;
    iScores[dataIntArr[0]] = dataIntArr[1];

    this.setData({
      iScores: iScores
    })

    console.log('为：', this.data.iScores)
  },

  sumall: function () {

    let score = 0;
    var iScores = this.data.iScores;
    var subScores = this.data.subScores;

    for (var i = 0, len = iScores.length; i < len; i++) {
      score += iScores[i];
    }

    console.log(score)
    var sscore = score * 1.25;

    var meanscore = score/90;

    var showScore = "总分:" + score.toFixed(0) + ",总均分:" + meanscore.toFixed(4) + ",标准分:" + sscore.toFixed(1);

    var qth = iScores[0] + iScores[3] + iScores[11] + iScores[26] + iScores[39] + iScores[41] + iScores[47] + iScores[48] + iScores[51] + iScores[52] + iScores[55] + iScores[57];
    var qpz = iScores[2] + iScores[8] + iScores[9] + iScores[27] + iScores[37] + iScores[44] + iScores[45] + iScores[50] + iScores[54] + iScores[64];
    var rjmg = iScores[5] + iScores[20] + iScores[33] + iScores[35] + iScores[36] + iScores[40] + iScores[60] + iScores[68] + iScores[72];
    var yiyu = iScores[4] + iScores[13] + iScores[14] + iScores[19] + iScores[21] + iScores[25] + iScores[28] + iScores[29] + iScores[30] + iScores[31] + iScores[53] + iScores[70] + iScores[78];
    var jiaolv = iScores[1] + iScores[16] + iScores[22] + iScores[32] + iScores[38] + iScores[56] + iScores[71] + iScores[78] + iScores[79] + iScores[85];
    var didui = iScores[10] + iScores[23] + iScores[62] + iScores[66] + iScores[73] + iScores[80];
    var kongbu = iScores[12] + iScores[24] + iScores[46] + iScores[49] + iScores[69] + iScores[74] + iScores[81];
    var pz = iScores[7] + iScores[17] + iScores[42] + iScores[67] + iScores[75] + iScores[82];
    var jsb = iScores[6] + iScores[15] + iScores[34] + iScores[61] + iScores[77] + iScores[83] + iScores[84] + iScores[86] + iScores[87] + iScores[89];
    var qita = iScores[18] + iScores[43] + iScores[58] + iScores[59] + iScores[63] + iScores[65] + iScores[88];

    var qth1 = (qth / 12).toFixed(4);
    var qpz1 = (qpz / 10).toFixed(4);
    var rjmg1 = (rjmg / 9).toFixed(4);
    var yiyu1 = (yiyu / 13).toFixed(4);
    var jiaolv1 = (jiaolv / 10).toFixed(4);
    var didui1 = (didui / 6).toFixed(4);
    var kongbu1 = (kongbu / 7).toFixed(4);
    var pz1 = (pz / 6).toFixed(4);
    var jsb1 = (jsb / 10).toFixed(4);
    var qita1 = (qita / 7).toFixed(4);

    subScores[0] = "躯体化分:" + qth + "分" + ",均分:" + qth1;
    subScores[1] = "强迫症状:" + qpz + "分" + ",均分:" + qpz1;
    subScores[2] = "人际敏感:" + rjmg + "分" + ",均分:" + rjmg1;
    subScores[3] = "抑郁症状:" + yiyu + "分" + ",均分:" + yiyu1;
    subScores[4] = "焦虑症状:" + jiaolv + "分" + ",均分:" + jiaolv1;
    subScores[5] = "敌对症状:" + didui + "分" + ",均分:" + didui1;
    subScores[6] = "恐怖症状:" + kongbu + "分" + ",均分:" + kongbu1;
    subScores[7] = "偏执症状:" + pz + "分" + ",均分:" + pz1;
    subScores[8] = "饮食睡眠:" + qita + "分" + ",均分:" + qita1;
    subScores[9] = "精神症状:" + jsb + "分" + ",均分:" + jsb1;

    this.setData({
      iScore: showScore,
      subScores: subScores,
    })
  },

  onCompute: function () {
    this.sumall();
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