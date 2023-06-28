import React from 'react'
import "./Hero.css";
import HeroImg from "../Hero/HeroImg";


const Hero = () => {
  return (
    <div className='demo'>
        <div className='hero'>
            <div className='main_hero'>You don't have to</div>
            <div className='main_hero2'>Fight them Alone.</div>
            <div className='sub_hero'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut sit adipisci commodi excepturi, quod libero. Sequi architecto est quo quam magni doloribus, quae quis iusto maxime recusandae aperiam! Tenetur.</div>
            <input type="text" className='input' value="✉️ Enter your email address"/>
            <button className='input-btn'>Let's Talk</button>
        </div>
        <div className='hero_img'>
            <HeroImg />
        </div>
    </div>
  )
}

export default Hero;
