import React from 'react';

const RoundedButoon = ({ name, icon, theme }) => {
    const isGrayTheme = theme === "gray";

    return (
        <button
            className={`flex gap-3 rounded-full items-center px-4 py-2 font-semibold 
        ${isGrayTheme ? 'border-[#888888] hover:bg-[#888888] hover:text-white' : 'border-orange-600 hover:bg-pink-700 hover:text-white'} border`}
            style={{
                boxShadow: isGrayTheme
                    ? "#cacaca 0px 14px 30px" // gray shadow
                    : "rgb(255 161 161 / 50%) 0px 14px 30px", // Default shadow
            }}
        >
            {name}
            {icon}
        </button>
    );
};

export default RoundedButoon;
