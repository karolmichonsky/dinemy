import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='w-screen h-[80px] bg-amber-800 fixed drop-shadow-lg'>
            <div className='lg:px-7 flex justify-between items-center w-full h-full'>
                <div>
                    <a href="/" className='text-3xl bold text-white font-roboto font-bold mx-3'>DINEMY</a>
                </div>
                <div className='rounded-2xl w-36 h-10 bg-orange-500 flex drop-shadow-md px-3 sm:w-72 lg:w-96 duration-300'>
                    <MagnifyingGlassIcon className='w-7' />
                    <input type="text" name="" id="" className=' bg-orange-500 w-full px-3 focus:outline-none text-white'/>
                </div>
                <div className='flex'>
                    <div className='flex'>
                        <ShoppingBagIcon className=' w-9 bg-white rounded-full drop-shadow-2xl text-orange-500 p-1 lg:mx-2 hover:text-amber-800 duration-300 lg:w-11' />
                        <UserIcon className='w-9 bg-white rounded-full drop-shadow-2xl text-orange-500 p-1 mx-1 lg:mx-2 hover:text-amber-800 duration-300 lg:w-11' />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;