const DishCard = ({ dish }) => {
    return (<div key={dish.id} className='flex relative flex-col items-center justify-center bg-white rounded-lg shadow-md'>
        <img src={dish.image} alt={dish.name} className='w-full h-32 object-cover mb-2' />
        <div className="px-3 py-1 flex flex-col items-start justify-start w-full">
            <h3 className='text-lg font-semibold'>{dish.dishName}</h3>
            <p className='text-gray-600'>₹{dish.price}</p>
            <img src={dish.isVeg ? "image/veg.png" : 'image/nonveg.png'} className='text-gray-600 w-10 absolute bottom-4 right-2'/>
        </div>
    </div>
    )
}

const Dishes = ({ data }) => {
    return (
        <div className='flex w-8/12 justify-center bg-sky-100'>
            <div className="grid grid-cols-4 gap-3 px-4 py-2">
                {data.map((dish) => ( <DishCard key={dish.id} dish={dish} /> ))}
            </div>
        </div>
    )
}

export default Dishes