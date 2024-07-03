
import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    const handleSearch = (searchTerm) => {
        console.log("Search term:", searchTerm);
      };
  return (
    <div className='bg-black'>
    <Header onSearch={handleSearch}/>
    <Outlet />
    </div>
  )
}

export default UserLayout