import React from 'react';
import ProctoPro from "../assets/portfolio/ProctoPro.png"
import md from "../assets/portfolio/md.jpg"
import mausam from "../assets/portfolio/mausam.png"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import keylogger from "../assets/portfolio/keylogger.png"


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: ProctoPro
        },

        {
            id:2,
            src: md
        },

        {
            id:3,
            src: mausam
        },

        {
            id:4,
            src: keylogger
        },

        {
            id:5,
            src: reactParallax
        },
    ]






  return (<div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

  <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
        <p className='py-6'>Check Out Some of my other work</p>
    </div>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
    

    {
        portfolios.map(({id, src}) => (
            

        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src}
            alt=''
            className='rounded-md duration-200 hover:scale-105'
            />
            {/* <div >  */}
        </div>
    

        )) 
    }
    </div>
    
    <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 

  </div>
  </div>
  );
};

export default Portfolio