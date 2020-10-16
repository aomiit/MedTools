'use strict';
// getOpenid 云函数
const cloud = require('wx-server-sdk')
wx.cloud.init()
exports.main = (event, context, callback) => {
  const wxContext = cloud.getWXContext()
  //callback(null, event);
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
