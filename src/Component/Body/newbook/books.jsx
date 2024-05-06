import React from 'react'
import './semi.css';
import arrow from './img/arrow.png';
import arrow1 from './img/arrow1.png'
import book0 from './img/book.jpg';
import book1 from './img/book0.png';
import book2 from './img/book2.jpeg';
import book3 from './img/book3.jpeg';
import book4 from './img/book9.jpg';
import cart from './img/carts.png';



const Books = () => {
    return (
        <div className='show'>
            
            <div className='showbook'>
                <div className='infobook' >
                    <p className='newtxt'>NEW ARRIVAL <br /> <span className='span'>Semi new & used books</span> </p>
                </div>
                <div className='searchbtn'>
                    <a href='/' className='searchbook'>view all books</a>
                    <div className='arrowbtn '>
                        <div className='arr' >    <img src={arrow} alt='' className='arrimgs' />  </div>
                        <div className='arr'>  <img src={arrow1} alt='' className='arrimgs' /> </div>
                    </div>
                </div>
            </div>
            <div className='line'> </div>



            <div className='booksimgs' >
                <div className='semibok'>
                    <img src={book0} alt=' ' className='seminewbook' />
                    <p className='catagory'> Novel & Life </p>
                    <div className='bookline'> </div>
                    <p className='name' >Amazonia <br /> <span className='writer'>James Rollins </span> <br /> </p>
                    <p className='price'>$3.99</p>
                    <a className='cart' href="/"> <img src={cart} alt="" className='cartimg' />Add to basket </a>
                    <a className='wish' href="/">add to wishlist </a>

                </div>
                <div className='semibok'>
                    <img src={book1} alt=' ' className='seminewbook' />
                    <p className='catagory'> Novel & Life </p>
                    <div className='bookline'> </div>
                    <p className='name' >Beneath a scarlet sky <br /> <span className='writer'>Mark Sullives </span> <br /> </p>
                    <p className='price'>$3.99</p>
                    <a className='cart' href="/"> <img src={cart} alt="" className='cartimg' />Add to basket </a>
                    <a className='wish' href="/">add to wishlist </a>
                </div>
                <div className='semibok'>
                    <img src={book2} alt=' ' className='seminewbook' />
                    <p className='catagory'> Novel & Life </p>
                    <div className='bookline'> </div>
                    <p className='name' >The Breathen <br /> <span className='writer'>Alison agr </span> <br /> </p>
                    <p className='price'>$3.99</p>
                    <a className='cart' href="/"> <img src={cart} alt="" className='cartimg' />Add to basket </a>
                    <a className='wish' href="/">add to wishlist </a>
                </div>
                <div className='semibok'>
                    <img src={book3} alt=' ' className='seminewbook' />
                    <p className='catagory'> Novel & Life </p>
                    <div className='bookline'> </div>
                    <p className='name' >Virgen if the sun <br /> <span className='Henririder'>James Rollins </span> <br /> </p>
                    <p className='price'>$3.99</p>
                    <a className='cart' href="/"> <img src={cart} alt="" className='cartimg' />Add to basket </a>
                    <a className='wish' href="/">add to wishlist </a>
                </div>
                <div className='semibok'>
                    <img src={book4} alt=' ' className='seminewbook' />
                    <p className='catagory'> Business & politics </p>
                    <div className='bookline'> </div>
                    <p className='name' >Make Money <br /> <span className='writer'>Garth Stein </span> <br /> </p>
                    <p className='price'>$3.99</p>
                    <a className='cart' href="/"> <img src={cart} alt="" className='cartimg' />Add to basket </a>
                    <a className='wish' href="/">add to wishlist </a>
                </div>
            </div>





        </div>
    )
}

export default Books;