
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>

      <h1 className='text-center font-bold text-purple-500 text-4xl '> Coffee master :  {coffees.length} </h1>
      <div className='grid grid-cols-2 gap-4 w-4/5 mx-auto'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee} ></CoffeeCard>)
        }

      </div>

    </>
  )
}

export default App
