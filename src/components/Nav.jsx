import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <React.Fragment>
      <div>
        <ul id="navlinks" className="flex justify-center m-4 pl-6 pr-6 bg-[#4169E1] rounded-[200px] text-lg bg-opacity-45 font-500">
          <li className="m-2">
            <Link to='/'>Home</Link>
          </li>
          <li className="m-2">
          <Link to='/'>About Us</Link>
          </li>
          <li className="m-2">
          <Link to='/services'>Services</Link>
          </li>
          <li className="m-2">
          <Link to='/'>Contact</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Nav