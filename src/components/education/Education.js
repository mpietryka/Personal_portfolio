import React from 'react'

export const Education = ({education}) => {
    return (  
        <div className='m-16 p-4 md:p-16 w-4/5 mx-auto shadow-lg border border-gray-50'>
        <h1 className='text-2xl md:text-3xl text-center font-semibold mb-4 md:mb-16'>Relevant Education:</h1>
        <div className='flex justify-center'>
            <ul>
                <li>
                    <span className='font-semibold text-justify text-xs md:text-lg'>London Metropolitan University BSc (Hons) Computer Science -</span>
                    <span className='font-light text-justify text-xs md:text-lg'> 2020 - Present </span>
                </li>

            </ul>

        </div>
    </div>
        )
}