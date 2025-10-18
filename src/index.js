import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { AppProvider } from './context';

import Home from './pages/Home';
import About from './pages/About';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import "./styles/BookStyle.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
         <Routes>

            <Route path = "/" element = {<Home />}>
              <Route path = "about" element = {<About />} />
            </Route>

            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />

        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
