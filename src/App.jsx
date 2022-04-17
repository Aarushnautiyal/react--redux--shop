import React from 'react'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" exact element={<ProductList/>}/>
                    <Route path="/product/:productId" element={<ProductDetail/>}/>
                    <Route>404 Not Found!</Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
