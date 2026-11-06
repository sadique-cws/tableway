import React, { useState } from 'react'
import Header from './components/Header'
import Dishes from './components/Dishes'
import Order from './components/Order'
import { dishes } from './data/dishes'
import Login from './components/Login'
import { Route, Routes } from 'react-router'

const Home = () => {
    const [dishList, setDishList] = useState(dishes);
    const [orderList, setOrderList] = useState([]);

  return(  
        <div className='flex flex-1 items-start'>
            <Dishes data={dishList} setOrderList={setOrderList} orderList={orderList}/>
            <Order orderList={orderList} setOrderList={setOrderList}/>
        </div>
  );
};

const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default App