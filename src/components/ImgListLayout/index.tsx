import React from 'react'
import './index.scss'


function PersonalInformation({children}:any) {
  return (
    <div className='img-list-layout'>
      {
        children.map((v:any, i:number) => {
          if(v.props['data-position'] === 'left') {
            return <div key={i} className='list-left'>{v}</div>
          } else if(v.props['data-position'] === 'right') {
            return <div key={i} className='list-right'>{v}</div>
          } else {
            return ''
          }
        })
      }
      {/*<div className='list-left'>{props.children}</div>*/}
    </div>
  );
}

export default PersonalInformation
