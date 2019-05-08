//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    //TODO
    dishesClassList: [{
      name: '今日推荐',
      id: '0'
    }, {
      name: '鲁菜',
      id: '1'
    }, {
      name: '川菜',
      id: '2'
    }, {
      name: '粤菜',
      id: '3'
    }, {
      name: '闽菜',
      id: '4'
    }, {
      name: '苏菜',
      id: '5'
    }, {
      name: '浙菜',
      id: '6'
    }, {
      name: '湘菜',
      id: '7'
    }, {
      name: '徽菜',
      id: '8'
    }],
    //TODO
    dishesInfoList: [{
      name: '干炸里脊',
      id: '0'
    }, {
      name: '鱼香肉丝',
      id: '1'
    }, {
      name: '糖醋鲤鱼',
      id: '2'
    }, {
      name: '三文鱼',
      id: '3'
    }, {
      name: '糖醋小排',
      id: '4'
    }, {
      name: '鲷鱼',
      id: '5'
    }, {
      name: '龙利鱼',
      id: '6'
    }, {
      name: '馄钝',
      id: '7'
    }, {
      name: '饺子',
      id: '8'
    }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    toView: 'red',
    scrollTop: 100
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //TODO
  getDishesByClassId: function(e) {
    this.setData({
      dishesInfoList: [{
        name: '三文鱼',
        id: '10'
      }, {
        name: '糖醋小排',
        id: '11'
      }, {
        name: '鲷鱼',
        id: '12'
      }, {
        name: '龙利鱼',
        id: '13'
      }, {
        name: '馄钝',
        id: '14'
      }, {
        name: '饺子',
        id: '15'
      }]
    })
    console.log(this.data.dishesInfoList)
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  }
  // ,
  // upper(e) {
  //   console.log(e)
  // },
  // lower(e) {
  //   console.log(e)
  // },
  // scroll(e) {
  //   console.log(e)
  // },
  // tap(e) {
  //   for (let i = 0; i < order.length; ++i) {
  //     if (order[i] === this.data.toView) {
  //       this.setData({
  //         toView: order[i + 1]
  //       })
  //       break
  //     }
  //   }
  // },
  // tapMove(e) {
  //   this.setData({
  //     scrollTop: this.data.scrollTop + 10
  //   })
  // }
})