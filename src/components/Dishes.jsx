const DishCard = ({ dish, orderList, setOrderList  }) => {
    const handleAddToCart = () => {
        const existingDish = orderList.find((item) => item.id === dish.id)
        // if the dish already exists in the order list, increment its quantity
        if(existingDish) {
            const UpdatedExistingDish = orderList.map((item) => {
                if(item.id === dish.id){
                    return {...item, qty: item.qty + 1}
                }
                return item
            })
            setOrderList(UpdatedExistingDish)
        }
        else{
            setOrderList([...orderList, {...dish, qty:1}])
        }
    }
    return (<div onClick={handleAddToCart} key={dish.id} className='flex relative flex-col items-center justify-center bg-white rounded-lg shadow-md'>
        <img src={dish.image} alt={dish.name} className='w-full h-32 object-cover mb-2' />
        <div className="px-3 py-1 flex flex-col items-start justify-start w-full">
            <h3 className='text-lg font-semibold'>{dish.dishName}</h3>
            <p className='text-gray-600'>₹{dish.price}</p>
            <img src={dish.isVeg ? "image/veg.png" : 'image/nonveg.png'} className='text-gray-600 w-10 absolute bottom-4 right-2'/>
        </div>
    </div>
    )
}

const Dishes = ({ data, orderList, setOrderList }) => {
    return (
        <div className='flex w-8/12 justify-center bg-sky-100'>
            <div className="grid grid-cols-4 gap-3 px-4 py-2">
                {data.map((dish) => ( <DishCard orderList={orderList} setOrderList={setOrderList} key={dish.id} dish={dish} /> ))}
            </div>
        </div>
    )
}

export default Dishes