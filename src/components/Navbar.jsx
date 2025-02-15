import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-white'>
      <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-2xl">
          <span className='text-green-700'>&lt;</span>
          Sheild
          <span className='text-green-700'>Pass/&gt;</span>
        </div>

        <a 
          href="https://github.com/Mayank9166" 
          target="_blank" 
         
          className='flex justify-center items-center cursor-pointer'
        >
          <img className='rounded-full invert w-16 p-2' src="github.png" alt="GitHub" />
          <span className='font-bold'>Github</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
