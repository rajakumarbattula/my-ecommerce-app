import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ForgotPassword from './components/ForgotPassword';
import LoginWithOTP from './components/LoginWithOTP';

// Import other components (Home, Products, Cart, etc.)
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import SearchResults from './pages/SearchResults';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserProvider } from './context/UserContext';


function App() {
  return (
   <UserProvider>
     <Router>
       <div className="App">
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/about" element={<About />} />
	         <Route path="/search" element={<SearchResults />} />
	         <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/forgot-password" element={<ForgotPassword />} /> 
           <Route path="/login-with-otp" element={<LoginWithOTP />} /> {/* New Route */}
         </Routes>
       </div>
     </Router>
   </UserProvider>
  );
}

export default App;

