// pages/userinfo/userinfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = wx.getStorageSync("user");
    if(user==null){
      wx.navigateTo({url: '/pages/index/index'})
    }
    else{
      this.setData({
        userInfo: wx.getStorageSync("user")
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toMyfile: function(){
    wx.navigateTo({
      url: '/pages/myfile/myfile',
    })
  },
  toShare: function(){
    wx.navigateTo({
      url: '/pages/share/share',
    })
  },
  toResource: function(){
    wx.navigateTo({
      url: '/pages/resource/resource',
    })
  },
  toUserinfo: function(){
    wx.navigateTo({
      url: '/pages/userinfo/userinfo',
    })
  }
})