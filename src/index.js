import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { User } from './routes/User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
        <Routes>
          <Route path='/Machines' element={<Home />} />
          <Route path='machines/:repoid' element={<User />} />
          <Route path='*' element={<Navigate replace to="/Machines" />} />
         {/* <Route path='/' element={<Navigate replace to="/" />} /> por si queres que solo aparezca home y que no sume uno mas al historial por refrescar */}
        </Routes>
    </BrowserRouter>
  
);


