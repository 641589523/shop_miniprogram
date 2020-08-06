//index.js
import {
	request
} from "../../request/index.js"

//获取应用实例
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		swiperList: [],
		catesList: [],
		floorList: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getSwiperList()
		this.getCatesList()
		this.getFloorList()
	},


	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	/**
	 * 发送异步请求获取轮播图数据
	 */
	getSwiperList() {
		request({
			url: 'home/swiperdata'
		}).then(result => {
			this.setData({
				swiperList: result.data.message
			})
		})

		// 	wx.request({
		// 		url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
		// 		header:{'content-type':'application/json'},
		// 		method:'GET',
		// 		dataType:'json',
		// 		responseType:'text',
		// 		success:(result)=>{
		// 				this.setData({
		// 					swiperList:result.data.message
		// 				})
		// 				console.log(123)
		// 				console.log(this.data.swiperList)
		// 		},
		// 		fail:()=>{

		// 		},
		// 		complete:()=>{

		// 		}
		// 	})
		// },
	},
	/**
	 * 获取分类菜单图标
	 */
	getCatesList() {
		request({
			url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
		}).then(result => {

			this.setData({
				catesList: result.data.message
			})
		})
	},
	/**
	 * 获取楼层数据
	 */
	getFloorList() {
		request({
			url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
		}).then(result => {
			this.setData({
				floorList: result.data.message
			})
		})
	}
})
