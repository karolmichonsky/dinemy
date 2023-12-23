import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <div className='w-screen h-[80px] bg-orange-400 fixed drop-shadow-lg'>
            <div className='px-5 flex justify-between items-center w-full h-full'>
                <div>
                    <a href="/" className=' font text-3xl bold text-white'>DINEMY</a>
                </div>
                <div className='flex'>
                    <ul className='flex justify-between p-10'>
                        <li className='px-7 py-2 text-2xl'>Home</li>
                        <li className='px-7 py-2 text-2xl'>Menu</li>
                        <li className='px-7 py-2 text-2xl text-white bg-red-700 rounded-xl'>Login</li>
                    </ul>
                    <Bars3Icon className='w-7 hidden' />
                    <XMarkIcon className='w-7 hidden' />
                </div>
                
            </div>
        </div>
    );
};

export default Header;