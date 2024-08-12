import React from 'react'
import './layout.css';
import SearchInput from '../users/SearchInput';

const Navbar = ({filteredArr}) => {

  return (
    <nav className='main-menu'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>     
        </ul>
       <SearchInput filteredArr={filteredArr}/>
    </nav>
  )
}

export default Navbar