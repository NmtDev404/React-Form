import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>

<div className='max-w-[1440px] m-auto'>

<div className='flex items-center justify-between w-full '>

  <div className='flex items-center justify-center'>
    <a><img src={logo} className='max-w-[6.5rem] '/></a>
        <h2 className='font-medium text-xl'>NM&CO.</h2>
    </div>   

    <div className=' text-lg font-medium'>
        <ul>
        <a href='#' className='pr-4'>Home</a>
        <a href='#'className='pr-4'>Products</a>
        <a href='#'className='pr-4'>About</a>
        <a href='#'className='pr-4'>Contac Us</a>
        </ul>
    </div>
  
</div>

  
      
    </div>


    </>
    
  )
}

export default Header
