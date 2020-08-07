import React, {useEffect, FC, useState} from 'react'
import BaseLayout from '../../components/BaseLayout'
import ImgListLayout from '../../components/ImgListLayout'
import './index.scss'
import swap from '../../utils/move' //工具函数
import {useTrail, animated} from 'react-spring'
import ImgList from '../../components/ImgList'

const Galley:FC = () => {
  //定义初始化数据
  const [items, setItems] = useState<Array<string>>('Lorem ipsum dolor sit'.split(' '))
  const [state, setState] = useState<number>(0)
  //创建弹簧，每个弹簧对应一个项目，控制其变换、缩放等。
  const config = { mass: 5, tension: 2000, friction: 200 }
  const [trail, setTrail] = useTrail(items.length, () => ({
    y: -150,
    state: state,
    config,
  }))
  useEffect(() => {
    //@ts-ignore
    setTrail({ y: 0 })
  }, [])
  const handleType = (e:any, i:number) => {
    setState(i)
  }
  return(
    <BaseLayout>
      <ImgListLayout>
        <div data-position="left" >
          <div className='content'>
            {
              trail.map((props:any, i:number) => (
                  <animated.div
                    key={i}
                    onClick={(e) => handleType(e, i)}
                    style={{
                      top: `${i * 110 + 10}px`,
                      background: (i === state) ? `linear-gradient(135deg, #f6d365 0%, #fda085 100%)` : `linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)`,
                      transform: props.y.interpolate((y:number) => `translate3d(0,${y-30}px,0)`)
                    }}
                  >
                    <animated.div className='ces' style={{ height: props.y }}>{items[i]}</animated.div>
                  </animated.div>
                )
              )
            }
          </div>
        </div>
        <div data-position="right">
          {ImgList()}
        </div>
      </ImgListLayout>
    </BaseLayout>
  )
}

export default Galley
