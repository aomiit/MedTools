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
      //{ id: 30, url: '../IQ1/index', caption: '智商测试一', collected: false }, 
      
    ]
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