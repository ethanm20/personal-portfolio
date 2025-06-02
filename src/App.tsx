import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import { NavigationBar } from './components/NavigationBar';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from './pages/Home/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
              
              <Route path="/" element={<NavigationBar/>}>
                <Route index element={<Home/>} />
                <Route path="totp-tool" element={<Home />} />
              </Route>
              
            </Routes>
          </BrowserRouter>
      </header>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
