import React from 'react'

const OneLearnCircle = ({ title, number }) => {
    return (
        <div class="">
            <div className="w-[1px] h-[120px] self-center pr-[1px] mx-auto bg-gradient-to-b from-white to-[#9a1fb8]"></div>
            <div className='flex justify-center'>
                <div className="py-2 px-4 w-fit rounded-full text-white font-bold mb-[-10px] bg-gradient-to-r from-[#ca0063] to-[#042bd0]">
                    {number}
                </div>
            </div>
            <p className="font-bold text-2xl md:text-3xl text-center mt-8 bg-clip-text text-transparent bg-gradient-to-r from-[#913461] to-[#02166d]">
                {title}
            </p>

        </div>
    )
}

export default OneLearnCircle
