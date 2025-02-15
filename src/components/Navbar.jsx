import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-white'>
        <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-2xl ">
            <span className='text-green-700'>&lt;</span>
            Pass
            <span className='text-green-700'>OP /&gt;</span>
            </div>

       {/* <ul >
        <li className='flex gap-4' >
            <a className='hover:font-bold text-xl' href="/">Home</a>
            <a className='hover:font-bold text-xl' href="/">About</a>
            <a className='hover:font-bold text-xl' href="/">Contact</a>
        </li>
       </ul> */}
       <div className='flex justify-center items-center cursor-pointerring-current'>
        <img className='rounded-full invert w-16 p-2 ' src="github.png" alt=""  />
        <span className='font-bold'>Github</span>
       </div>
       </div>

    </nav>
  )
}

export default Navbar
