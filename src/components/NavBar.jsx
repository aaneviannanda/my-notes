import React from 'react'

export const NavBar = () => {
  return (
    <nav className='p-4 bg-teal-500 drop-shadow-lg'>
        <div className="flex justify-between items-center px-2 text-white text-lg font-medium font-pattaya">
            <h1 className="flex items-center">My Notes</h1>
            <div className="flex justify-end">
                <h1>Note to Self</h1>
            </div>
        </div>
    </nav>
  )
}