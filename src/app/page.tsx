import React from 'react'
import PizzaSlider from '../components/PizzaSlider'
import OrderSlider from '../components/OrderSlider'
import Clients from '../components/Clients'

const page = () => {
  return (
    <div>
      <PizzaSlider />
      <OrderSlider />
      <Clients/>
    </div>
  )
}

export default page
