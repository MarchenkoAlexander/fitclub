import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div className='header'>

            <img src={Logo} alt="" className='logo' />
            <ul className='header-menu'>
                <li><Link
                    to='home'
                    smooth={true}
                >Home</Link></li>
                <li><Link
                    to='programs'
                    smooth={true}
                >Programs</Link></li>
                <li><Link
                    to='reasons'
                    smooth={true}
                >Why us</Link></li>
                <li><Link
                    to='plans'
                    smooth={true}
                >Plans</Link></li>
                <li><Link
                    to='testimonials'
                    smooth={true}
                >Testimonials</Link></li>
            </ul>
        </div>
    )
}

export default Header