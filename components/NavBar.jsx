import React from 'react'
import airbnbLogo from '../public/assets/airbnb-logo.png'
function NavBar() {
    return (
        <nav className='navbar'>
            <img src={airbnbLogo} alt="AirBnb Logo" className='nav--logo' />
        </nav>
    )
}

export default NavBar