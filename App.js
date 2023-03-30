import React from 'react'
import { BrowserRouter as Router, Routes, Route } from
"react-router-dom";
import Navigationmenu from './Pages/Navigationmenu';
import Home from './Pages/Home';
import './App.css';
import Booking from './Pages/Booking';
import PhotographerOverview from './Pages/PhotographerOverview';
import Portfolio from './Pages/Portfolio';
import Contactus from './Pages/Contactus'
import Footernav from './Pages/Footernav';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Setting from "./Pages/Setting"

import Upcoming from './Pages/Upcoming';

function App() {
  return (
    <div className="App">
      <Router>
<Navigationmenu />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Booking" element={<Booking />} />
<Route path="/PhotographerOverview" element={<PhotographerOverview />} />
<Route path='/Portfolio' element={<Portfolio/>}/>
<Route path="/Contactus" element={<Contactus />} />
<Route path="/Signin" element={<Signin />} />
<Route path="/Signup" element={<Signup />} />
<Route path="/Setting" element={<Setting />} />
<Route path="/Upcoming" element={<Upcoming/>} />
<Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
</Routes>
<Footernav/>
</Router>
        
    </div>
  );
}

export default App;
