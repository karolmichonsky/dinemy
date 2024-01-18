import React from 'react';
import Play from '../Assets/play.png';
import AppStore from '../Assets/appstore.png';

const Store = () => {
    return (
        <div className=' bg-slate-200 flex'>
            <div className='px-8 flex justify-center items-center'>
                <h1 className=' text-4xl font-bold'>You can get <span className=' text-amber-800'>Dinemy</span> for Android and IOS</h1>
            </div>
            <div className=''>
                <img src={Play} alt="" className=''/>
                <img src={AppStore} alt="" className=''/>
            </div>
        </div>
    );
};

export default Store;