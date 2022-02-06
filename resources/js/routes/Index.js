import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages 
import routes from '../pages/routes'
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Header from '../common/header';

const App =()=> {
    return(
        <BrowserRouter>
        <Header /> 
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/page/shop' element={<Shop />} />
                <Route exact path='/page/contact-us' element={<Contact />} />
                <Route exact path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App