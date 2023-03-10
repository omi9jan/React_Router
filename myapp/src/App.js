
import './App.css';
import Navbar from "./Components/Navbar.jsx"
import React from 'react'
import {Routes,Route} from 'react-router'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Product from './Components/Product'
import GetTodos from './Components/GetTodos'
import PostTodos from './Components/PostTodos'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/product/:id" element={<Product/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/gettodos" element={<GetTodos/>} ></Route>
        <Route path="/posttodos" element={<PostTodos/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
