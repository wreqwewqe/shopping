import React,{useEffect,useState} from 'react'
import  './index.less'
import {Row,Col,Menu, Dropdown, Space} from 'antd' 
import {ShoppingCartOutlined,UserOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import {userLogOut} from '../../actions/userAction'
export default function Header() {
  const {userInfo}=useSelector(state=>state.login)
  const dispatch=useDispatch()
  const {user}=userInfo || {}
  console.log(user)
  const adminMenu = (
    <Menu
      items={[
        {
          label: (
            <div onClick={()=>{location.href = '/userLists'}}>
              用户列表
            </div>
          ),
        },
        {
          label: (
            <div onClick={()=>{location.href = '/productLists'}}>
              产品列表
            </div>
          ),
        },
        {
          label: (
            <div onClick={()=>{ }}>
              订单列表
            </div>
          ),
        },
      ]}
    />
  );
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div onClick={()=>{}}>
              个人信息
            </div>
          ),
        },
        {
          label: (
            <div onClick={()=>{
              dispatch(userLogOut())
            }}>
              登出
            </div>
          ),
        },
     
      ]}
    />
  );
  return (
      <div className='container'>
        <Row>    
          <Col offset={2} span={16}>
          <Link to={'/'} className='title'>米修商城</Link>
          </Col>
          <Col span={2}>
            <Link to='/cart' className='to'><ShoppingCartOutlined style={{marginRight:"10px"}}/>购物车</Link>
          </Col>
          <Col span={2}>
            {
              user?<Dropdown overlay={menu}>
              <div onClick={e => e.preventDefault()}>
                <Space>
                  你好,{user.name}
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>:
            <Link to='/login' className='to'><UserOutlined style={{marginRight:"10px"}}/>登陆</Link>
            }
          </Col>
          <Col span={2}>
          {
              user&&user.isAdmin?<Dropdown overlay={adminMenu}>
              <div onClick={e => e.preventDefault()}>
                <Space>
                  后台管理
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>:''
            }
          </Col>
        </Row>
      </div>

  )
}
