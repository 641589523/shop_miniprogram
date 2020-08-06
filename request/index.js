let requestNum = 0;
export const request = (params) => {
	// 显示加载中
	wx.showLoading({
		title: '加载中',
		mask: true
	})

	const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/"
	requestNum++
	return new Promise((resolve, reject) => {
		wx.request({
			...params,
			url: baseUrl + params.url,
			success: (result) => {
				resolve(result)
			},
			fail: (err) => {
				reject(err)
			},
			complete:()=>{
				requestNum --
				if(requestNum == 0){
					wx.hideLoading()
				}
			}
		})
	})
}
