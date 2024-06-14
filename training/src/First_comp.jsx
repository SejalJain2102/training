import React from 'react'

const First_comp = () => {
  return (
    <div className= 'h-58 m-5'>
        <h1 className='font-bold text-4xl  '>Level Up Your Tech Game <br></br>With Our <span class="underline decoration-8 underline decoration-rose-600">Internships & </span><br></br><span class="underline decoration-8 underline decoration-rose-600">Training Programs.</span></h1>
        <br></br>
        <h5 className='text-lg'>Gain valuable experience working on real-world projects <br></br>with leading IT companies in Indore.</h5>
        <br></br>
        <div className="flex justify-start items-center gap-4">
        <button className=' p-2 px-4 text-white font-bold  bg-red-600  ' >Explore</button>
        <img className='h-8 ' src="https://shantiinfosoft.com/images/training/testimonial.png"></img>
        </div>
    </div>
  )
}

export default First_comp