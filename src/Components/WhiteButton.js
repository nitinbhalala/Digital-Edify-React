import React from 'react';

const WhiteButton = ({ name, icon, theme }) => {
    const isBlueTheme = theme === "blue";

    return (
        <button
            className={`flex justify-center min-w-44 gap-2 lg:gap-3 text-xs lg:text-base rounded-lg items-center px-2.5 lg:px-4 py-1.5 lg:py-2 font-semibold bg-white
        ${isBlueTheme ? 'border-[#0078fe] hover:bg-[#2977d1] hover:text-white' : 'border-orange-600 hover:bg-pink-700 hover:text-white'} border`}
            style={{
                boxShadow: isBlueTheme
                    ? "rgb(161 205 255 / 50%) 0px 14px 30px" // Blue shadow
                    : "rgb(255 161 161 / 50%) 0px 14px 30px", // Default shadow
            }}
        >
            {icon}
            {name}
        </button>
    );
};

export default WhiteButton;
