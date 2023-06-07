import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <div>
      <nav className="navbar navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <Link to='/' class="navbar-brand">QuadB TV</Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
