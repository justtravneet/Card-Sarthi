import { useState } from 'react'

import './index.css'

import Hero from './Components/Hero'
import Filter from './Components/Filter'
import Creditcards from './Components/Creditcards'
import Categories from './Components/Categories'
import Recommend from './Components/Recommend'
import Client from './Components/Client'
import Rewardcards from './Components/Rewardcards'
import Noannualfeecards from './Components/Noannualfeecards'
import Cashbackcards from './Components/Cashbackcards'
import Shoppingcards from './Components/Shoppingcards'
import Travelcards from './Components/Travelcards'
import Footer from './Components/Footer'
import Headerlogo from './Components/Headerlogo'
import { Nav } from 'react-bootstrap'
import Footertwo from './Components/Footertwo'
import Complaint from './Components/Complaint'


function App() {
  

  return (
    <>
    
      <Headerlogo />
       <Hero />
       <Filter />
       <Creditcards />
       <Categories />
       <Recommend />
       <Client />
       {/* <Rewardcards />
       <Noannualfeecards />
       <Cashbackcards />
       <Shoppingcards />
       <Travelcards /> */}
       <Footer />
       <Complaint />
       <Footertwo />
    </>
  )
}

export default App
