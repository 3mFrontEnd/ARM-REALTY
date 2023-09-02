import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar ';
import Search from './components/Search';
import PropertyListing from './components/PropertyListing';
import Contact from './components/Contact.js'
import Footer from './components/Footer';
import Agents from './components/Agents';
import ClientTestimonials from './components/ClientTestimonials';


function App() {


  return (

    <BrowserRouter>
        <Navbar />
        <Header />
        <Search />
        <PropertyListing />
        <Agents />
        <Contact />
        <ClientTestimonials />
        <Footer />
    </BrowserRouter>
      
  )
};

export default App;
