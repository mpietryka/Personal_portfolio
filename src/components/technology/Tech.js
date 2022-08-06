import React from 'react'

export const Tech = ({tech}) => {
    return (  
    <div className='m-16 p-16 w-3/4 mx-auto shadow-lg border border-gray-50'>
        <h1 className='text-3xl text-center font-semibold mb-16'>Technologies I'm familiar with:</h1>
        <div className='grid grid-cols-3  gap-8'>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-lg font-semibold max-w-xs shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                HTML5
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-lg font-semibold max-w-xs shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                CSS3
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-lg font-semibold max-w-xs shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                Tailwind CSS
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-lg font-semibold max-w-xs shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                BootStrap
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-lg font-semibold max-w-xs shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                Java
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-lg font-semibold max-w-xs shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                SQL
            </div>
        </div>
    </div>
    )
}