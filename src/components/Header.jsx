import React from 'react'
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import '../styles/BookStyle.css';

const Header = () => {
  return (
    <div className='holder'>
       <header class="header">
          <Navbar />
          <div class="header-content flex flex-c text-white text-center">
              <h2 class="header-title text-capitalize">Discover Your Next Great Read</h2>
              <p className='header-text fs-18 fw-5'>Search thousands of titles and uncover stories that inspire, educate, and entertain. Your perfect book is just a click away.</p>

              <SearchForm />
          </div>
       </header>
    </div>
  )
}

export default Header
