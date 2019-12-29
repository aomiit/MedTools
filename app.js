var qcloud = require('./vendor/wxapp-client-sdk/index');
var config = require('./etc/config');

App({
  globalData: {
    bannerList: null,
    areaList:null,
    userInfo:null,
    linkList:null,
    indexArea:{hname:'',hprice:''},
    objectArray: [
      { id: 0, url: '../NNT/index', caption: '需要治疗人数NNT计算', collected: false },
      { id: 1, url: '../bed/index', caption: 'BED计算器', collected: false },
      { id: 2, url: '../na/index', caption: '补钠计算器', collected: false },
      { id: 3, url: '../fe/index', caption: '补铁计算器', collected: false },
      { id: 4, url: '../lca/index', caption: '低白蛋白血症时钙浓度校正', collected: false },
      { id: 5, url: '../carb/index', caption: '卡铂AUC剂量计算器', collected: false },
      { id: 6, url: '../bmr/index', caption: '能量计算器(BMI/BMR/卡路里)', collected: false },
      { id: 7, url: '../bs/index', caption: '体表面积药物用量计算器', collected: false },
      { id: 8, url: '../TNM/index/index', caption: 'TNM分期工具(AJCC第八版)', collected: false },
      { id: 9, url: '../pe/index', caption: '肺栓塞(PE)Well评分', collected: false },   
      { id: 10, url: '../peg/index', caption: '肺栓塞(PE)改良日内瓦评分', collected: false }, 
      { id: 11, url: '../pesi/index', caption: '肺栓塞(PE)严重指数PESI', collected: false }, 
      { id: 12, url: '../ecog/index', caption: '肿瘤患者ECOG体力状态评分', collected: false },    
      { id: 13, url: '../vrs/index', caption: '癌痛主诉疼痛分级法', collected: false },
      { id: 14, url: '../PADUA/index', caption: '肾脏肿瘤PADUA评分', collected: false },
      { id: 15, url: '../cpadua/index', caption: '内科住院患者静脉血栓栓塞症风险因素PADUA评分', collected: false },
      { id: 16, url: '../gcr/index', caption: '胃癌高危人群风险预测', collected: false },
      { id: 17, url: '../hcr/index', caption: '低钠血症钠校正率', collected: false }, 
      { id: 18, url: '../dvtg/index', caption: '深静脉血栓DVT改良的Wells评分', collected: false }, 
      { id: 19, url: '../gyh/index', caption: '肝硬化死亡率的Child-Pugh评分', collected: false },
      { id: 20, url: '../SDS/index', caption: 'SDS抑郁自评量表', collected: false },
      { id: 21, url: '../SAS/index', caption: 'SAS焦虑自评量表', collected: false },
      { id: 22, url: '../SCL90/index', caption: 'SCL90症状自评量表', collected: false },
      { id: 23, url: '../beck/index', caption: '贝克抑郁自评量表', collected: false },
      { id: 24, url: '../CARS/index', caption: '儿童孤独症评定量表', collected: false },
      { id: 25, url: '../Bayes1/index', caption: '贝叶斯统计Ⅰ', collected: false },
      { id: 26, url: '../Bayes2/index', caption: '贝叶斯统计Ⅱ', collected: false },
      { id: 27, url: '../PPV/index', caption: '单一检测阳性预测值', collected: false },
      { id: 28, url: '../GCS/index', caption: 'GLASGOW昏迷评分', collected: false },
      { id: 29, url: '../APACHE2/index', caption: 'APACHEⅡ评分系统和死亡率评估', collected: false }, 
      { id: 30, url: '../Alvarado/index', caption: '2016版Alvarado评分', collected: false }, 
      { id: 31, url: '../eGFR/index', caption: 'eGFR计算器', collected: false }, 
	    { id: 32, url: '../PGFR/index', caption: '小儿eGFR计算器', collected: false }, 
      { id: 33, url: '../MMSE/index', caption: '简易精神状态评价量表MMSE', collected: false }, 
      { id: 34, url: '../cpis/index', caption: '临床肺部感染评分CPIS', collected: false },  
      { id: 35, url: '../CRUSADE/index', caption: 'CRUSADE出血风险评估', collected: false },  
	    { id: 36, url: '../STAF/index', caption: 'STAF房颤鉴别评分', collected: false }, 
	    { id: 37, url: '../LADS/index', caption: 'LADS房颤鉴别评分', collected: false }, 
      { id: 38, url: '../PGLANCE/index', caption: 'PGLANCE心力衰竭患者冠状动脉旁路移植术围术期死亡风险评分系统', collected: false }, 
	    { id: 39, url: '../REVEAL/index', caption: '肺动脉高压患者REVEAL风险评分', collected: false }, 
      { id: 40, url: '../diab/index', caption: '糖尿病风险评分', collected: false }, 
      { id: 41, url: '../Autar/index', caption: '深静脉血栓(DVT)Autar评估表', collected: false },
      { id: 42, url: '../Khorana/index', caption: '恶性肿瘤患者静脉血栓风险Khorana评分', collected: false },
      { id: 43, url: '../GRACE/index', caption: 'GRACE缺血风险评分-院内评分', collected: false },
      { id: 44, url: '../GRACE2/index', caption: 'GRACE缺血风险评分-出院评分', collected: false },
      { id: 45, url: '../CHA2DS2VA/index', caption: '房颤患者卒中预防风险CHA2DS2-VASc评分', collected: false },
      { id: 46, url: '../CHA2DS2/index', caption: '房颤患者卒中预防风险CHA2DS2评分', collected: false },
      { id: 47, url: '../GWTG/index', caption: 'GWTG-HF心衰院内死亡率评分', collected: false },
	        
	    //{ id: 35, url: '../CPAR/index', caption: '心脑血管病风险预测China-PAR', collected: false }, 
      //{ id: 30, url: '../IQ1/index', caption: '智商测试一', collected: false }, 
      
    ],
    listGroup: [
      {
        id: 'MYFAVORITE',
        name: '我的收藏',
        open: false,
        ids: []
      },
      {
        id: 'ALL',
        name: '全科',
        open: false,
        ids: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
             41,42,43,44,45,46,47]
      },
      {
        id: 'ONCOLOGY',
        name: '肿瘤学',
        open: false,
        ids: [1, 5, 8, 13, 14, 16, 42]
      }, 
      {
        id: 'CV',
        name: '心血管',
        open: false,
        ids: [18,35,36,37,38,39,43,44,45,46,47]
      }, 
      {
        id: 'STAT',
        name: '统计学',
        open: false,
        ids: [0,25,26,27]
      }, 
      {
        id: 'PSY',
        name: '精神心理',
        open: false,
        ids: [20,21,22,23,24,33]
      }, 
      {
        id: 'GAST',
        name: '呼吸',
        open: false,
        ids: [9, 10, 11, 12,34]
      }, 
      {
        id: 'ECC',
        name: '急重症科',
        open: false,
        ids: [6, 7, 15, 18, 28, 29, 30, 31, 32, 41, 42]
      }, 
      {
        id: 'NURS',
        name: '护理',
        open: false,
        ids: [2, 3, 4, 6, 7,17, 19,32]
      }, 
      {
        id: 'ENDO',
        name: '内分泌科',
        open: false,
        ids: [6,40]
      }, 
    ],
  },

  onLaunch() {
    qcloud.setLoginUrl(config.service.loginUrl);
    this.getConfig();

    var postsCollected = wx.getStorageSync('posts_Collected')
    if (postsCollected) {
      if (postsCollected.length == this.globalData.objectArray.length) {

        this.globalData.objectArray = postsCollected

        //console.log(this.globalData.objectArray);
      }
      else {
        for (var i = 0; i < postsCollected.length; i++) {
          let currentIndex = this.globalData.objectArray.findIndex(item => item.id == postsCollected[i].id)
          this.globalData.objectArray[currentIndex].collected = postsCollected[i].collected;
        }

        wx.setStorageSync('posts_Collected', this.globalData.objectArray);
      }
    }
    else {
      wx.setStorageSync('posts_Collected', this.globalData.objectArray);
    }
    
  },
  getAppConfig: function(fn,bool) {
    var that = this;
    if(that.globalData.bannerList && that.globalData.linkList && !bool){
      typeof fn == "function" && fn(that.globalData)
    }else{
      that.getConfig(function(data){
        typeof fn == "function" && fn(data);
      });
    }
  },
  getConfig: function (fn) {
    var that = this;
    qcloud.request({
      url: config.service.configUrl,
      method: 'POST',
      login: true,
      success(res){
        //console.log('程序配置项', res);
        let data=res.data.data;
        if (res.data.success) {
          that.globalData.bannerList=data.banner;
          that.globalData.areaList=data.areaList;
          that.globalData.userInfo=data.userInfo;
          that.globalData.linkList=data.linkList;
          typeof fn == "function" && fn(that.globalData);
        }
      }
    });
  },
});
