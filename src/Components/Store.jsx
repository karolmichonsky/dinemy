import React from 'react';
import Play from '../Assets/play.png';
import AppStore from '../Assets/appstore.png';

const Store = () => {
    return (
        <div className=' bg-slate-200 flex gap-9 p-7 items-center'>
            <div className='flex justify-center items-center'>
                <h1 className=' text-3xl font-bold'>You can get <span className=' text-amber-800'>Dinemy</span> for Android and IOS</h1>
            </div>
            <div className='pl-7'>
                <img src={Play} alt="" className=' max-h-25'/>
                <img src={AppStore} alt="" className=''/>
            </div>
        </div>
    );
};

export default Store;