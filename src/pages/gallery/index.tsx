import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ImgListLayout from '../../components/ImgListLayout'



const Galley = () => {
  return(
    <BaseLayout>
      <ImgListLayout>
        <div className='1' data-position="left"></div>
        <div className='1' data-position="right">55555555</div>
      </ImgListLayout>
    </BaseLayout>
  )
}

export default Galley
