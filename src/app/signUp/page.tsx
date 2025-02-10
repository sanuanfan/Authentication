"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const SignUp = () => {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: ""
  })
  const onSignUp = async () => {

  }
  return (
    <div className='flex justify-center items-center h-screen w-screen '>
      <div className='w-[18%] h-auto bg-slate-500 rounded flex flex-col justify-center items-center p-3'>
        <h1 className='text-[24px] text-neutral-800 font-bold mb-3'>SignUp</h1>
        <hr />
        <div className='w-[80%] '>
          <label htmlFor="Username" className='text-neutral-800 text-[16px] mb-2'>Username</label>
          <input
            className='rounded p-2 border-gray-900 mb-3 text-slate-950'
            type="text"
            id='username'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder='Username'
          />
        </div>
        <div className='w-[80%] '>
          <label htmlFor="E-mail" className='text-neutral-800 text-[16px] mb-2'>E-mail</label>
          <input
            className='rounded p-2 border-gray-900 mb-3 text-slate-950'
            id='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type='text'
            placeholder='E-mail'
          />
        </div><div className='w-[80%] '>
          <label htmlFor="Password" className='text-neutral-800 text-[16px] mb-2'>Password</label>
          <input
            className='rounded p-2 border-gray-900 mb-3 text-slate-950'
            type="password"
            id='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='Password'
          />
        </div>
        <button className='w-[30%] bg-orange-400 hover:bg-orange-500 transition-colors h-8 rounded mb-2' onClick={onSignUp}>SignUp</button>
        <Link href='/login' className='text-slate-950 hover:text-orange-500'>Go to Login Page</Link>
      </div>

    </div>
  )
}

export default SignUp
