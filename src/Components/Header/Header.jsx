import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../logo.png";
import { FaSearch } from "react-icons/fa";


const Header = () => {
   // console.log(logo)
  return (
    <nav className="header">
        <img src={logo} alt="logo" />
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/tvshows">Movies</Link>
            <Link to="/tvshows">Recently Added</Link>
            <Link to="/tvshows">Mylist</Link>
        </div>
        <FaSearch />
    </nav>
  )
}

export default Header;