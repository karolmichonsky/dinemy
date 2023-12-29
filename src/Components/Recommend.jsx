import React from 'react';
import recommend from '../Assets/Recommend.png'

const reccomendImg = {
    backgroundImage: `url(${recommend})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%"
}

const Recommend = () => {
    return (
        <div>
            <div>
                <img src="{reccomendImg}" alt="" />
            </div>
            <div>
                <img src="{reccomendImg}" alt="" />
            </div>
            <div>
                <img src="{reccomendImg}" alt="" />
            </div>
        </div>
    );
};

export default Recommend;