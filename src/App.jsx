import { useState } from 'react'

import './index.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Filter from './Components/Filter'
import Creditcards from './Components/Creditcards'
import Categories from './Components/Categories'
import Recommend from './Components/Recommend'
import Client from './Components/Client'


function App() {
  

  return (
    <>
    
       <Nav />
       <Hero />
       <Filter />
       <Creditcards />
       <Categories />
       <Recommend />
       <Client />
    </>
  )
}

export default App
