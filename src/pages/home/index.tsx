import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import {useHistory} from 'react-router-dom'

const Home: FC = () => {
  let histroy = useHistory()
  useEffect(() => {
  })
  return (
    <Button onClick={() => {
      histroy.push('/login')
    }} type="primary" size="large">home</Button>
  )
};

export default Home;
