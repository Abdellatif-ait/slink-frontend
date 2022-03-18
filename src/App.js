import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import LinksPage from './components/LinksPage';
import NavBar from './components/NavBar';
import RegisterPage from'./components/RegisterPage';
import LogInPage from './components/LogInPage'
import Redirected from './components/Redirected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home/>} />
          <Route path="LogInPage" element={<LogInPage/>} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="LinksPage" element={<LinksPage />} />
          <Route path="l/:id" element={<Redirected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
