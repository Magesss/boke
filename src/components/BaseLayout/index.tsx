import React from 'react'
import {useSpring, animated} from 'react-spring'
import './index.scss'

function PersonalInformation(props:any) {
  const prop = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <div className='page'>
      <animated.div style={prop}>
        <div>
          <div className='bg-img'>
            <div className="m-bg-mask m-bg-mask0"></div>
            <div className="m-bg-mask m-bg-mask1"></div>
            <div className="m-bg-mask m-bg-mask2"></div>
            <div className="m-bg-mask m-bg-mask3"></div>
          </div>
          <div className="slot">
            {props.children}
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default PersonalInformation
