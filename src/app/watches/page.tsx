import React from 'react'
import Image from "next/image";

const Watches = () => {

  const watchData = [
    { id: 1, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/rolex-wa.jpg'},
    { id: 2, name: 'Omega', price: 8000, description: 'Sport design', image: '/omega-wa.png'},
    { id: 3, name: 'Patek Philippe', price: 25000, description: 'Elegant timepiece', image: '/patek.png'},
    { id: 4, name: 'Tag Heuror', price: 5000, description: 'Sporty and Stylish', image: '/tag-h.png'},
    { id: 5, name: 'Breitling', price: 7000, description: 'Bold and rugged', image: '/b-watch.png'},
    { id: 6, name: 'Seiko', price: 1000, description: 'Affordable and reliable', image: '/se-watch.png'},
  ]

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
          <Image src={watch.image} alt={watch.name} width={300} height={200} />
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className="price">${watch.price}</div>
          <button>Add to Cart</button>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Watches
