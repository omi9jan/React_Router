import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"30px",justifyContent:"center"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/login">Login</Link>
        <Link to="/gettodos">Get-Todos</Link>
        <Link to="/posttodos">Post-Todos</Link>
    </div>
  )
}

export default Navbar