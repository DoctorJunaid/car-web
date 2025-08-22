import React from 'react'
import './App.css'
import { MyAvatarGroup } from './MyAvatarGroup'
import Navbar from '../Navbar/Navbar';
import Home from '../pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <MyAvatarGroup /> */}
    </div>
  )
}

export default App