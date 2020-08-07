import {useRef, useState, useEffect} from 'react'
import ResizeObserver from 'resize-observer-polyfill' // 监听节点变化

//监听节点
export function useMeasure(ref:any) {
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
  })
  const [ro] = useState(() => {
    return new ResizeObserver(([entry]) => set(entry.contentRect))
  })
  //@ts-ignore
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
  return bounds
}
//监听窗口
export function useMedia(queries:Array<string>, values:Array<number>, defaultValue:number):number {
  const match = () => values[queries.findIndex((q:any) => matchMedia(q).matches)] || defaultValue
  const [value, set] = useState(match)
  useEffect(() => {
    const handle = () => {
      console.log('match', match)
      set(match)
    }
    window.addEventListener('resize', ()=> {
      set(match)
    })
    return window.removeEventListener('resize', handle)
  }, [])
  return value
}
