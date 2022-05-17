import React from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd';
export default function ProductFomr({isModalShow,setIsModalShow,productInfo}) {
    const [form] = Form.useForm();
    const onFinish=()=>{

    }
    const onCancel=()=>{
        setIsModalShow(false);
    }
  return (
    <Modal
      visible={isModalShow}
      title={productInfo?'编辑产品':'添加产品'}
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
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
          label="产品名称"
          rules={[
            {
              required: true,
              message: '请输入产品名称!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="产品价格"
          rules={[
            {
              required: true,
              message: '请输入产品价格!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="产品图片"
          rules={[
            {
              required: true,
              message: '请输入产品价格!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="产品品牌"
          rules={[
            {
              required: true,
              message: '请输入产品品牌!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="产品种类"
          rules={[
            {
              required: true,
              message: '请输入产品种类!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="countInStock"
          label="产品库存"
          rules={[
            {
              required: true,
              message: '请输入产品库存!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="rate"
          label="产品评分"
          rules={[
            {
              required: true,
              message: '请输入产品评分!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="产品描述"
          rules={[
            {
              required: true,
              message: '请输入产品描述!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  )
}
