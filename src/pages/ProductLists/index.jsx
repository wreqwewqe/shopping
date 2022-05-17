import React,{useEffect,useState} from 'react'
import {Space,Table,Image,message,Button} from 'antd'
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import {productsList} from '../../actions/productActions'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import ProductFomr from './components/ProductForm'
export default function ProductLists() {
    const [isModalShow,setIsModalShow]=useState(false)
    const dispatch=useDispatch()
    const {products}=useSelector(state=>state.productsList)
    const [update,setUpdate]=useState(false)
    console.log('p:',products)
    useEffect(()=>{
        dispatch(productsList())
    },[update])
    const handleDelete=(_id)=>{
      axios.delete(`/api/v1/product/${_id}`,{headers:{"Authorization":`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
      message.success('删除成功')
      setUpdate(!update)
    }
    const createProduct=()=>{
      setIsModalShow(true)
    }
    const dataSource =products.map(product=>product)
    const columns = [
        {
          title: '_id',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: '产品名称',
          dataIndex: 'name',
          key: 'name',
        },

        {
            title:"价格",
            dataIndex: 'price',
            key:'price', 
        },
        {
            title:'品牌',
            dataIndex: 'brand',
            key:'brand'
        },
        {
            title:"种类",
            dataIndex: 'category',
            key:'category',
        },
        {
            title:"操作",
            render:(_,record) =>{
                return <span>
                    <Space>
                        <EditOutlined />
                        <DeleteOutlined onClick={()=>{handleDelete(record._id)}}/>
                    </Space>
                </span>
            }
        },
      ];
  return (
    <div>
      <h1>产品列表</h1>
      <Button onClick={()=>{createProduct()}} type='primary'>添加产品</Button>
      <Table dataSource={dataSource} rowKey={record=>record._id} columns={columns} />
      <ProductFomr isModalShow={isModalShow} setIsModalShow={setIsModalShow}/>
    </div>
  )
}
