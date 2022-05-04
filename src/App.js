import "./App.css";
import {NavigationTop, Footer} from './components';
import React from "react";
import {Routes,Route} from "react-router-dom";
import {Home,Products,Wishlist,Cart,PageNotFound} from "./pages";

function App() {
  return (
    <div className="App">
      <NavigationTop/>
      <Routes>
        <Route path = "/" element ={<Home/>}></Route>
        <Route path = "/Products" element ={<Products/>}></Route>
        <Route path = "/Cart" element ={<Cart/>}></Route>
        <Route path = "/Wishlist" element ={<Wishlist/>}></Route>
        <Route path = "*" element ={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;