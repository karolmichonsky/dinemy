import React from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const Login = ({ closeLogin }) => {

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const [register, setRegister] = useState(false);
    const [confirmText, setConfirmText] = useState('Login');
    const [registerText, setRegisterText] = useState("Don't have an account? Create one");

    const toggleRegister = () => {
        setRegister(register => !register);

        if (register){
            setConfirmText('Login');
            setRegisterText("Don't have an account? Create one");
        } 
        else {
            setConfirmText('Sign Up');
            setRegisterText("You already have an account? Login");
        }
    };

    return (
        <div className={'z-[1] bg-white pt-0 min-w-full min-h-screen lg:bg-opacity-80 lg:bg-black drop-shadow-md flex justify-center items-center absolute lg:top-0 duration-300'}  onClick={closeLogin} >
            <div className='flex flex-col justify-center mx-auto ' onClick={stopPropagation}>
                <div className='flex flex-col justify-center items-center mx-auto lg:bg-white lg:h-[350px] lg:w-[450px] lg:rounded-lg'>
                    <h1 className=' text-4xl text-center font-bold lg:pb-4 drop-shadow-lg'>{confirmText}</h1>
                    <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2'>
                        <EnvelopeIcon className='w-8' />
                        <input type="email" name="" id="" placeholder='E-Mail' className='bg-orange-500 w-full px-3 focus:outline-none text-white placeholder:text-gray-300 ' />
                    </div>
                    
                    <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2'>
                        <LockClosedIcon className='w-8 ' />
                        <input type="password" name="" id="" placeholder='Password' className='bg-orange-500 w-full px-3 focus:outline-none text-white placeholder:text-gray-300 ' />
                    </div>
                    {register && <div className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-72 h-10 my-2 '>
                        <LockClosedIcon className=' w-8' />
                        <input type="password" name="" id="" placeholder='Repeat Password' className='bg-orange-500 w-full px-3 focus:outline-none text-white placeholder:text-gray-300 ' />
                    </div>}
                        <p className='cursor-pointer pt-2 underline'  onClick={toggleRegister}>{registerText}</p>
                        <button className='bg-orange-500 flex drop-shadow-md px-3 rounded-2xl w-18 h-10 my-2 text-white items-center text-2xl mx-2 w-28 justify-center hover:bg-amber-800 duration-500'>{confirmText}</button>
                </div>

            </div>
        </div>
    );
};

export default Login;