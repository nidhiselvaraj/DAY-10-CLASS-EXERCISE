import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Dlayout from './Dlayout';
import Home from './Home';
import Destination from './Destination';
import About from './About';
import Contact from './Contact';
import Form from './Form';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dlayout />}>
        <Route index element={<Home />} />
        <Route path="Destination" element={<Destination/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Form" element={<Form/>} />
    </Route>
    </Routes>
  </BrowserRouter>
</div>
)}
export default App;