import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home/Home";
import About from "./assets/pages/About/About";
import Footer from "./assets/Components/footer";
import NavigationBar from "./assets/Components/NavigationBar";
import Privacypolicy from "./assets/pages/Privacy-policy/Privacy-policy";
import TermsAndConditions from "./assets/pages/Terms&condition/Terms&condition";
import ReturnRefundPolicy from "./assets/pages/Exchange&return/Exchange&return";
import ShippingPolicy from "./assets/pages/Shipping-policy/Shipping-policy";
import SecondaryNavbar from "./assets/Components/SecondaryNavbar";
import ProductsPage from "./assets/pages/Funkey/Funkey";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <SecondaryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/terms&condition" element={<TermsAndConditions />} />
        <Route path="/exchange&return" element={<ReturnRefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/funkey" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



