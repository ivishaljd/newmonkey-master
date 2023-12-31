import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export class App extends Component {
  render() {
    return (
      <>
    <Router>
     <Navbar></Navbar>
     <Routes>
          <Route exact path="/" element={<News  key="general" country="in" category="general"/>}/> 
          <Route exact path="/business" element={<News  key="business" country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" country='in' category="entertainment"></News>}/>
          <Route exact path="/health" element={<News key="health" country='in' category="health"></News>}/>
          <Route exact path="/science" element={<News key="science" country='in' category="science"></News>}/>
          <Route exact path="/sports" element={<News key="sports" country='in' category="sports"></News>}/>
          <Route exact path="/technology"element={<News key="technology" country='in' category="technology"></News>}/>
      </Routes>
    </Router>  
    </>
    )
  }
}

export default App