import React from 'react'

export const Experience = ({experience}) => {
    return (  
        <div className='m-16 p-4 md:p-16 w-4/5 mx-auto shadow-lg border border-gray-50'>
        <h1 className='text-2xl md:text-3xl text-center font-semibold mb-4 md:mb-16'>Relevant Experience</h1>
        <div className='flex justify-center'>
            <ul>
                <li>
                    <span className='font-semibold text-justify text-xs md:text-lg'>Clipics - Front-end Developer</span>
                    <span className='font-light text-justify text-xs md:text-lg'> (June 2020 - Present) - </span>
                    <span className='font-light text-center text-xs md:text-lg'> I was in charge of designing and developing a modern, responsive user interface for Clipics webapp.
                    I have achieved that using Tailwind CSS and Tailwind Elements. Working on this project taught me how to develop the sites that translate well between different 
                    screen sizes and the importance of it.</span>
                </li>
            </ul>
        </div>
    </div>
    )
}
