import React from 'react'
import logo from './img/logo.jpeg';
import sre from './img/search.png';
import heart from './img/loves.png';
import shop from './img/carts.png';
import user from './img/user1.png';
import { Link } from 'react-router-dom';

import './nav.css';

const Navbar = () => {
  return (
    <div className='navbarcontain'>
       
      <div className="nav1">
        <div className="logos">
        <img src={logo} alt="" className="logo" />
        <p className="logotxt">bookish <br /> <h5 className='txt'>online book store </h5> </p> 
        </div>

        <div className="navinputs">
        <div className="input"> 
        <img src={sre} alt="" className="inputimg" />
        <input type="text"  className='sear' placeholder='Search by title,author,keyword'/>
        </div>
        </div>
        <button className="btns">Find my book</button>
        </div>

        <div className="nav2">
          <div className="navitems">
          <Link activeClass='active' to='/' className='navitem'>HOME</Link>
          <Link activeClass='active' to='/semi' className='navitem'>SEMI-NEW & USED</Link>
          <Link  activeClass='active' to='/rare' className='navitem'>ANTIQUE & RARE</Link>
          <Link activeClass='active' to='/order' className='navitem'>ORDER BOOK</Link>
          <Link activeClass='active' to='/sell' className='navitem'>SELL YOUR BOOKS</Link>
        </div>
        <div className="navimgs">
          <img src={heart} alt="" className="navimg" />
          <img src={shop} alt="" className="navimg" />
          <img src={user} alt="" className="navimg" />

        </div>
        </div>
     

      

        




    </div>
  )
}

export default Navbar;