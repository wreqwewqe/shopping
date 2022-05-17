export const createOrder=(state={},action)=>{
    switch(action.type){
        case "ORDER_CREATE_REQUEST":return {loading:true};
        case "ORDER_CREATE_SUCCESS":return {loading:false,data:action.payload,success:true};
        case "ORDER_CREATE_FAIL":return {loading:false,error:action.payload};
        default:return state
    }
}
//获取单个订单信息
export const getOrder=(state={},action)=>{
    switch(action.type){
        case 'ORDER_DETAILS':return {msg:'获取成功',data:action.payload}
        default:return state
    }
}