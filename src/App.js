import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Cats from './components/Cats/Cats.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Products from './components/Products/Products.jsx'


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container">
     
      <Routes>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cats' element={<Cats />}></Route>
       
        

      </Routes>
      </div>
     
    </div>
  )
}

export default App