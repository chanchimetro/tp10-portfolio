import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import Favourites from './pages/Favourites';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='AboutMe' element={<AboutMe/>}/>
        <Route path='Works' element={<Works/>}/>
        <Route path='Favourites' element={<Favourites/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
