export const login=(state={userInfo:{}},action)=>{
    state.userInfo=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):{}
    switch(action.type){
        case "LOGIN_REQUEST":return {loading:true};
        case "LOGIN_SUCCESS":return {loading:false,userInfo:action.payload};
        case "LOGIN_LOGOUT" :return {};
        default:return state
    }
}

export const getAllUsers=(state={user:[]},action)=>{
    switch(action.type){
        case "USER_LIST_REQUEST" :return {loading:true};
        case "USER_LIST_SUCCESS" :return {loading:false,userList:action.payload};
        default:return state
    }
}
