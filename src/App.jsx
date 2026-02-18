import React from 'react';
import './App.css'
import Header from './Components/Header'
import Fotter from './Components/Footer'
import Login from './Components/Login/Login'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';

const App = () => {
  return <div>
    <BrowserRouter>
    <UserStorage>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login/*' element={<Login/>} />
    </Routes>
    <Fotter/>
    </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
