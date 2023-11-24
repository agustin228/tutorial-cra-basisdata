import React from 'react';
import { Alert, Button, Checkbox, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => {
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification()
    const handleSubmit = () => {
        setTimeout(() => {
            openNotification()
         
        }, 2000)
        navigate("/schedule")   
    }

    const openNotification = () => {
        api.info({
          message: `Login berhasil`,
          description:
            '',
          
        });
      };
    return (
        <Form
            
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        
        <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >{contextHolder}
                <Button onClick={() => handleSubmit() } type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    )
    
};
export default Login;