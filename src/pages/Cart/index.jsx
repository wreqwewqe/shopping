import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart,removeGood } from '../../actions/cartAction'
import {Row,Col,InputNumber,Button} from 'antd'
import  './index.less'
export default function Cart(props) {
    console.log(props)
    const {items}=useSelector(state=>state.cart)
    const {userInfo}=useSelector(state=>state.login)
    const dispatch=useDispatch()
    const id=props.match.params.id
    const count=props.location.search.split('=')[1]
    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,count))
        }
    },[])
    //改变商品数量触发
    const changeCount=()=>{
        
    }
    //删除商品
    const deleteItem=(_id)=>{
        dispatch(removeGood(_id))
    }
    //去支付    
    const pay=()=>{
        console.log(userInfo)
        Object.keys(userInfo).length>1?props.history.push('/order'):props.history.push('/login')
    }
  return (
    <div className="cartContainer" >
        <h1>购物车</h1>
        <div className="content">
            <div className='left'>
                {
                    items&&items.length>0?items.map(item=><Row key={item._id}>
                        <Col span={4}><img style={{width:"80px",height:"80px"}} src={item.image} alt={item.name} /></Col>
                        <Col span={6}  style={{textAlign: 'center',lineHeight:"80px"}}>{item.name}</Col>
                        <Col span={4} style={{textAlign: 'center',lineHeight:"80px"}}>{item.price}</Col>
                        <Col span={6} style={{textAlign: 'center',lineHeight:"80px"}}>数量：<InputNumber defaultValue={item.count} onChange={()=>{changeCount()}}></InputNumber></Col>
                        <Col span={4} onClick={()=>{deleteItem(item._id)}} style={{textAlign: 'center',lineHeight:"80px"}}><Button type='primary'>删除</Button></Col>
                    </Row>):<h1>购物车空空如也</h1>
                }
            </div>
            <div className="right">
                <h1>共计{items.reduce((pre,current) => Number(current.count)+pre,0)}个产品</h1>
                <p>总价:{items.reduce((pre,current)=>pre+Number(current.count)*current.price,0)}</p>
                <Button style={{width:"100%"}} onClick={()=>{pay()}} type='primary'>去支付</Button>
            </div>
        </div>
    </div>
  )
}
