import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">H-SHOP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
      
     
      <li class="nav-item">
          <Link class="nav-link" to="/cats">Category</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/products">Products</Link>
        </li>
        
       
      </ul>

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     
        <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
        
     
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar