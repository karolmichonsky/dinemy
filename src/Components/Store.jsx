import React from 'react';
import Play from '../Assets/play.png';
import AppStore from '../Assets/appstore.png';

const Store = () => {
    return (
        <div className=' bg-slate-200 flex gap-9 p-7 items-center flex-wrap justify-center text-center lg:py-24'>
            <div className='flex justify-center items-center'>
                <h1 className=' text-4xl font-bold'>You can get <span className=' text-amber-800'>Dinemy</span> for Android and IOS</h1>
            </div>
            <div className='pl-7'>
                <img src={Play} alt="" className=' max-h-32'/>
                <img src={AppStore} alt="" className=' max-h-32'/>
            </div>
        </div>
    );
};

export default Store;