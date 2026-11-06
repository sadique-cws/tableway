import React from 'react'

const Order = ({orderList, setOrderList}) => {
  const handleTotalSum = () => {
    let total = 0;
    orderList.forEach((item) => {
      total += item.price * item.qty
    })
    return total;
  }
  const handleIncrement = (id) => {
     const updatedOrderList = orderList.map((item) => {
      if(item.id === id){
        return {...item, qty: item.qty + 1}
      }
      return item;
     })
      setOrderList(updatedOrderList)
  }
  const handleDecrement = (id) => {
    const updatedOrderList = orderList.map((item) => {
      if(item.id === id){
          return {...item, qty: item.qty - 1} 
      }
      return item;
     }).filter((item) => item.qty > 0)
    
      setOrderList(updatedOrderList)
  }
  return (
    <div className='flex flex-col h-[90vh] gap-2 w-4/12 bg-pink-100 '>
     <div className='h-[80%] overflow-y-auto p-4'>
            <h2 className='text-xl font-semibold mb-2'>Order Summary</h2> 

       <table className="w-full border-collapseborder border-pink-200">
        <thead>
          <tr>
            <th className="text-left border border-pink-200 p-3">Item</th>
            <th className="text-right border  border-pink-200 p-3">Qty</th>
            <th className="text-right border  border-pink-200 p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((item) => (
            <tr key={item.id}>
              <td className="border border-pink-200 p-3">{item.dishName}</td>
              <td className="text-right border border-pink-200 p-3">
                <button className='bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-600' onClick={() => handleDecrement(item.id)}>-</button>
                <span className='px-2'>{item.qty}</span>
                <button className='bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-600' onClick={() => handleIncrement(item.id)}>+</button>
              </td>
              <td className="text-right border border-pink-200 p-3">₹{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
      <div className='flex flex-col bg-pink-300 h-[20%] flex-1 px-3 mt-4'>  
          <h1 className='text-4xl font-bold p-4'>Total : ₹{handleTotalSum()}</h1>
          <div className="flex flex-1 gap-2 px-4">
            <button className='bg-slate-500 flex-1 text-white px-4 py-2 rounded hover:bg-slate-600' onClick={() => setOrderList([])}>Clear</button>
            <button className='bg-pink-500 flex-1 text-white px-4 py-2 rounded hover:bg-pink-600'>Place Order</button>
          </div>
        </div>
     </div>
  )
}

export default Order