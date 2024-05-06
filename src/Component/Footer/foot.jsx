import React from 'react'
import './foot.css';
import mail from './footimg/mail.png';
import face from './footimg/face.png';
import loca from './footimg/loca.png';
import insta from './footimg/insta.png';
import ph from './footimg/ph.png';
import visa from './footimg/visa.png';
import apple from './footimg/appl.png';
import paypal from './footimg/paypal.png';

import logo from './footimg/logo.jpeg';

const Foot = () => {
  return (

    <div className='footer'>

      <div className="foot1">
        <div className="foottxt">
          <p className="sub">Subscribe for our newsletter</p>
          <h4 className="promo">Promo, new books, and <br /> special offers to your inbox</h4>
        </div>
        <div className="foots">
          <div className="inputs">
            <input type="text" className='footinput' placeholder='Your email address...' />
          </div>
        </div>
        <div className="footsbtns">
          <div className="footerbtn">
            <a href="/" className="footbtn">  <img src={mail} alt="" className="footsimg" /> Subscribe</a>
          </div>
        </div>
      </div>
      <div className="footline"></div>




      <div className="foot2">
         
        <div className="flogos"> 
        <div className="footlogo">
          <img src={logo} alt="" className="logoss" />
          <p className="flogotxt">bookish <br /> <h5 className='ftxt'>online book store </h5> </p>
        </div>
         <p className="Seo"> community in general is definitely not ignoring <br />
          intellectual property rights - for natural language <br /> processing, there are papers and publication tracks.</p> </div> 
       

        <div className="flinks">
          <p className="linkH">Links</p>
          <a href="/" className="buy1">Buy Semi-new Book</a>
          <a href="/" className="buy1">Buy Used Book</a>
          <a href="/" className="buy1">Buy Rare Book</a>
          <a href="/" className="buy1">Place an Book</a>
          <a href="/" className="buy1">Sell Your Book</a>
        </div>

        <div className="flinks">
          <p className="linkH">Information</p>
          <a href="/" className="buy1">Order status</a>
          <a href="/" className="buy1">Shipping</a>
          <a href="/" className="buy1">FAQ</a>
          <a href="/" className="buy1">Reviews</a>
          <a href="/" className="buy1">Contact</a>
        </div>
        <div className="flinks">
          <p className="linkH">Contact</p>
          <a href="/" className="buy1"> <img src={loca} alt="" className="fimg" />1230 Uttara, Road-12b, Dhaka</a>
          <a href="/" className="buy1"><img src={ph} alt="" className="fimg" /> 01533694189</a>
          <a href="/" className="buy1"> <img src={mail} alt="" className="fimg" />hassan2010@gmail.com</a>
          <div className="icon">
            <a href="/" className="buy1"> <img src={face} alt="" className="social" /></a>
            <a href="/" className="buy1"> <img src={insta} alt="" className="social" /> </a> 
          </div>
        </div>
      </div>

      <div className="footline1"></div>

      <div className="copyright">
        <p className="copys">Copyright © 2023  -All Rights Resevered / privacy Policy / Terms and Confitions</p>
        <dic className="cards">
          <img src={visa} alt="" className="mycards " />
          <img src={apple} alt="" className="mycards " />
          <img src={paypal} alt="" className="mycards" />
        </dic>
      </div>



    </div>

  )
}

export default Foot;