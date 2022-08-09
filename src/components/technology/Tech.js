import React from 'react'

export const Tech = ({tech}) => {
    return (  
    <div className='m-16 p-4 md:p-16 w-4/5 mx-auto shadow-lg border border-gray-50'>
        <h1 className='text-2xl md:text-3xl text-center font-semibold mb-8 md:mb-16'>Technologies I'm familiar with</h1>
            <div className='grid grid-cols-3 gap-3 md:gap-8 text-white'>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-xs md:text-lg font-semibold shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                HTML5
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-xs md:text-lg font-semibold shadow-md
            hover:scale-110 transition duration-300 ease-in-out align-middle'>
                CSS3
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-xs md:text-lg font-semibold shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                Tailwind CSS
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-xs md:text-lg font-semibold shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                BootStrap
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-xs md:text-lg font-semibold shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                Java
            </div>
            <div className='py-3 rounded-lg bg-blue-400 text-center text-xs md:text-lg font-semibold shadow-md
            hover:scale-110 transition duration-300 ease-in-out'>
                SQL
            </div>
    
            </div>
    </div>
    )
}