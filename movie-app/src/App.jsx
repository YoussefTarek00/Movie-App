import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Movie-Watchlist/Header'
import Watched from './components/Movie-Watchlist/Watched'
import Watchlist from './components/Movie-Watchlist/Watchlist'
import Add from './components/Movie-Watchlist/Add'
import GlobalProvider from './components/Movie-Watchlist/context/GlobalState'
import './App.css'
import './components/Movie-Watchlist/css/App.css'
import './components/Movie-Watchlist/css/all.min.css'


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  )
}

export default App