import React from 'react'

const BlackButton = ({ name, icon }) => {
    return (
        <button className="flex gap-3  items-center px-4 py-2 bg-black text-white font-medium rounded-lg hover:bg-sky-500">
            {icon}
            {name}
        </button>
    )
}

export default BlackButton
