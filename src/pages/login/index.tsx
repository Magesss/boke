import React, { FC, useEffect,useState } from 'react';
import { Button, Tabs, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom'
import './index.scss';
import ImgLogo from './logo.png'
import {userLogin} from '../../api/login'
import {setToken} from '../../utils/auth'
import {setStore} from '../../utils/storeUtil'
import md5 from 'md5'
import BaseLayout from '../../components/BaseLayout'

const Login: FC = () => {
  let history = useHistory()
  useEffect(() => {
  })
    // ant组件
  const { TabPane } = Tabs;
    // 变量集
  const [data] = useState<string>('1');
  const [user, setUser] = useState<string>('');
  const [pwd, setPwd] = useState<string>('')
  // 方法集
  const callback = ()=>{
  }
  const onFinish = async (values:any) => {
    const res = await userLogin({name: user, pwd: md5(pwd)})
    if (res.code !== 1) {
      return;
    }
    setToken(res.data)
    setStore({
      name: 'access-token',
      content: res.data
    })
    history.push('/home')
  };
  const onFinishRegister = (values:any) => {
    console.log('Received values of form: ', values);
    history.push('/home')
  };
  const handleUserChange = (e:any) => {
    setUser(e.target.value)
  }
  const handlePwdChange = (e: any) => {
    setPwd(e.target.value)
  }
  return (
    <BaseLayout>
      <div className="form-box">
        <div className="login-logo">
          <img src={ImgLogo} alt=""/>
        </div>
        <Tabs defaultActiveKey={data} tabPosition={'top'} onChange={callback} className="tabs" animated={true}>
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
                <Input onChange={handleUserChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="pwd"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input
                  onChange={handlePwdChange}
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
    </BaseLayout>
  )
};

export default Login;
