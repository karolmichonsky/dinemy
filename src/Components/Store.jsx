import React from 'react';
import Play from '../Assets/play.png';
import AppStore from '../Assets/appstore.png';

const Store = () => {
    return (
        <div className='px-72 py-16 bg-slate-200 flex flex-wrap'>
            <div className='px-24 flex justify-center items-center lg:text-center lg:px-0'>
                <h1 className=' text-4xl font-bold'>You can get <span className=' text-amber-800'>Dinemy</span> for Android and IOS</h1>
            </div>
            <div className='px-24 flex flex-col justify-center items-center lg:px-0'>
                <img src={Play} alt="" className=' max-w-[350px]'/>
                <img src={AppStore} alt="" className=' max-w-[350px]'/>
            </div>
        </div>
    );
};

export default Store;