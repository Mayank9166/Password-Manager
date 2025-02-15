import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
           <div className="logo font-bold text-2xl ">
            <span className='text-green-700'>&lt;</span>
            Shield
            <span className='text-green-700'>Pass /&gt;</span>
            </div>
       <div className='font-bold italic flex w-23 gap-2'>Created With <img className='w-6'src="heart4.png" alt="" />by  Mayank Saini</div>
    </div>
  )
}

export default Footer
