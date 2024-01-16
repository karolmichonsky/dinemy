import React from 'react';
import { DevicePhoneMobileIcon, MapPinIcon} from '@heroicons/react/24/outline'


const Footer = () => {
    return (
        <div className='flex flex-wrap text-white bg-amber-800 px-72 py-16'>
            <div className='flex flex-col px-8 w-1/2'>
                <h1 className=' text-2xl font-bold'>Dinemy</h1>
                <h3 className=' text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus provident itaque est aspernatur alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus provident itaque est aspernatur alias.</h3>
                <p className='flex pt-2'><DevicePhoneMobileIcon className=' w-6 mr-2'/>Rzeszow, Grodzisko 324 </p>
                <p className='flex pt-2'><MapPinIcon className=' w-6 mr-2'/>+47 928 929 929</p>
            </div>
            <div className='w-1/4 px-8'>
                <h1 className=' text-2xl font-bold'>Links</h1>
                <ul className=' list-none'>
                    <a href="/"><li>Home</li></a>
                    <a href="/"><li>Menu</li></a>
                    <a href="/"><li>Support</li></a>
                    <a href="/"><li>Login</li></a>
                </ul>
            </div>
            <div className='w-1/4 px-8'>
                <h1 className=' text-2xl font-bold'>Links</h1>
                <ul className=' list-none'>
                    <a href="/"><li>Home</li></a>
                    <a href="/"><li>Menu</li></a>
                    <a href="/"><li>Support</li></a>
                    <a href="/"><li>Login</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;