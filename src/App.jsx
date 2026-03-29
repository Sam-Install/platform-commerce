import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
//import Contact from './pages/Contact'

const App = () => {
  return (
    
    <div>

<Navbar/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:category' element={<Products/>} />
         <Route path="/product/:id" element={<ProductDetails />} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/checkout' element={<Checkout/>} />
         <Route path='/contacts' element={<Contact/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App