import React, {useState, useRef} from 'react'
import './index.scss'
import {useMeasure, useMedia} from './util'
import data from './data'
import {useTransition, animated as a} from 'react-spring'


function ImgList():any {
  const ref = useRef<any>()
  const columns:number = useMedia([
    '(min-width: 1500px)',
    '(min-width: 1000px)',
    '(min-width: 600px)'
  ], [5, 4, 3], 2)
  const {width} = useMeasure(ref)
  const [items, set] = useState(data)
  let heights = new Array(columns).fill(0)
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)) // 获得最小列
    const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
    return {
      ...child,
      xy,
      width: width/columns,
      height: child.height / 2,
    }
  })
  const transitions = useTransition(gridItems, (item:any) => item.css, {
    from: ({xy, width, height}) => ({
      xy, width, height, opacity: 0
    }),
    enter: ({xy, width, height}) => ({
      xy, width, height, opacity: 1
    }),
    update: ({xy, width, height}) => ({
      xy, width, height,
    }),
    leave: {
      height: 0, opacity: 0
    },
    config: {
      mass: 5, tension: 500, friction: 100
    },
    trail: 25
  })

  return (
    <div className='img-list-wrap' ref={ref} style={{height: Math.max(...heights)}}>
      {
        transitions.map(({item, props}, key:number) => {
          //@ts-ignore
          const {xy, ...rest} = props
          return (
            <a.div key={key} style={{
              ...rest,
              willChange: 'transform, width, height, opacity',
              padding: '15px',
              position: 'absolute',
              transform: xy.interpolate((x:any, y:any) => `translate3d(${x}px,${y}px,0)`),
            }}>
              <div className='item' style={{
                backgroundImage: item.css,
                height: '100%'
              }}></div>
            </a.div>
          )
        })
      }
    </div>
  )
}
export default ImgList
