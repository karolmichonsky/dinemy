import React from 'react';
import { EnvelopeIcon, LockClosedIcon} from '@heroicons/react/24/outline'


const Login = () => {
    return (
        <div className=' fixed z-[1] bg-white pt-[80px]'>
            <div>
                <h1 className=' text-3xl'>Login</h1>
                <div className='flex'>
                    <EnvelopeIcon className='w-8' />
                    <input type="email" name="" id="" placeholder='E-Mail'/>
                </div>
                <div className='hidden w-8 '>
                    <EnvelopeIcon />
                    <input type="email" name="" id="" placeholder='Repeat E-Mail'/>
                </div>
                <div className='flex'>
                    <LockClosedIcon className='w-8 '/>
                    <input type="password" name="" id="" placeholder='Password'/>
                </div>
                <div className='hidden '>
                    <LockClosedIcon className=' w-8'/>
                    <input type="password" name="" id="" placeholder='Repeat Password'/>
                </div>
                <div>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;