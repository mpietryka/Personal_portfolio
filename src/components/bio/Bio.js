import React from 'react'
import profilePic from './profilePicture.png'

export const Bio = ({bio}) => {
    return (  
    <div className='m-16 p-4 md:p-16 w-4/5 mx-auto shadow-lg border border-gray-50'>
        <div className='grid lg:grid-cols-2'>
            <div className='flex justify-center mb-4'>
                <img src={profilePic} alt="logo" className='md:max-h-72 rounded-full hover:scale-105 transition duration-300 ease-in-out my-auto'/>
            </div>
            <div className='max-w-sm md:max-w-lg md:mx-16 mx-auto'>
                <h1 className='text-xl md:text-3xl text-left font-semibold'>About me</h1>
                <p className='text-justify text-sm md:text-md font-light pt-2'>My name is Mateusz Pietryka, I am 29 years old and I am a soon to be a 3rd year Computer 
                Science Student. I am very interested in Front-end Design and Development. 
                </p>
                <p className='text-justify text-sm md:text-md font-light pt-2'>I have discovered my passion for programming not long before Covid-19 pandemic started and
                I decided to pursue this as my career. After a short research about the available courses, I have applied to London Metropolitan Unviersity via clearing 
                and started my course within 2 months. 
                </p>
                <p className='text-justify text-sm md:text-md font-light pt-2'>As the time passes, I feel like I have made the best decision of my life, studying Computer 
                Science taught me much more than just programming languages, it taught me critical thinking, problem solving and that I can achieve anything if I try hard 
                enough.
                </p>
            </div>
        </div>
    </div>
    )
}