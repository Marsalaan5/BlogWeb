// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';

// function Caro() {
  
//   return (
//     <div className='flex items-center justify-center'>
//       <Carousel style={{ height: '400px', width: '800px' }}>
//         <Carousel.Item interval={1000}>
//           <img 
//             src={img1} 
//             alt="Slide 1" 
//             style={{ height: '400px', width: '800px', objectFit: 'cover' }} 
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={500}>
//           <img 
//             src={img2} 
//             alt="Slide 2" 
//             style={{ height: '400px', width: '800px', objectFit: 'cover' }} 
//           />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img 
//             src={img3} 
//             alt="Slide 3" 
//             style={{ height: '400px', width: '800px', objectFit: 'cover' }} 
//           />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Caro;




// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function Caro() {
//   const [posts, setPosts] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your API
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('curl https://api.hubapi.com/cms/v3/blogs/posts?sort=-updatedAt&&language__not_null&limit=10&offset=10 \
//   --request POST \
//   --header "Content-Type: application/json');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className='flex items-center justify-center my-8'>
//       <Carousel className='py-8 my-8' style={{ height: '400px', width: '800px' }}>
//         {posts.map((post, index) => (
//           <Carousel.Item key={post.id || index} interval={1000}>
//             <img 
//               src={post.image} 
//               alt={`Slide ${index + 1}`} 
//               style={{ height: '400px', width: '800px', objectFit: 'cover' }} 
//             />
//             <Carousel.Caption>
//               <h3>{post.title}</h3>
//               <p>{post.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default Caro;


// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function Caro() {
//   const [posts, setPosts] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your API
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://api.hubapi.com/cms/v3/blogs/posts?sort=-updatedAt&language__not_null&limit=10&offset=10', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer HbsGJTdpF2S1xdU2jBPrTC0NhE4rbOfT', // Replace YOUR_API_KEY with your actual HubSpot API key
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setPosts(data.results || []); // Adjust according to actual response structure
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className='flex items-center justify-center my-8'>
//       <Carousel className='py-8 my-8' style={{ height: '400px', width: '800px' }}>
//         {posts.map((post, index) => (
//           <Carousel.Item key={post.id || index} interval={1000}>
//             <img 
//               src={post.image || 'default-image.jpg'} // Use a default image if none is provided
//               alt={`Slide ${index + 1}`} 
//               style={{ height: '400px', width: '800px', objectFit: 'cover' }} 
//             />
//             <Carousel.Caption>
//               <h3>{post.title || 'No Title'}</h3>
//               <p>{post.description || 'No Description'}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default Caro;



// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function Caro() {
//   const [posts, setPosts] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your API
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://api.hubapi.com/cms/v3/blogs/posts?sort=-updatedAt&language__not_null&limit=10&offset=10', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer HbsGJTdpF2S1xdU2jBPrTC0NhE4rbOfT', // Replace YOUR_API_KEY with your actual HubSpot API key
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setPosts(data.results || []); // Adjust according to actual response structure
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className='flex items-center justify-center my-8'>
//       <Carousel className='py-8 my-8' style={{ height: '400px', width: '800px' }}>
//         {posts.map((post, index) => (
//           <Carousel.Item key={post.id || index} interval={1000}>
//             <img 
//               src={post.image || 'https://images.stockcake.com/public/1/9/e/19e6450c-9e33-4f91-a44d-5e7e28b28bf7_large/city-news-stand-stockcake.jpg'} // Fallback image
//               alt={`Slide ${index + 1}`} 
//               style={{ height: '400px', width: '800px', objectFit: 'cover' }} 
//             />
//             <Carousel.Caption>
//               <h3>{post.title || 'No Title'}</h3>
//               <p>{post.description || 'No Description'}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default Caro;




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

