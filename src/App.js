import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar ';
import Search from './components/Search';
import PropertyListing from './components/PropertyListing';
import Contact from './components/Contact.js'


function App() {


  return (

    <BrowserRouter>
        <Navbar />
        <Header />
        <Search />
        <PropertyListing />
        <Contact />
    </BrowserRouter>
      
  )
};

export default App;
