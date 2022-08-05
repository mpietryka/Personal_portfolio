import React from 'react'

export const Header = ({header, children}) => {
    return (  <div className='text-4xl m-7 justify-center' >{header}<div> {children} </div></div>
    )
}