const actions={
	setUserInfo({commit},{username,password,loginStatus}){
		commit('setUsername',username)
		commit('setPassword',password)
		commit('setLoginStatus',loginStatus)
	},
	incOrder({commit,state},{order}){
		var newList=state.undepartOrderList.slice()
		var newOrder=order
		newOrder.status=false
		newList.push(order)
		commit('setUndepartOrderList',newList)
	},
	changeStatus({commit,state},{index}){
		var order=state.undepartOrderList.find((val,i)=>i===index)
		var _undepartOrderList=state.undepartOrderList.slice()
		var _orderList=state.orderList.slice()
		
		order.status=true
		_undepartOrderList.splice(index,1)
		_orderList.push(order)

		commit('setOrderList',_orderList)
		commit('setUndepartOrderList',_undepartOrderList)
	},
	setNameAndPhone({commit},{name,phone}){
		commit('setName',name)
		commit('setPhone',phone)
	},
	destoryList({commit},{list}){
		commit('setOrderList',list)
		commit('setUndepartOrderList',list)
	}
}

export default actions