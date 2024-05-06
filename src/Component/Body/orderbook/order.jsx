import React from 'react'
import './order.css';
import arrow from './img/arrow1.png';
import { Link } from 'react-router-dom';
const Order = () => {
  return (      
    <div className='orderbook'>
       
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1f6f8" fill-opacity="1" d="M0,32L24,48C48,64,96,96,144,112C192,128,240,128,288,106.7C336,85,384,43,432,58.7C480,75,528,149,576,154.7C624,160,672,96,720,69.3C768,43,816,53,864,85.3C912,117,960,171,1008,165.3C1056,160,1104,96,1152,101.3C1200,107,1248,181,1296,229.3C1344,277,1392,299,1416,309.3L1440,320L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      
       <div className="rodernow">
        <div className="place"> 
        
        <p className="find">CAN'T FIND YOUR BOOK?</p>
        <h2 className="orderhere">Order your book here</h2>
        </div>
        <div className="place"> 
        <Link to='/order' className="placeord">Place an order <img src={arrow} alt="" className="pls" />  </Link>
        <p className="nodepo">* No deposit or credit card required</p>
       
         </div>
       

      </div>




    </div>
   
  )
}

export default Order;