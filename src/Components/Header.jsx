import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/solid'
import Login from './Login';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [isLogged, changeIsLogged] = useState(false);
    

    const toggleCart = () => {
        setShowLogin(false);
        setShowCart(showLogin => !showLogin);
    };
    
    const toggleLogin = () => {
        setShowCart(false);
        setShowLogin(showCart => !showCart);
    };
    
    const toggleIsLogged = () => {
        changeIsLogged(isLogged => !isLogged);
    };

    return (
        <div className='w-screen h-[80px] bg-amber-800 fixed drop-shadow-lg z-[2]'>
            <div className=' flex justify-between items-center w-full h-full px-8'>
                <div className='flex'>
                    <Link to={'/'}><h1 href="/" className='text-3xl bold text-white font-roboto font-bold mx-3'>DINEMY</h1></Link>
                    <div className='rounded-2xl w-36 h-10 bg-white flex drop-shadow-md px-3 sm:w-72 lg:w-96 duration-300 sm:mx-12'>
                        <MagnifyingGlassIcon className='w-7 text-orange-500' />
                        <input type="text" name="" id="" placeholder='Search for your favorite food' className=' bg-white w-full px-3 focus:outline-none text-black mr-1'/>
                    </div>
                </div>
                
                <div className='flex'>
                    <div className='flex'>
                        <ShoppingBagIcon className=' w-9 bg-white rounded-full drop-shadow-2xl text-orange-500 p-1 lg:mx-2 hover:text-amber-800 duration-300 lg:w-11' onClick={toggleCart} />
                        <UserIcon className='w-9 bg-white rounded-full drop-shadow-2xl text-orange-500 p-1 mx-1 lg:mx-2 hover:text-amber-800 duration-300 lg:w-11' onClick={toggleLogin} />
                    </div>
                    
                </div>
            </div>
            {showLogin && !isLogged && <Login closeLogin={toggleLogin} userLogged={toggleIsLogged} />}
            {showCart && <ShoppingCart closeCart={toggleCart} />}


        </div>
    );
};

export default Header;