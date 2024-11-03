import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './Routing/HomeComponent';
import ProductsComponents from './Routing/ProductsComponent'
import RegisterComponent from './Routing/RegisterComponent';
import LoginComponent from './Routing/LoginComponent';
import AboutComponent from './Routing/AboutComponent';
import Footer from './components/Footer-component/Footer';
import Contact from './components/contactUs/Contact';
import Navbar from './components/Nav-component/Navbar';
import AddProduct from './components/Products/AddProduct';
import UpdateProduct from './Routing/UpdateProduct';
import Admin from './components/Products/Admin'
// import { IconName } from "react-icons/fa";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/products" element={<ProductsComponents />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        {/* <Route path='/view' element={<View/>}/> */}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
