import axios from 'axios'
//获取所有产品信息
export const productsList=()=>async(dispatch)=>{
    try {
        dispatch({type:"PRODUCT_LIST_REQUEST"})
        const data=await axios.get('/api/v1/products')
        dispatch({type:"PRODUCT_LIST_SUCCESS",payload:data.data})
       
    } catch (error) {
        dispatch({type:"PRODUCT_LIST_FAIL",payload:error})
    }
}
//获取单个产品信息
export const productDetail=(id)=>async(dispatch)=>{
    try {
        dispatch({type:"PRODUCT_DETAIL_REQUEST"})
        const data=await axios.get(`/api/v1/product/${id}`)
        console.log(data)
        dispatch({type:"PRODUCT_DETAIL_SUCCESS",payload:data.data})
    } catch (error) {
        dispatch({type:"PRODUCT_DETAIL_ERROR",payload:error})
    }
}