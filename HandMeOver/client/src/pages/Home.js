import React from 'react'
import HomeSlider from '../components/HomeSlider'
import { Link } from 'react-router-dom'

import slide1 from '../Assets/slide1.jpg'
import blog1 from '../Assets/blog1.jpeg'
import blog2 from '../Assets/blog2.jpeg'
import blog3 from '../Assets/blog3.jpeg'
import blog4 from '../Assets/blog4.jpeg'
import blog5 from '../Assets/blog5.jpeg'
import blog6 from '../Assets/blog6.jpeg'
import blog7 from '../Assets/blog7.jpeg'
import blog8 from '../Assets/blog8.jpeg'

const Home = () => {
  return (
    <div className='home-wrapper'> 
      <div className='top-home-container'>
        <div className='home-text-card'>
          <h1>Welcome To HandMeOver</h1>
          <p>
            Welcome to HandMeOver. An all in one site where you can buy the latest handbag, sell your unwanted bag and even check the latest blogs for the most trending bags.
            Have a look at what others are saying! 
          </p>
          <Link className='home-cta' to='/bags'>
            Shop Bags
          </Link>
        </div>
        <div>
          <img src={slide1}></img>
        </div>
      </div>
      <div>
        <HomeSlider />
      </div>
      <div className='blog-head-container'>
        <h2>Checkout The Latest Fashion Blogs Below</h2>
      </div>
      <div className='blog-cards'>
        <div>
          <a href='http://www.purseblog.com/'>
            <img src={blog1} />
          </a>
        </div>
        <div>
          <a href='https://handbags.lovetoknow.com/Category:Designer_Handbags'>
            <img src={blog2} />
          </a>
        </div>
        <div>
          <a href='https://thebaghagdiaries.com/'>
            <img src={blog3} />
          </a>
        </div>
        <div>
          <a href='http://www.bagbliss.com/'>
            <img src={blog4} />
          </a>
        </div>
        <div>
          <a href='http://blog.queenbeeofbeverlyhills.com/'>
            <img src={blog5} />
          </a>
        </div>
        <div>
          <a href='https://handbags.lovetoknow.com/Slideshow:Favorite_Celebrity_Handbags'>
            <img src={blog6} />
          </a>
        </div>
        <div>
          <a href='https://handbags.lovetoknow.com/Slideshow:Favorite_Celebrity_Handbags'>
            <img src={blog7} />
          </a>
        </div>
        <div>
          <a href='https://handbags.lovetoknow.com/Slideshow:Favorite_Celebrity_Handbags'>
            <img src={blog8} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
