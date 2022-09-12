// INDEX.JS 


import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"


// // Import Css
import '../src/css/index.css';


// Import Pages
import App from '../src/pages/App';


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>, 
  document.getElementById('root'))