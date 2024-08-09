
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function Caro() {
  return (
    <div className='bg-gray-100 py-16'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Featured Highlights</h2>
          <p className='text-lg text-gray-700'>
            Discover some of our most popular and impactful moments. Each slide captures a unique aspect of what we offer, showcasing our commitment to quality and engagement.
          </p>
        </div>

        <div className='flex items-center justify-center'>
          <Carousel style={{ height: '400px', width: '100%' }}>
            <Carousel.Item interval={3000}>
              <img 
                src={img1} 
                alt="Slide 1" 
                style={{ height: '400px', width: '100%', objectFit: 'cover' }} 
              />
              <Carousel.Caption className='bg-gray-900 bg-opacity-50 p-4 rounded'>
                <h3 className='text-white text-2xl font-bold'>First Slide Label</h3>
                <p className='text-white text-lg'>
                  Nulla vitae elit libero, a pharetra augue mollis interdum. Dive into our collection to explore more.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img 
                src={img2} 
                alt="Slide 2" 
                style={{ height: '400px', width: '100%', objectFit: 'cover' }} 
              />
              <Carousel.Caption className='bg-gray-900 bg-opacity-50 p-4 rounded'>
                <h3 className='text-white text-2xl font-bold'>Second Slide Label</h3>
                <p className='text-white text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experience our latest updates and innovations.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img 
                src={img3} 
                alt="Slide 3" 
                style={{ height: '400px', width: '100%', objectFit: 'cover' }} 
              />
              <Carousel.Caption className='bg-gray-900 bg-opacity-50 p-4 rounded'>
                <h3 className='text-white text-2xl font-bold'>Third Slide Label</h3>
                <p className='text-white text-lg'>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur. Discover the stories behind the scenes.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Caro;

