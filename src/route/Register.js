import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-max bg-zinc-900/2'>
   
    
     <div className='w-full h-screen  flex justify-center items-center '>
      
      <div className=' xsm:w-90 md:w-1/2 h-max py-5 bg-zinc-200 flex flex-col justify-center items-center px-5 mt-32 mb-32 rounded-xl shadow-xl shadow-slate-700'> 

      <h1 className='w-full text-left px-20  xsm:text-2xl  lg:text-5xl font-serif bg-gradient-to-tr from-indigo-950 to-blue-500 bg-clip-text  font-bold text-transparent '> wellcome to  </h1>
      <h1 className='w-full text-right px-28 xsm:text-xl lg:text-4xl font-serif mb-10 bg-gradient-to-br from-violet-950 to-indigo-700 bg-clip-text  font-bold text-transparent '>  Zakatspeed </h1>
      <form  className='xsm:w-full lg:w-10/12 h-max flex flex-col justify-center items-center'> 
       <span className='w-full flex justify-center items-center mb-3'>  <label className='xsm:w-max lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text  font-bold text-transparent  xsm:px-1 lg:px-5  font-mono   xsm:text-xl lg:text-2xl py-2 xsm:text-left lg:text-right'>User Name</label><input className='w-full h-10  rounded-xl outline-none px-5 text-xl ml-5 shadow-lg shadow-stone-700' type='text' placeholder='Enter your username ' required/><br/></span>
       <span className='w-full flex justify-center items-center mb-3'>  <label className=' xsm:w-max lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text  font-bold text-transparent xsm:px-1 lg:px-5  font-mono  xsm:text-xl lg:text-2xl py-2  xsm:text-left lg:text-right'>Name</label><input className='w-full h-10  rounded-xl outline-none px-5 text-xl ml-5 shadow-lg shadow-stone-700' type='text' placeholder='Enter your fullname' required/><br/></span>
       <span className='w-full flex justify-center items-center mb-3'>  <label className=' xsm:w-max lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text  font-bold text-transparent xsm:px-1 lg:px-5  font-mono  xsm:text-xl lg:text-2xl py-2  xsm:text-left lg:text-right'>E-mail</label><input className='w-full h-10  rounded-xl outline-none px-5 text-xl ml-5 shadow-lg shadow-stone-700' type='email' placeholder='Enter your email' required/><br/></span>
       <span className='w-full flex justify-center items-center mb-3'>  <label className='xsm:w-max lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text  font-bold text-transparent  xsm:px-1 lg:px-5 font-mono   xsm:text-xl lg:text-2xl py-2  xsm:text-left lg:text-right'>Password  </label><input className='w-full h-10  rounded-xl outline-none px-5 text-xl ml-5 shadow-lg shadow-stone-700 ' type='password' placeholder='Enter your  passowrd' required/><br/></span>
       <span className='w-full flex justify-center items-center mb-8'>  <label className='xsm:w-max lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text  font-bold text-transparent  xsm:px-1 lg:px-5 font-mono   xsm:text-xl lg:text-2xl py-2  xsm:text-left lg:text-right'>confirm Password  </label><input className='w-full h-10  rounded-xl outline-none px-5 text-xl ml-5 shadow-lg shadow-stone-700 ' type='password' placeholder='Enter your conform passowrd' required/><br/></span>
<button className='w-1/4 h-12 bg-sky-400 rounded-xl xsm:text-lg lg:text-2xl font-mono shadow-lg shadow-slate-600' type='submit'> Register</button>
</form>
<h1 className=' xsm:text-sm lg:text-lg mt-5 '> All ready  you  have an account . <span className='text-sky-600'> <Link to="/login"> Login here</Link>   </span>  </h1>


      </div>
     </div>
    
  </div>
  )
}

export default Register
