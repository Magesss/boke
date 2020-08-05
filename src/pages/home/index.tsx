import React, {FC, useState, useEffect} from 'react';
import './index.scss';
import {useHistory} from 'react-router-dom'
import {animated, useTransition} from 'react-spring'
import BaseLayout from '../../components/BaseLayout'


const Home: FC = () => {
  const [modules, setModules] = useState<any>([])
  const history = useHistory()
  useEffect(() => setModules([{
    key: 1,
    value: '个人图库',
    state: false
  }, {
    key: 2,
    value: '在线图库',
    state: true,
    to: '/gallery'
  }, {
    key: 3,
    value: '上传图片',
    state: false
  }, {
    key: 4,
    value: '压缩图片',
    state: false
  }, {
    key: 5,
    value: '系统管理',
    state: false
  }, {
    key: 6,
    value: '其他功能',
    state: false
  }]), [])
  const transitions = useTransition(modules, item => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  })
  const handleClick = (e: any, item:any) => {
    if(!item.state) return
    history.push(item.to)
  }
  // 变量集
  return (
    <BaseLayout>
      <div className="content-box">
        {transitions.map(({ item, props, key }) => (<animated.div key={key} style={props}>
          <div onClick={(e:any) => handleClick(e, item)} className='moduleItem'>{item.value}</div>
        </animated.div>))
        }
      </div>
    </BaseLayout>
  )
};

export default Home;
