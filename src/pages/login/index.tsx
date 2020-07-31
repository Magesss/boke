import React, { FC, useEffect,useState } from 'react';
import { Button, Tabs, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom'
import './index.scss';
import ImgLogo from './logo.png'


const Login: FC = () => {
    let history = useHistory()
    useEffect(() => {
    })
    // ant组件
    const { TabPane } = Tabs;
    // 变量集
    const [active] = useState('1');
    // 方法集
    const callback = ()=>{

    }
    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
        history.push('/home')
    };
    const onFinishRegister = (values:any) => {
        console.log('Received values of form: ', values);
        history.push('/home')
    };
  return (
      <div className="page">
        <div className="bg-img">
          <div className="m-bg-mask m-bg-mask0"></div>
          <div className="m-bg-mask m-bg-mask1"></div>
          <div className="m-bg-mask m-bg-mask2"></div>
          <div className="m-bg-mask m-bg-mask3"></div>
        </div>
        <div className="form-box">
            <div className="login-logo">
                <img src={ImgLogo} alt=""/>
            </div>
            <Tabs defaultActiveKey={active} tabPosition={'top'} onChange={callback} className="tabs" animated={true}>
                <TabPane tab="登录" key="1">
                    <Form
                        name="login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="user"
                            rules={[{ required: true, message: '请输入用户名！' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="pwd"
                            rules={[{ required: true, message: '请输入密码' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                    </Form>
                </TabPane>
                <TabPane tab="注册" key="2">
                    <Form
                        name="login"
                        className="register-form"
                        onFinish={onFinishRegister}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item
                            name="emil"
                            rules={[{ required: true, message: '请输入邮箱' }]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="请输入邮箱" />
                        </Form.Item>
                        <Form.Item
                            name="pwd"
                            rules={[{ required: true, message: '请输入密码！' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item
                            name="surePwd"
                            rules={[{ required: true, message: '请再次输入密码' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="确认密码"
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注 册
                        </Button>
                    </Form>
                </TabPane>
            </Tabs>
        </div>
      </div>

  )
};

export default Login;
