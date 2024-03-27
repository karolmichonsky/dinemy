import React from "react";

const Button1 = ({ text, onClick }) => {
    return (
        <button
            className="bg-gradient-to-tr from-[#fd9e0e] to-[#fc4508] rounded-3xl shadow-lg text-white text-2xl px-4 py-2 m-2 font-bold"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button1;
