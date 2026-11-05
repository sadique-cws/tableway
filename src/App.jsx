import React, { useState } from 'react'
import Header from './components/Header'
import Dishes from './components/Dishes'
import Order from './components/Order'
import { dishes } from './data/dishes'

const App = () => {
  const [dishList, setDishList] = useState(dishes)
  return (
    <div>
        <Header/>
        <div className='flex flex-1 items-start'>
            <Dishes data={dishList}/>
            <Order/>
        </div>
    </div>
  )
}

export default App