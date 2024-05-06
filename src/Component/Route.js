import React from 'react'
import Maincomponent from './maincomponent';
// import Seminew from './Body/semifile/seminew';
import Semibooks from './Body/semifile/semibooks';
import Rare from './Body/rarefile/rare';
import Oderbook from './Body/orderfile/oderbook';
import Sellbook from './Body/sellfile/sellbook';
import { Route, Routes } from 'react-router-dom';

const MyRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Maincomponent/>} />
            <Route path='/semi' element={<Semibooks/>} />
            <Route path='/rare' element={<Rare/>} />
            <Route path='/order' element={<Oderbook/>} />
            <Route path='/sell' element={<Sellbook/>} />

        </Routes>

    </div>
  )
}

export default MyRoute;
