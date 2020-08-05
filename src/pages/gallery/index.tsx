import React, {useRef} from 'react'
import BaseLayout from '../../components/BaseLayout'
import ImgListLayout from '../../components/ImgListLayout'
import clamp from 'lodash-es/clamp' //工具函数
import swap from '../../utils/move' //工具函数
import {useGesture} from 'react-use-gesture' //手势库
import {useSprings, animated, interpolate} from 'react-spring' //动画库

//返回拖动/空闲项的管件样式
const fn = (order:any, down:any, originalIndex:number, curIndex:number, y:any) => (index:number) =>
  down && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: (n:string) => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }


const Galley = () => {
  const items:Array<string> = 'Lorem ipsum dolor sit'.split(' ')


  return(
    <BaseLayout>
      <ImgListLayout>
        <div className='1' data-position="left">
          123
        </div>
        <div className='1' data-position="right">55555555</div>
      </ImgListLayout>
    </BaseLayout>
  )
}

export default Galley
