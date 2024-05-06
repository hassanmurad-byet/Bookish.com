import React from 'react'

import Home from './Body/Home/home'
import Books from './Body/newbook/books'
import RareBooks from './Body/rarebook/rarebook'
import Order from './Body/orderbook/order'
import Buy from './Body/whybuy/buy'
import Foot from './Footer/foot'

const Maincomponent = () => {
  return (
    <div>
    
        <Home/>
        <Books/>
        <RareBooks/>
        <Order/>
        <Buy/>
        <Foot/>
    
       

    </div>
  )
}

export default Maincomponent