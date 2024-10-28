/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'; 
import Signup from './Pages/Signup/Signup'; 
//import SomePage from './SomePage/SomePage';
import Home from './Home/Home';
import Order from './Components/OrderModal/OrderModal'
const App = () => {
    return (
      <>
       <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} /> 
                <Route path="/HomePage" element={<Home />} /> 
                <Route path="/Order" element={<Order />} />
            </Routes>
        </Router>
      </>
       
    );
};

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'; 
import Signup from './Pages/Signup/Signup'; 
import Home from './Home/Home';
import Order from './Components/OrderModal/OrderModal';

const App = () => {
  return (
    <Router>      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/HomePage" element={<Home />} /> 
        <Route path="/Order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default App;








