import React from 'react';
import Nav_link from './nav_link'
import Image from './image'

const Navbar = () => {
        return (
    
        <div className="navbar">
          <navbar />
            <Image />
            <a href= "#">Home</a>
            <a href= "#">Contact</a>
            <a href= "#">About</a>
            <Nav_link />
          
        </div>

        )
}
export default Navbar