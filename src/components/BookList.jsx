import React, { useState, useEffect } from "react";
import coverImg from "../images/cover-not-available.png";
import { useGlobalContext } from '../context';
import '../styles/BookStyle.css';
import Loading from "./Loader";
import Book from "./Book";
import { HiOutlineArrowUp } from 'react-icons/hi';
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {

   const navigate = useNavigate();

   const [isVisible, setIsVisible] = useState(false);
   const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
   };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if (loading)
  {
    return <Loading />;
  }

  return (
    <section className='bookList'>
       <div class="container">

        <button type="button" class="flex flex-c back-btn" onClick={() => navigate("/")}>
            <FaArrowLeft size={22} />
            <span className='fs-18 fw-6'>Go Back to Home/Search Page</span>
        </button>

         <div class="section-title">
            <h2>{resultTitle}</h2>
         </div>

         <div class="bookList-content grid">
          {
             booksWithCovers.slice(0, 30).map((item, index) => {
                return (
                  <Book key = {index} {...item} />
                )
             })
          }
         </div>

       </div>

       {isVisible && (
        <div className="scroll-top" onClick={scrollTop}>
          <HiOutlineArrowUp size={25} color="#fff" className="fs-15 text-center"/>
        </div>
      )}

    </section>
  )
}

export default BookList
