import React,{useEffect,useState} from 'react'
import {Table,Space,message} from 'antd'
import {useDispatch,useSelector} from 'react-redux'
import {getAllUsers} from '../../actions/userAction'
import axios from 'axios'
import UserForm from './components/UserForm'
import {
    EditOutlined,
    DeleteOutlined
  } from '@ant-design/icons';
export default function UserLists() {
    const dispatch = useDispatch()
    const {loading,userList}=useSelector(state=>state.getAllUsers)
    //控制模态框状态
    const [isModalShow,setIsModalShow]=useState(false)
    const {userInfo:{user}}=useSelector(state=>state.login)
    console.log('user:',user)
    const [update,setUpdate]=useState(false)
    //点击用户的信息
    const [userInfo,setUserInfo]=useState({})
    useEffect(()=>{
        if(user&&user.isAdmin){
            dispatch(getAllUsers())
        }
        else
        {
            location.assign('/login')
        }
    },[update])
    const dataSource = userList&&userList.map(item=>{
        return {
            key:item._id,
            _id:item._id,
            name:item.name,
            email:item.email,
            password:item.password,
            isAdmin:item.isAdmin
       }
    })
    const handleEdit=async(_id)=>{
        const {data}=await axios.get(`/api/v1/user/${_id}`,{headers:{"Authorization":`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
        console.log('uuu:',data.user)
        setUserInfo(data.user)
        console.log('设置好过后的值:',userInfo)
        setIsModalShow(true);
    }
    
    const handleDelete=async(_id)=>{
        await axios.delete(`/api/v1/user/${_id}`,{headers: {'Authorization':`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
        message.success('删除成功')
        setUpdate(!update)
    }
      const columns = [
        {
            title: '_id',
            dataIndex: '_id',
            key: '_id',
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title:'角色',
            dataIndex: 'isAdmin',
            key:'isAdmin',
            render:(record)=>{
                const res=record?'管理员':'用户'
                return res
            }
        },
        {
            title:'操作',
            key:'opration',
            render:(_,record)=>{
                return <div>
                    <Space>
                        <EditOutlined onClick={()=>{handleEdit(record._id)}}/>
                        <DeleteOutlined onClick={()=>{handleDelete(record._id)}}/>
                    </Space>
                </div>
            }
        }
      ];
  return (
    <div>
        <h1>用户列表</h1>
        <Table dataSource={dataSource} columns={columns} />
        <UserForm isModalShow={isModalShow} setIsModalShow={setIsModalShow} userInfo={userInfo} update={update} setUpdate={setUpdate}></UserForm>
    </div>
  )
}
