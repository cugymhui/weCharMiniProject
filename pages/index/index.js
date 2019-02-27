//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '昨夜西风凋碧树，独上高楼，望尽天涯路',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../main/main'
    })
    // wx.navigateTo({
    //   url: '../main/main'
    // })
  },
  

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
  onReady() {
    // Do something when page ready.
    console.log("OnReady!");
  },
  onShow() {
    // Do something when page show.
    console.log("OnShow");
  },
  onHide() {
    // Do something when page hide.
    console.log("OnHide");
  },
  onUnload() {
    // Do something when page close.
    console.log("OnUnload");
  },
  onPullDownRefresh() {
    // Do something when pull down.
    console.log("OnPullDownRefresh");
  },
  onReachBottom() {
    // Do something when page reach bottom.
    console.log("OnReachBottom");
  },
  onShareAppMessage() {
    // return custom share data when user share.
    console.log("shareAppMessage");
  },
  onPageScroll() {
    // Do something when page scroll
    console.log("PageScroll");
  },
  onResize() {
    // Do something when page resize
    console.log("Resize");
  }
})
