import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from './Contact/Contact';
import Menu from "./Menu";
import Service from "./Service/Service";
import PetCard from "./PetShop/PetCard";
import Cat from "./Cat/Cat";
import Dog from "./Dog/Dog";
import Product from "./Product/Product";
import "./App.css"
import Donation from "./Donation/Donation";
import ContactPage from "./Contact/ContactPage";
import DonationPage from "./Donation/DonationPage";
import AdoptionForm from "./Adoption/AdoptionForm";

function App() {
  return (
    <>
      <div className="App">
      
        <BrowserRouter>
          <Menu/>
          <Routes>
          
          <Route  path="/"  element={<About name="About" />} />          
          <Route path="/service" element={<Service name="Service" />} />
          <Route path="/pet-shop" element={<PetCard name="pet-shop" />} />
          <Route path="/cat" element={<Cat name="Cat" />} />
          <Route path="/dogs" element={<Dog name="Dog" />} />
          <Route path="/product" element={<Product name="Product" />} />
        <Route path="/contact" element={<ContactPage name="Contact"/>} />
        <Route path="/donation" element={<DonationPage name="Donation"/>} />
        <Route path="/adoption-form/:idPet" element={<AdoptionForm name="AdoptionForm"/>} />
      </Routes>
        </BrowserRouter>
        </div>
      </>

  );
}

export default App;