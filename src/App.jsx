import React from 'react'
import './App.css'
import { MyAvatarGroup } from './components/MyAvatarGroup'
import Navbar from '../parts/Navbar/Navbar';
import Home from '../pages/Home/Home';

function App() {
  return (
    <div className="main-container max-w-7xl mx-auto px-2">
      <Navbar />
      <Home />
      {/* <MyAvatarGroup /> */}
    </div>
  )
}

export default App