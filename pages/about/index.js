//获取应用实例
import wxapp from "../../vendor/wxapp-client-sdk/index";
var app = getApp();
Page({
    data: {
        linkList:null
    },

    onLoad: function() {
        let that=this;
        app.getAppConfig(function(config){
            console.log('about-config',config)
            that.setData({
                linkList:config.linkList
            })
        });
    },
    
    callMobile:function(ev){
        let mobile=ev.target.dataset.mobile;
        wx.makePhoneCall({
            phoneNumber: mobile
        })
    }
})
