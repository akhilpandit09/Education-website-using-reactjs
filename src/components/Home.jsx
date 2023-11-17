import React from 'react'
import { Link } from 'react-scroll'
import img from '../assets/hero.svg';
import Button from "../layout/Button";

function Home() {
  return (
    <div className='min-h--[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
        <div className='md:w-2/4 text-center'>
            <h2 className='text-5xl font-semibold leading-tight'>
                Knowledge with
                <span className='text-brightGreen ml-2 text-7xl'>eStudy</span>
            </h2>
            <p className='text-lightText mt-5 text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequuntur itaque optio esse reprehenderit natus earum maxime, nisi amet excepturi, eius vero dolores quas animi eum blanditiis facere cumque pariatur adipisci tempora, praesentium tempore! Velit natus veritatis iure consequatur non.
            </p>
            <Link to='contact' spy={true} smooth={true} duration={500}>
                <Button title="Contact Us" />
            </Link>
            
        </div>

        <div className='w-full md:w-2/4'>
            <img src={img} alt="hero section image" />
        </div>
    </div>
  )
}

export default Home
