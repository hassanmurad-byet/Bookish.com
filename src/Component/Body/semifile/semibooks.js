import React, { Component } from 'react'
import BOOKS from '../../data/Books';
import Seminew from './seminew';
import './semifile.css';
import Semibg from './backimg/bg';
import Order from '../orderbook/order';
import Buy from '../whybuy/buy';
import Foot from '../../Footer/foot';
import Search from './catagory/search';
import Catagory from './catagory/catagory';


class Semibooks extends Component {

    state = {
        books: BOOKS,
    };

    render() {
        const books = this.state.books.map((book) => {
            return <Seminew book={book} key={book.id} />

        });
        return (
            <div>
                <Semibg />
                <div className='searchbooks'> 
                <Search/> 

                </div>
              
                <div className='selectcatagory'>
                    <div className='cata'>
                        <Catagory />
                    </div>
                    <div className='allsemibooks' >
                        {books}

                    </div>
                </div>


                <Foot />

            </div>
        )

    }

}

export default Semibooks;