import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import Favourites from './pages/Favourites';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import projectsContext from './context/projectsContext';
import favContext from './context/favContext';

function App() {
  const [projects, setProjects] = useState([])
  const [favProj, setFavProj] = useState([])

  useEffect(() => {
    axios.get('data.json')
      .then(res => {
        setProjects(res.data)
      })
  }, [])

  useEffect(() => {
    localStorage.length !== 0 ? setFavProj(JSON.parse(localStorage.getItem("favProj"))) : setFavProj([])
  }, [])

  useEffect(() => {
    localStorage.setItem("favProj", JSON.stringify(favProj))
  }, [favProj])

  return (
    <projectsContext.Provider value={{ projects, setProjects }}>
      <favContext.Provider value={{ favProj, setFavProj }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='AboutMe' element={<AboutMe />} />
              <Route path='Works' element={<Works />} />
              <Route path='Favourites' element={<Favourites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </favContext.Provider>
    </projectsContext.Provider>
  );
}

export default App;
