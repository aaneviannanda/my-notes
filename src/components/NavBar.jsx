import React from 'react'

export const NavBar = () => {
  return (
    <nav className='p-8 bg-blue-400'>
        <div className="flex justify-between items-center">
            <h1 className="flex items-center">My Notes</h1>
            <div className="flex justify-end">
                <h1>Aan Ni Boss</h1>
            </div>
        </div>
    </nav>
  )
}