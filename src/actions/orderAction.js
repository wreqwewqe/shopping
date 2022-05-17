import axios from 'axios'
//创建订单
export const orderCreate=(data)=>async(dispatch)=>{
    try {
        console.log("666:",data)
        dispatch({type:'ORDER_CREATE_REQUEST'})
        console.log('5554')
        console.log()
       
        const result=await axios.post('/api/v1/order',{...data},{headers:{"Authorization":`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
        console.log('7777')
        dispatch({type:"ORDER_CREATE_SUCCESS",payload:result.data})
        console.log('8888')
    } catch (error) {
        console.log('eooooo')
        dispatch({type:"ORDER_CREATE_FAIL",payload:error})
    }

}
//获取订单详情
export const getOrder=(id)=>async(dispatch)=>{

    axios.get(`/api/v1/order/id`,{headers:{"Authorization":JSON.parse(localStorage.getItem("userInfo")).token}}).then(res=>{
        console.log(res)
        // dispatch({type:"ORDER_DETAILS",payload:res})
    }).catch(err=>console.log(err))
}