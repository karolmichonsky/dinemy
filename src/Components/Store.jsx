import React from 'react';
import Play from '../Assets/play.png';
import AppStore from '../Assets/appstore.png';

const Store = () => {
    return (
        <div className='px-72 py-16 bg-slate-200 flex'>
            <div className='px-24'>
                <h1 className=' text-4xl font-bold'>You can get Dinemy for Android and IOS</h1>
            </div>
            <div className='px-24'>
                <img src={Play} alt="" className=' max-w-[350px]'/>
                <img src={AppStore} alt="" className=' max-w-[350px]'/>
            </div>
        </div>
    );
};

export default Store;