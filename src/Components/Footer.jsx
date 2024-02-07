import React from 'react';
import { DevicePhoneMobileIcon, MapPinIcon} from '@heroicons/react/24/outline'


const Footer = () => {
    return (
        <div className='flex flex-wrap text-white bg-amber-800 p-8 lg:px-44 lg:py-16'>
            <div className='flex flex-col px-8 w-1/2'>
                <h1 className=' text-2xl font-bold'>Dinemy</h1>
                <h3 className=' text-lg hidden lg:block '>Thank you for choosing <b>Dinemy</b> for your food ordering needs! We're dedicated to bringing you the tastiest dishes with convenience at your fingertips.</h3>
                <p className='flex pt-2'><DevicePhoneMobileIcon className=' w-6 mr-2'/>Rzeszow, Grodzisko 324 </p>
                <p className='flex pt-2'><MapPinIcon className=' w-6 mr-2'/>+47 928 929 929</p>
            </div>
            <div className='w-1/4'>
                <h1 className=' text-2xl font-bold'>Service</h1>
                <ul className=' list-none'>
                    <a href="/"><li>Contact</li></a>
                    <a href="/"><li>Login</li></a>
                    <a href="/"><li>Mobile</li></a>
                    <a href="/"><li>My account</li></a>
                    <a href="/"><li>Home</li></a>
                </ul>
            </div>
            <div className='w-1/4'>
                <h1 className=' text-2xl font-bold'>Top cuisines</h1>
                <ul className=' list-none'>
                    <a href="/"><li>Chinese</li></a>
                    <a href="/"><li>Pizza</li></a>
                    <a href="/"><li>Kebab</li></a>
                    <a href="/"><li>Sushi</li></a>
                    <a href="/"><li>Indian</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;