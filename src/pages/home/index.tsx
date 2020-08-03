import React, {FC, useState} from 'react';
import { Button } from 'antd';
import './index.scss';
// import {useHistory} from 'react-router-dom'
//取： useSelector, 发：useDispatch
// import {useSelector, useDispatch} from 'react-redux'
import {animated, useSpring} from 'react-spring'


const Home: FC = () => {
  // const goods = useSelector((state: any) => state.goods)
  // const dispatch = useDispatch()
  // let histroy = useHistory()
  // const testStore = () => {
  //   // console.log(goods)
  //   const list:Array<string> = ['肥皂','沐浴露','牙膏','洗牙粉','洗手液','洗面奶','爽肤水','润肤露','润发素','睫毛膏','口红']
  //   dispatch({
  //     type: 'fixList',
  //     data: list[Math.floor(Math.random() * list.length)]
  //   })
  // }
  // 动画配置
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  // 变量集
  const [modules, setModules] = useState<any>(
      [
        {name: '个人图库', function: true, router: ''},
        {name: '在线图库', function: true, router: ''},
        {name: '上传图片', function: false, router: ''},
        {name: '压缩图片', function: false, router: ''},
        {name: '管理图库', function: false, router: ''},
        {name: '其他功能', function: false, router: ''}
      ]
  );

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
              {
                modules.map((v:any, index: number ) => {
                  return <Button className='moduleItem' key={index.toString()} disabled={v.function}>{v.name}</Button>
                })
              }
          </div>
        </div>
      </animated.div>
    </div>
    // <div>
    //   {
    //     goods.list.map((v:string) => {
    //       return v
    //     })
    //   }
    //   <Button onClick={testStore} type="primary" size="large">home</Button>
    // </div>
  )
};

function mapStateToProps(state:any) {
  return {
    goodsList: state.goods.list
  }
}

export default Home;
