import React from 'react'

const SmallScreenNavbar = () => {
  return (
    <div className="moving-div-left flex-col gap-x-6 text-xl flex md:hidden top-[10%] right-[4%] h-screen absolute z-[1000] mr-8 sm:mr-0 w-[15%] transition-all duration-200 mt-4">
      <a href="#about_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>About</a>
      <a href="#experience_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Skills</a>
      <a href="#Project_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Projects</a>
      <a href="#contact_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Contact</a>
    </div>
  )
}

export default SmallScreenNavbar
