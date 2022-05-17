
export const cartReducers=(state={items:[],receiveInfo:{},paymentMethod:''},action)=>{
    console.log("state:",state)
    const localPaymentMethod=localStorage.getItem('paymentMethod')?JSON.parse(localStorage.getItem('paymentMethod')):''
    const localData=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
    const localReceiveInfo=localStorage.getItem('receiveInfo')?JSON.parse(localStorage.getItem('receiveInfo')):{}
    state.items=localData
    state.receiveInfo=localReceiveInfo
    state.paymentMethod=localPaymentMethod
    switch(action.type){
        case "CART_ADD":
            console.log(state.items)
            let findItem=state.items.filter(item=>{
             return item._id===action.payload._id
            })
            console.log("findItem",findItem)
            if(findItem.length>0){
                console.log('有')
                //购物车里面已经存在相同的商品
                return {...state,items:state.items.map(i=>
                    i._id===action.payload._id?action.payload:i
                )}
            }
            else{
                console.log("没有++",state)
                console.log('没有',{...state,items:[...state.items,action.payload]})
                //购物车里面没有要添加的商品
                return {...state,items:[...state.items,action.payload]}
            }
        case "CART_REMOVE":
            console.log("dispatch2")
            return {...state,items:state.items.filter(item=>item._id!==action.payload)}
        case 'CART_RECEIVEINFO':
            return {...state,receiveInfo:action.payload}
        case "CART_PAYMENT_METHOD":
            return {...state,paymentMethod:action.payload}
        default: return state
    }
}