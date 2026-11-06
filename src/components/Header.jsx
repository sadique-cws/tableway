import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='flex flex-1 bg-orange-600 text-white p-4 justify-between items-center'>
       <Link to="/">home</Link>
        <h2 className='text-2xl font-bold'>Table Way</h2>
       <Link to="/login">login</Link>
    </div>
  )
}

export default Header