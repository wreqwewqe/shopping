//获取所有产品信息
export const productLists=(state={products:[]},action)=>{
    switch(action.type){
        case "PRODUCT_LIST_REQUEST":return {loading:true,products:[]} 
        case "PRODUCT_LIST_SUCCESS":return {loading:false,products:action.payload}
        case "PRODUCT_LIST_FAIL":return {loading:false,error:action.paylod}
        default:return state
    }
}
//获取单个产品信息
export const productDetail=(state={product:{}},action)=>{
    switch(action.type){
        case "PRODUCT_DETAIL_REQUEST":return {loading:true,product:{}}
        case "PRODUCT_DETAIL_SUCCESS":;return {loading:false,product:action.payload}
        default:return state
    }
}
