import React, { FC } from 'react';
import { Button } from 'antd';
import {useHistory} from 'react-router-dom'
//取： useSelector, 发：useDispatch
import {useSelector, useDispatch} from 'react-redux'

const Home: FC = () => {
  const goods = useSelector((state: any) => state.goods)
  const dispatch = useDispatch()
  let histroy = useHistory()
  const testStore = () => {
    // console.log(goods)
    const list:Array<string> = ['肥皂','沐浴露','牙膏','洗牙粉','洗手液','洗面奶','爽肤水','润肤露','润发素','睫毛膏','口红']
    dispatch({
      type: 'fixList',
      data: list[Math.floor(Math.random() * list.length)]
    })
  }
  return (
    <div>
      {
        goods.list.map((v:string) => {
          return v
        })
      }
      <Button onClick={testStore} type="primary" size="large">home</Button>
    </div>
  )
};

function mapStateToProps(state:any) {
  return {
    goodsList: state.goods.list
  }
}

export default Home;
