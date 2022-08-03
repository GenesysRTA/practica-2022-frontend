import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import VerifyEmail from '../pages/verifyEmail';
import ChangePassword from '../pages/changePassword';
import ForgotPassword from '../pages/forgotPassword';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/verify-email' element={<VerifyEmail />} />
            <Route path='/change-password' element={<ChangePassword />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router