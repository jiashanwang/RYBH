class Main {
	networkType = null;
	systemInfo = null;
    // 构造函数
    constructor() {
		// console.log('./common/common.js')
    }
	
	/**
	 * 检测网络状态
	 */
	checkNetwork(){
		let that = this
		uni.getNetworkType({
			success: function (res) {
				// 判断网络
				switch (res.networkType){
					case 'none':
						// uni.showToast({title: '无网络连接',duration: 2000,icon: 'none'})
					case 'unknown':
						// uni.showToast({title: '未知网络',duration: 2000,icon: 'none'})
						break;
					default:
						break;
				}
				// console.log(res)
				that.networkType = res.networkType;
				that.networkType = 'wifi';
				return res.networkType;
			}
		});
	}

	/**
	 *  获取系统信息
	 */
	getSystemInfo(){
		try {
			const res = uni.getSystemInfoSync();
			console.log(res);
			this.systemInfo = res;
			return res;
		} catch (e) {
			// error
			console.log(e);
		}
	}
	
	/**
	 * 监听内存不足告警事件
	 */
	memoryWarn(){
		uni.onMemoryWarning(function () {
		  // console.log('onMemoryWarningReceive')
		  uni.showToast({title: '手机内存不足',duration: 2000,icon: 'none'})
		})
	}
	
	/**
	 * 监控网络改变
	 */
	networkStatus(){
		uni.onNetworkStatusChange(function (res) {
			console.log(res.isConnected);
			console.log(res.networkType);
		});
	}


	/**
	 * 对象转数组
	 * @param {Object} obj
	 */
	objectToArray(obj){
		let arr = []
		obj.forEach((v)=>{
			arr.push(v.name)
		})
		return arr
	}
	
	

}

let main = new Main();
export default main;