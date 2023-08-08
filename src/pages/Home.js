import React from 'react'
import Layouts from '../components/Layout/Layouts';
import { Link } from 'react-router-dom';
import Banner from '../image/banner.jpg';
import '../styles/HomeStylecss.css';

const Home = () => {
  return (
    <Layouts>
      <div className='home' style={{ backgroundImage: `url(${Banner})`}}>

        <div className='headerContainer'>

          <h1>Food WebSite</h1> 

          <p>Best Food In India</p>

          <Link to='/menu'>
                 <button>Order Now</button>

          </Link>


        </div>

      </div>

      </Layouts>
  )
}

export default Home