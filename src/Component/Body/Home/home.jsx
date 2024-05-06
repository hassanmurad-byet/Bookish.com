import React from 'react'
import call from './img/call.png';
import arrow from './img/arrow1.png';
import book from './img/book.png';
import books from './img/book1.jpeg';
import { Link } from 'react-scroll';

import './home.css';

const Home = () => {
    return (
        <div className='Home'>

            <div className="homeall">

                <h1 className="head">Holiday Sale <br /> <span className="head1">All Used & Rare <br /> Books</span> </h1>
                <p className="peratxt">Explore a vast selection of first editions, signed <br />
                    copies, and rare & antiquaruan books from the  <br />finest booksellers in the world.</p>

                <div className="info">

                    <div className="headbtn">
                        <Link className="homebtn">Browse books <img src={arrow} alt="" className="arrow" /> </Link>
                    </div>

                    <div className="allinfo">
                        <img src={call} alt="" className="call" />
                        <p className="calltxt">ask a question <br /> <span className="bold">  01533694189  </span> </p>
                    </div>
                </div>


                <div className="books">

                    <div className="offer">
                        <div className="cercle">
                            <p className='certxt'>up to <br />50% off</p>
                        </div>
                    </div>

                    <img src={book} className='book' alt="" />
                    <img src={books} alt="" className="book1" />

                </div>







            </div>

        </div>
    )
}

export default Home;