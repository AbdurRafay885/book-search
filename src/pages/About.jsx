import React from 'react'
import '../styles/BookStyle.css';
import AboutImg from "../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
       <div class="container">

          <div class="about-content grid">

             <div class="about-text">
                <h2 className='about-title fs-26 ls-1'>About BookQuest</h2>
                <p className='fs-17'>
                  BookQuest is your go-to platform for discovering, exploring, and enjoying books from every genre. Whether you're a seasoned reader or just beginning your literary journey, BookQuest brings a curated selection of titles tailored to your interests. Our goal is to make reading more accessible, enjoyable, and personalized for every user.
                </p>
                <p className='fs-17'>
                  From timeless classics to the latest bestsellers, we believe there's a book for everyone. With powerful search tools and a seamless browsing experience, BookQuest connects readers to the stories and authors they love. Join our community and uncover your next favorite read today.
                </p>
             </div>

             <div class="about-img">
                <img src={AboutImg} alt="About-Us" />
             </div>

          </div>

       </div>
    </section>
  )
}

export default About
