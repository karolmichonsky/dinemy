import React from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const Login = ({ closeLogin }) => {

    return (
        <div className={'z-[1] bg-white pt-0 min-w-full min-h-screen lg:bg-opacity-30 lg:bg-black drop-shadow-md flex justify-center items-center absolute lg:top-0'}  onClick={closeLogin} >
            <div className='flex flex-col justify-center mx-auto '>
                <div className='flex flex-col justify-center items-center mx-auto lg:bg-white lg:h-[350px] lg:w-[450px] lg:rounded-lg'>
                    <h1 className=' text-4xl text-center font-bold'>Login</h1>
                    <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2'>
                        <EnvelopeIcon className='w-8' />
                        <input type="email" name="" id="" placeholder='E-Mail' className='bg-orange-500 w-full px-3 focus:outline-none text-white ' />
                    </div>
                    <div className='hidden w-8 '>
                        <EnvelopeIcon />
                        <input type="email" name="" id="" placeholder='Repeat E-Mail' />
                    </div>
                    <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2'>
                        <LockClosedIcon className='w-8 ' />
                        <input type="password" name="" id="" placeholder='Password' className='bg-orange-500 w-full px-3 focus:outline-none text-white rounded-2xl ' />
                    </div>
                    <div className='hidden '>
                        <LockClosedIcon className=' w-8' />
                        <input type="password" name="" id="" placeholder='Repeat Password' />
                    </div>
                    <div className='flex justify-between'>
                        <button className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-18 h-10 my-2 text-white items-center text-2xl mx-2 w-28 justify-center'>Login</button>
                        <button className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-18 h-10 my-2 text-white mx-2 items-center text-2xl w-28 justify-center'>Sign up</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;