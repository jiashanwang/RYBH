class Main {
    // 构造函数
    constructor() {
    }
	
	// 登录检测
	checkLogin(backpage='', backtype=1){
		var SUID  = uni.getStorageSync('SUID');
		var SNAME = uni.getStorageSync('SNAME');
		var STOKEN = uni.getStorageSync('STOKEN');
		var SPHONE = uni.getStorageSync('SPHONE');
		var SFACE = uni.getStorageSync('SFACE');
		
		if(SUID == '' || SNAME == '' || STOKEN == ''){
			if(backtype==1){
				uni.navigateTo({
					url: '../login/login?backpage='+backpage+'&backtype='+backtype,
				});
			}else{
				uni.redirectTo({
					url:'../login/login?backpage='+backpage+'&backtype='+backtype,
				});
			}
			return false;
		}
		return [SUID, SNAME, STOKEN, SPHONE, SFACE];
	}
	
	// 获取用户信息
	getUser(){
		var SUID  = uni.getStorageSync('SUID');
		var SNAME = uni.getStorageSync('SNAME');
		var STOKEN = uni.getStorageSync('STOKEN');
		var SPHONE = uni.getStorageSync('SPHONE');
		var SFACE = uni.getStorageSync('SFACE');
		
		if(SUID == '' || SNAME == '' || STOKEN == ''){
			uni.navigateTo({
				url: '../login/login'
			});
			return false;
		}
		return [SUID, SNAME, STOKEN, SPHONE, SFACE];
	}

	// 推出登陆
	quitLogin(){
		uni.setStorageSync('SUID',null)
		uni.setStorageSync('SNAME',null)
		uni.setStorageSync('STOKEN',null)
		uni.setStorageSync('SPHONE',null)
		uni.setStorageSync('SFACE',null)
		uni.navigateTo({
			url: '../login/login'
		});
	}

	// 界面跳转
	navTo(toUrl){
		uni.navigateTo({
			url: toUrl
		})
	}
	
	redTo(toUrl){
		uni.redirectTo({
			url: toUrl
		})
	}
	
	back(level=1){
		uni.navigateBack({
			delta: level
		});
	}
	
	// 网络错误
	fail(res){
		console.log(res)
	}
	
	/// <summary>
	/// 求百分比
	/// </summary>
	getPercent(num, total) {
		num = parseFloat(num);
		total = parseFloat(total);
		if (isNaN(num) || isNaN(total)) {
			return "-";
		}
		if( total <= 0 ){
			return '100%'
		}else{
			return (100-Math.round(num / total * 10000) / 100.00)+"%";
		}
		// return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00)+"%";
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