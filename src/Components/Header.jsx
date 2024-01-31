import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/solid'
import Login from './Login';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(showLogin => !showLogin);
    };

    return (
        <div className='w-screen h-[80px] bg-amber-800 fixed drop-shadow-lg z-[2]'>
            <div className=' flex justify-between items-center w-full h-full px-8'>
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
                        <UserIcon className='w-9 bg-white rounded-full drop-shadow-2xl text-orange-500 p-1 mx-1 lg:mx-2 hover:text-amber-800 duration-300 lg:w-11' onClick={toggleLogin} />
                    </div>
                    
                </div>
            </div>
            {showLogin && <Login closeLogin={toggleLogin} />}
        </div>
    );
};

export default Header;