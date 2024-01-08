let host = 'http://148.70.120.105'
let baseUrl = host+'/api'

let api = {
	login: baseUrl+'/login/index',
	user_info: baseUrl+'/user/index',
	user_info_by_uid: baseUrl+'/user/infoByUid',
	get_swiper: baseUrl+'/swiper/index',
	top_task: baseUrl+'/index/topTask',
	task_read: baseUrl+'/task/read',
	task_save: baseUrl+'/task/save',
	get_task: baseUrl+'/task/index',
	get_cate: baseUrl+'/index/cate',
	upload: baseUrl+'/upload/index',
	my_task: baseUrl+'/user/task',
	change_face:baseUrl+'/user/changeFace',
	change_nickname:baseUrl+'/my/changeNickname',
	change_info:baseUrl+'/my/changeInfo',
	// Favor
	favor_add:baseUrl+'/favor/add',
	// favor_del
	favor_del:baseUrl+'/favor/delete',
	// myFavor
	my_favor:baseUrl+'/favor/index',
	
	// socket
	socket: 'ws://148.70.120.105:2348',
	bind_uid: baseUrl+'/chat/bind',
	send_msg: baseUrl+'/chat/send',
	get_msg: baseUrl+'/chat/getMsgList',
	// getMyList
	get_my_list: baseUrl+'/chat/getMyList',
}
export default api