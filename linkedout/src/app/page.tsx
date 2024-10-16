import Header from '@/components/Header/Header';
import React from 'react';
import Image from 'next/image';

import './globals.css'
import SearchBar from '@/components/Input/SearchBar/SearchBar';

const HomePage = () => {
  return (
    <div className="container">
      <div className='home-content'>
        <Header/> 
        <div className='home-text'>
          <h1>O "Job" perfeito<br/> perto de você</h1>
          <p>Explore o próximo passo da sua carreira profissonal com novas<br/> tecnologias de geolocalização.</p>
          <SearchBar/>
          <div>
            <button className="search-button">Search</button>
          </div>
          <div className="gif-container">
            <div className="gif">
              <img src="./gif1.gif" alt="Animated GIF 1" />
            </div>
            <div className="gif">
              <img src="./gif2.gif" alt="Animated GIF 2" />
            </div>
            <div className="gif">
              <img src="./gif3.gif" alt="Animated GIF 3" />
            </div>
            <div className="gif">
              <img src="./gif4.gif" alt="Animated GIF 4" />
            </div>
        </div>
      </div>
        <div className='image'>
          <Image
            src="/HomeImage.svg"
            alt="Home Image"
            className="home-image"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
