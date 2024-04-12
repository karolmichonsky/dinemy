import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon, UserIcon, PlusIcon } from '@heroicons/react/24/solid'
import Login from './Login';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import data from '../database/data.js'
import { cartStorage } from '../database/cartStorage.js'



const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [isLogged, changeIsLogged] = useState(false);
    const [isSearching, toggleIsSearching] = useState(false);

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
            setSearchResult(filteredResults);
            if(filteredResults.length!==0 && searchValue!==''){
                toggleIsSearching(true);
            }
            else{
                toggleIsSearching(false)
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchValue]);

    const searchHandle = (event) => {
        setSearchValue(event.target.value);
    };

    const toggleCart = () => {
        setSearchResult([]);
        setShowLogin(false);
        setShowCart(showLogin => !showLogin);
    };

    const toggleLogin = () => {
        setSearchResult([]);
        setShowCart(false);
        setShowLogin(showCart => !showCart);
    };

    const toggleIsLogged = () => {
        changeIsLogged(isLogged => !isLogged);
    };

    return (
        <div>
            <div className='w-screen h-[80px] bg-amber-800 fixed drop-shadow-lg z-[2]'>
                <div className=' flex justify-between items-center w-full h-full px-8'>
                    <div className='flex'>
                        <Link to={'/'}><h1 href="/" className='text-3xl bold text-white font-roboto font-bold mx-3'>DINEMY</h1></Link>
                        <div className='rounded-2xl w-36 h-10 bg-white flex drop-shadow-md px-3 sm:w-72 lg:w-96 duration-300 sm:mx-12'>
                            <MagnifyingGlassIcon className='w-7 text-orange-500' />
                            <input type="text" value={searchValue} name="" id="" placeholder='Search for your favorite food' onChange={searchHandle} onBlur={()=>toggleIsSearching(false)} className=' bg-white w-full px-3 focus:outline-none text-black mr-1' />
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
                {isSearching && <div className=' flex flex-col px-12 py-1 bg-white'>
                    {searchResult.map((search) => (
                        <div className='  z-[1] sticky bg-white px-8  drop-shadow-lg rounded-xl mx-4 my-1 flex hover:bg-gray-100 max-w-md justify-center flex-wrap flex-row items-center group'>
                            <div className='pr-4 w-3/4 flex items-center justify-between'>
                                <div className='flex flex-row items-center  [&>*]:pr-2'>
                                    <h1 className=' text-md font-bold py-1'>{search.title}</h1>
                                    <h1 className=' font-bold'>{search.price}$</h1>
                                </div>
                                < PlusIcon className="w-8 h-8 cursor-pointer rounded-full bg-slate-100 p-1 m-1 group-hover:bg-slate-200" onClick={() => cartStorage.setItem(search)} />
                            </div>
                        </div>
                    ))}
                </div>}
            </div>

        </div>


    );
};

export default Header;