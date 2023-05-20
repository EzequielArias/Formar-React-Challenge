import React from 'react'
import { Navigation, SearchInput } from './styled-components/Navbar'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
  return (
        <Navigation>
            <SearchInput/>
            <FaBars/>
        </Navigation>
    )
}

export default Navbar