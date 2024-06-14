import React from 'react'
import Form from './Form.jsx';
import First_comp from './First_comp.jsx';

const Combine = () => {
  return (
    <div style={{backgroundImage:"url('https://shantiinfosoft.com/images/training/banner-bg.svg')", backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"}} className='sm:flex m-14  p-3 gap-10 '>
        
        <div className='sm:mx-22 md:mx-24 lg:mx-56 grid grid-cols-2 gap-28 w-96'>
        <First_comp/>
        <Form/>
        </div>
    </div>
  )
}

export default Combine