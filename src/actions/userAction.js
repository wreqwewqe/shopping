import axios from 'axios';
import {message} from 'antd'
//用户登陆
export const userLogin=(email,password,history)=>async(dispatch)=>{
    try {
        dispatch({type:"LOGIN_REQUEST"})
        const {data}=await axios.post('/api/v1/user/login',{
            email,password
        })
        dispatch({type:"LOGIN_SUCCESS",payload:data})
        localStorage.setItem('userInfo', JSON.stringify(data))
        history.push('/')
        message.success('登陆成功')
    } catch (error) {
        message.error('账号或密码错误')
    }
}
//用户登出
export const userLogOut=()=>async(dispatch)=>{
    localStorage.removeItem("userInfo")
    dispatch({type:"LOGIN_LOGOUT"})
    console.log('caonima')
    location.assign('/login')  
    
}
//更新用户
export const updateUser=(values)=>async(dispatch,getState)=>{
    const res=await axios.put('/api/v1/user/update',{
        _id:JSON.parse(localStorage.getItem('userInfo')).user._id,
        name:values.name,
        email:values.email,
        password:values.password,
    },{headers:{'Authorization':`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
    message.success(res.data.msg)
    localStorage.removeItem('userInfo')
    const result=await axios.post('/api/v1/user/login',{
        email:values.email,
        password:values.password
    })
    console.log(result)
    localStorage.setItem('userInfo',JSON.stringify(result.data))
    location.reload();
}

//获取所有用户信息
export const getAllUsers=()=>async(dispatch)=>{
    console.log('cao')
    dispatch({type:"USER_LIST_REQUEST"})  
    const {data}=await axios.get('/api/v1/user',{headers:{"Authorization":`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
    console.log("userLists:",data)
    dispatch({type:"USER_LIST_SUCCESS",payload:data})
}

