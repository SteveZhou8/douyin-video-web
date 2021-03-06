//app.js
App({
  //后台地址
  serverUrl: "http://localhost:8080",
  //用户信息
  userInfo: null,

  setGlobalUserInfo: function(user) {
    wx.setStorageSync("userInfo", user)
  },

  getGlobalUserInfo: function() {
    return wx.getStorageSync("userInfo")
  },

  reportReasonArray: [
    "色情低俗",
    "政治敏感",
    "涉嫌诈骗",
    "辱骂谩骂",
    "广告垃圾",
    "诱导分享",
    "引人不适",
    "过于暴力",
    "违法违纪",
    "其它原因"
  ]
})