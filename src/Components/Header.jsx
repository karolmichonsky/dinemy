import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/solid'
import Login from './Login';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import data from '../database/data.js'


const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [isLogged, changeIsLogged] = useState(false);

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const filteredResults = data.filter(item => item.title.includes(searchValue));
            setSearchResult(filteredResults);
            console.log(filteredResults)
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchValue]);

    const searchHandle = (event) => {
        setSearchValue(event.target.value);
    };


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
                        <input type="text" value={searchValue} name="" id="" placeholder='Search for your favorite food' onChange={searchHandle} className=' bg-white w-full px-3 focus:outline-none text-black mr-1' />
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