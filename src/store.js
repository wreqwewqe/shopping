import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {cartReducers} from './reducers/cartReducers'
import { productLists,productDetail } from './reducers/productReducers'
import {login,getAllUsers} from './reducers/userReducers'
import {createOrder} from './reducers/orderReducer'
const reducer=combineReducers({productsList:productLists,productDetail,cart:cartReducers,login,createOrder,getAllUsers})
const store=createStore(reducer,applyMiddleware(thunk))
export default store