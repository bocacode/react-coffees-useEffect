import { useState } from 'react'

export default function SingleCoffee({ entireObject }) {
  // const [favorite, setFavorite] = useState(false)
  const [favoriteTest, setFavoriteTest] = useState(false)

  // let favoriteTest = false
  console.log(favoriteTest)

  return (
    // <div className='menu-items__item' style={{ backgroundColor: favorite ? 'red' : 'white' }}>
    <div className='menu-items__item' style={{ backgroundColor: favoriteTest ? 'red' : '' }}>
      <img src={entireObject.image} alt='' />
      <div>
        <h3>{entireObject.name}</h3>
        <span>Price: {entireObject.price}</span>
        <p>{entireObject.description}</p>
        {/* <button onClick={() => setFavorite(true)}>Favorite</button> */}
        <button
          onClick={() => {
            // favoriteTest = true
            setFavoriteTest(!favoriteTest)
            console.log(favoriteTest)
          }}>
          Favorite
        </button>
      </div>
    </div>
  )
}
