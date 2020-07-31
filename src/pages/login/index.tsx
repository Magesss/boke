import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import {useHistory} from 'react-router-dom'

const Login: FC = () => {
  let history = useHistory()
  useEffect(() => {
  })
  return (
    <Button type="primary" size="large" onClick={() => {
      history.push('/home')
    }}>login</Button>
  )
};

export default Login;
