import React from 'react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <div className='w-screen h-[80px] bg-amber-800 fixed drop-shadow-lg'>
            <div className='px-5 flex justify-between items-center w-full h-full'>
                <div>
                    <a href="/" className='text-3xl bold text-white px-7 font-roboto font-bold'>DINEMY</a>
                </div>
                <div className='flex rounded-2xl w-96 h-10 bg-orange-500 drop-shadow-md px-3'>
                    <MagnifyingGlassIcon className='w-7' />
                    <input type="text" name="" id="" className=' bg-orange-500 w-full px-3 focus:outline-none text-white'/>
                </div>
                <div className='flex'>
                    <ul className='flex justify-between p-10'>
                        <li className='px-7 py-2 text-2xl text-white mx-1 hover:bg-black hover:bg-opacity-5 rounded-xl duration-150'>HOME</li>
                        <li className='px-7 py-2 text-2xl text-white mx-1 hover:bg-black hover:bg-opacity-5 rounded-xl duration-150'>MENU</li>
                        <li className='px-7 py-2 text-2xl text-white bg-orange-500 rounded-xl drop-shadow-md mx-1 hover:bg-orange-600 duration-150'>LOGIN</li>
                    </ul>
                    <Bars3Icon className='w-7 hidden' />
                    <XMarkIcon className='w-7 hidden' />
                </div>
            </div>
        </div>
    );
};

export default Header;