import React from 'react'
import cart from './imgs/carts.png';
import './semifile.css';



const Seminew = ({ book }) => {
  return (
    <div>
      <div className='allbooksimgs'>
        <div className='semibooks'>
          <img src={book.image } alt='semi' className='seminewbookimg' />
          <p className='catagorys'> Novel & Life </p>
          <div className='booklines'></div>
          <p className='booksname'>{book.name} <br/><span className='writername'>{book.writer} </span> </p>
          <p className='prices'>${book.price}</p>
          <a className='bookcart' href="/"> <img src={cart} alt="" className='bookcartimg' />Add to basket </a>
          <a className='bookwish' href="/">add to wishlist</a>
        </div>
      </div>
   
   
    </div>
  )
}

export default Seminew;