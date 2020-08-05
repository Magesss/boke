import React, {FC, useState, useEffect} from 'react';
import './index.scss';
import {animated, useSpring, useTransition} from 'react-spring'


const Home: FC = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  const [modules, setModules] = useState<any>([])
  useEffect(() => setModules([{
    key: 1,
    value: '个人图库',
    state: false
  }, {
    key: 2,
    value: '在线图库',
    state: false
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

  // 变量集
  return (
    <div className="home-page">
      <animated.div style={props}>
        <div>
          <div className="bg-img">
            <div className="m-bg-mask m-bg-mask0"></div>
            <div className="m-bg-mask m-bg-mask1"></div>
            <div className="m-bg-mask m-bg-mask2"></div>
            <div className="m-bg-mask m-bg-mask3"></div>
          </div>
          <div className="content-box">
            {transitions.map(({ item, props, key }) => (<animated.div key={key} style={props}>
              <div className='moduleItem'>{item.value}</div>
            </animated.div>))
            }
          </div>
        </div>
      </animated.div>
    </div>
  )
};

export default Home;
