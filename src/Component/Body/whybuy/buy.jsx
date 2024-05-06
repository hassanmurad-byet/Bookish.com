import React from 'react'
import './buy.css';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/incon3.png';
import icon4 from './img/icon4.png';
import iconline from './img/iconline.png';
import read from './img/read.jpg';
import spli from './img/splash.jpg';
import sell from './img/sell.jpg';
import { Link } from 'react-router-dom';



const Buy = () => {
    return (
        <div className='Buy'>
            <h2 className="why">Why Buy Book at Bookish Store</h2>
            <div className="buyimg">
                <div className="alltxt">
                    <img src={icon1} alt="" className="imgs" />
                    <h2 className="headtxt">Quality First</h2>
                    <p className="des">The book is most famous. Book paper and page are good. paper quality is very good. book bonding is most durable and long lasting. </p>
                </div>
                <div className="alltxt"> <img src={iconline} alt="" className="imgs" /> </div>

                <div className="alltxt">
                    <img src={icon2} alt="" className="imgs" />
                    <h2 className="headtxt">No surprises!</h2>
                    <p className="des">The book is most famous. Book paper and page are good. paper quality is very good. book bonding is most durable and long lasting. </p>
                </div>
                <div className="alltxt"> <img src={iconline} alt="" className="imgs" /> </div>
                <div className="alltxt">
                    <img src={icon3} alt="" className="imgs" />
                    <h2 className="headtxt">Best Price</h2>
                    <p className="des">The book is most famous. Book paper and page are good. paper quality is very good. book bonding is most durable and long lasting. </p>
                </div>
                <div className="alltxt"> <img src={iconline} alt="" className="imgs" /> </div>
                <div className="alltxt">
                    <img src={icon4} alt="" className="imgs" />
                    <h2 className="headtxt">Free Shipping</h2>
                    <p className="des">The book is most famous. Book paper and page are good. paper quality is very good. book bonding is most durable and long lasting. </p>
                </div>
            </div>

            <div className="readinfo"> 
            <div className="lovered">
                <p className="our">OUR MISSION & VISION</p>
                <h2 className="Forthe">For the Love of  <br /> Reading </h2>
                <p className="txtboxs">  	
PeterisP on Oct 26, 2020 | root | parent | next [–]

IMHO the research community in general is definitely not ignoring intellectual property rights - for natural language processing, there are papers and publication tracks in major conferences specifically about the legal issues of corpora; many researchers are quite painfully aware of all the various legal restrictions that exist.
However, the legal environment is very different. <br /> however, we still can and do use also the works of the publishers who would refuse to grant any permission, because local copyright law has specific exceptions that allows the usage these works for noncommercial research purposes. Doing so is not ignoring their rights, their rights are not violated but rather they are limited; their exclusivity right (privilege would be a more appropriate word) to make copies is not absolute. There are even some countries with explicit legal duty for the publishers to provide digital versions of their works to national corpora where they will be used for (among other things) machine learning models</p>

            </div>
            <div className="read">
                <div className="reimg"> 
                 <img src={read} alt="" className="readimg" /></div>
                <div className="reaimg"> 
                <img src={spli} alt="" className='rea' />
                </div>
            </div>
            </div>
            
            <div className="sellbook">
                <div className="sellimgs ">
                <img src={sell} alt="" className='sellimg' />
                </div>
                <div className="sell"> 
                <h4 className="sellinfo">Do you have any <br /> books you want to <br /> get rid of?</h4>
                <div className="sellyor">
                    <p className="simple">Sell your books in 3 simple steps</p>
                    <Link to='/sell' className="satrt">Start selling your books now </Link>
                </div>
                </div>
            </div>

            <div className="let">
                <h2 className="dont">Don't Let <br /> Opportunities Fly Away </h2>
                <p className="flytxt"> paper quality is very good. book bonding is most durable and long <br /> lasting paper quality is very good. book bonding is most durable and <br /> long lasting paper quality is very good. book bonding is most  durable and <br /> long lasting paper quality is very good.book bonding is most durable and long lasting</p>
                 <div className="ors"> 
                 <Link to='/semi' className="buybtn">Buy Semi-new & Used books</Link> 
                 <p className="or">or</p>
                 <Link to='/rare' className="buybtn">Buy Antique & Rare books</Link> 
                 </div>
            </div>





        </div>
    )
}

export default Buy;