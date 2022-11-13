import React from 'react';
import HomeScreen from './HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginScreen from './HomeScreen/LoginScreen';

function App() {

 // const user = null 

  return (
    <div className="App">
      <Routes> 
   
    <Route path='/login' element={<LoginScreen /> } /> 
    <Route path='/' element={<HomeScreen />} />
      
      </Routes>
    </div>
  );
}

export default App;
