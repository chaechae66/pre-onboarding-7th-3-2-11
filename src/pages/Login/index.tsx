import { Button, Form, Input, Row ,Col } from 'antd';

import { UserInfo } from '../../types';
import { loginAPI } from '../../api/login';
import { storage } from '../../util/storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router'

export const Login = () => {
    
    const navigate = useNavigate();

    useEffect(()=>{
        storage.get() && navigate("/")
    },[navigate])
    
    const onFinish = async (userInfo: UserInfo) => {
        const token = await loginAPI(userInfo);
        storage.set(token);
        alert("로그인에 성공했습니다.")
        navigate("/")
      };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <>
            <Row justify="center">
                <Col span={8}>
                    <h2 style={{
                        "textAlign" : "center"
                    }}>Login</h2>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                        label="email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                        <Input />
                        </Form.Item>
                
                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                        <Input.Password />
                        </Form.Item>
                
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}