import { useState, useEffect } from 'react'
import './App.css'
import SingleCoffee from './SingleCoffee'

function App() {
  const [data, setData] = useState([{ name: 'Colada ', price: '40cents' }])

  useEffect(() => {
    getCoffeeForEddie()
  }, [])

  const getCoffeeForEddie = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json()) // convert to json
      .then(data => setData(data)) // get formatted data
      .catch(x => console.error(x))
  }

  console.log('my data', data)

  return (
    <div className='App'>
      <main>
        <h1>Coffees by Sample API</h1>
        <button onClick={() => getCoffeeForEddie()}>Get me Coffees</button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
            return <SingleCoffee entireObject={item} />
          })}
        </div>
      </main>
    </div>
  )
}

export default App
