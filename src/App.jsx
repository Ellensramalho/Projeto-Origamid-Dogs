import React from 'react';
import './App.css'
import Header from './Components/Header'
import Fotter from './Components/Footer'
import Login from './Components/Login/Login'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login/*' element={<Login/>} />
    </Routes>
    <Fotter/>
    </BrowserRouter>
  </div>;
};

export default App;
