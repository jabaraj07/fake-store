import './App.css'
// import Add from './components/Add';
import Bmi from './components/Bmi';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home1 from './components/Home1';
import Products from './components/Products'
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Electronics from './components/Electronics';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Jewelery from './components/Jewelery';
import Allsection from './components/Allsection';

 const App =  () =>{
  const [food, setfood] = useState([])
  const [choosecart, setchoosecart] = useState([])
  useEffect(()=>{
    setfood(Products)
  },[])

  const addcart = (item)=>{
    setchoosecart((prevstate)=>[...prevstate,item])
  }

  const deletecart = (index)=>{
    setchoosecart((prevstate)=>prevstate.filter((_,indx)=>indx!= index)
    )
  }


  const totalval = ()=>{
    let total = 0
    choosecart.forEach((item)=>{total = total + item.price})
      return total.toFixed(2)
  }

  const empty = ()=>{
    setchoosecart([])
  }


  return (
    <>
    <BrowserRouter>
    <Navbar choosecart={choosecart}/>
    <Routes>
      <Route path='/' element={ <Bmi/>} />
      <Route path='/All' element={ <Allsection/>} />
      <Route path='/Home' element={ <Home1 food={food} addcart={addcart}/>} />
      <Route path='/Electronics' element={ <Electronics food={food} addcart={addcart}/>} />
      <Route path='/Mens' element={ <Mens food={food} addcart={addcart}/>} />
      <Route path='/Womens' element={ <Womens food={food} addcart={addcart}/>} />
      <Route path='/Jewelery' element={ <Jewelery food={food} addcart={addcart}/>} />
      <Route path='/cart' element={ <Cart choosecart={choosecart} empty={empty} totalval={totalval} deletecart={deletecart} food={food}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
