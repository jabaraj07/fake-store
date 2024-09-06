import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({choosecart}) => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to='./'>Bmi</Link></li>
            <li><Link to='./All'>All</Link></li>
            <li><Link to='./home'>Home</Link></li>
            <li><Link to='./electronics'>Electronics</Link></li>
            <li><Link to='./Mens'>Mens</Link></li>
            <li><Link to='./Womens'>Womens</Link></li>
            <li><Link to='./Jewelery'>Jewelery</Link></li>
            <li><Link to='./cart'>Cart : {choosecart.length}</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar