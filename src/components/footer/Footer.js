import React from 'react'

export const Footer = ({footer}) => {
    return (  
    <div>
        <div className='flex justify-center' >
        <a href='https://www.linkedin.com/in/mateusz-pietryka-4a7288239' className='mx-12'>Linkedin</a>
        <a href='https://github.com/mpietryka' className='mx-12'>Github</a>
        </div>
        <div className='text-sm text-right px-4'>
            Created by Mateusz Pietryka
        </div>
    </div>
    )
}