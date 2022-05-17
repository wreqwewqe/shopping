import React,{useEffect} from 'react'
import { Button, Modal, Form, Input, Radio,Select,message } from 'antd';
import axios from 'axios';
export default function UserForm({isModalShow,setIsModalShow,userInfo,update,setUpdate}) {
    const [form] = Form.useForm();
    const {Option}=Select
    const onCancel=()=>{
        setIsModalShow(false)
    }
  useEffect(()=>{
      form.setFieldsValue(userInfo)
      console.log(userInfo)
  },[userInfo])
  return (
    <Modal
      visible={isModalShow}
      title="编辑用户"
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            console.log(values);
            axios.post(`/api/v1/user/${userInfo._id}`,{...values},{headers:{"Authorization":`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}}).
            then((res)=>{message.success('更新成功');setIsModalShow(false);setUpdate(!update)}).catch(err=>message.error(err))
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="isAdmin" label="角色">
            <Select  onChange={(value)=>{console.log(value)}}>
                <Option value={true}>管理员</Option>
                <Option value={false}>用户</Option>
            </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}
