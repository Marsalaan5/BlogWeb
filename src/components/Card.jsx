// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Cardd() {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5">
//          <Card style={{ width: '18rem' }} >
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
//   )
// }

// export default Cardd

// import React, { useState, useEffect } from "react";
// import { useLoaderData } from 'react-router-dom'
// import iimg from '../assets/iimg.jpg'
// // import axios from "axios";


// function Cardd() {

//     const data = useLoaderData()

//     const [cardItems, setCardItems] = useState([]);

    

//   const cardItem = [
//     {
//       id: 1,
//       img:{iimg},
//     //   logo: bank,
//     //   name: "Bankist App",
//     //   description:"It's a modern, responsive web app designed to provide users with a seamless banking exp.This App allows users to manage their finances effortlessly.",
//       link:<a href="https://marsalaan5.github.io/Bankist-App/" target="_blank">Link</a>
//     },

//     {
//       id: 2,
//       img:{iimg},
//     //   logo: search,
//     //   name: "Image Search App",
//     //   description:"This App is Powered by the latest Fetch API technology which allows you to effortlessly discover and retrieve a vast collection of images based on your search. ",
//       link:<a href="https://marsalaan5.github.io/Image-Search-App/" target="_blank">Link</a>
//     },

//     {
//       id: 3,
//       img:{iimg},
//     //   logo:{im3},
//     //   name: "Gym",
//     //   description:"This website is designed to elevate your fitness experience and provide a user-friendly interface for exploring our fitness programs and services.",
//       link:<a href="https://marsalaan5.github.io/Landing-Page/" target="_blank">Link</a>
//     },
//     {
//       id: 4,
//       img:{iimg},
//     //   logo: cart,
//     //   name: "E-commerce",
//     //   description:"Explore a diverse range of products, from electronics to fashion and home essentials, with a user-friendly interface and intuitive design.",
//       link:<a href="https://marsalaan5.github.io/E-commerce/" target="_blank">Link</a>
//     },
//   ];
// //   useEffect(() => {
// //     // Replace with your actual API endpoint
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('https://api.github.com/users/Marsalaan5');
// //         const data = await response.json();
// //         setCardItems(data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto m-4 px-4 md:px-20 mt-10 py-12"
//     >
      
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-5">
//           {cardItem.map(({id, logo,link,img }) => (
//             <div
//               className=" md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <div className="">
//               <img
//                 src={img}
//                 className="w-full h-80"
//                 alt="blank"
//               />
//               </div>
//               <div className="mb-[-1] px-6 py-12 space-x-3 justify-around flex items-center justify-center">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white my-100% w-[100px] rounded">
//                 {link}
//                 </button>
                
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
   
//   );
// }

// export default Cardd;


// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import iimg from '../assets/iimg.jpg';

// function Cardd() {
//   // const data = useLoaderData(); // Uncomment if you're using data from the loader

//   const cardItem = [
//     {
//       id: 1,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/Bankist-App/" target="_blank" rel="noopener noreferrer">Link</a>
//     },
//     {
//       id: 2,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/Image-Search-App/" target="_blank" rel="noopener noreferrer">Link</a>
//     },
//     {
//       id: 3,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/Landing-Page/" target="_blank" rel="noopener noreferrer">Link</a>
//     },
//     {
//       id: 4,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/E-commerce/" target="_blank" rel="noopener noreferrer">Link</a>
//     },
//   ];

//   return (
//     <div name="Portfolio" className="max-w-screen-2xl container mx-auto m-4 px-4 md:px-20 mt-10 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-5">
//         {cardItem.map(({ id, img, link }) => (
//           <div
//             className="md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//             key={id}
//           >
//             <div className="">
//               <img
//                 src={img}
//                 className="w-full h-80 object-cover rounded-t-lg"
//                 alt={`Card image ${id}`}
//               />
//             </div>
//             <div className="px-6 py-4 space-x-3 justify-around flex items-center justify-center">
//               {link}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cardd;


// main card

// import React from 'react';
// import iimg from '../assets/iimg.jpg';

// function Cardd() {
//   const cardItem = [
//     {
//       id: 1,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/Bankist-App/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
//     },
//     {
//       id: 2,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/Image-Search-App/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
//     },
//     {
//       id: 3,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/Landing-Page/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
//     },
//     {
//       id: 4,
//       img: iimg,
//       link: <a href="https://marsalaan5.github.io/E-commerce/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
//     },
//   ];

//   return (
//     <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-12">
//       <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {cardItem.map(({ id, img, link }) => (
//           <div
//             className="border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105"
//             key={id}
//           >
//             <div className="relative">
//               <img
//                 src={img}
//                 className="w-full h-60 object-cover rounded-t-lg"
//                 alt={`Card image ${id}`}
//               />
//             </div>
//             <div className="mt-4 text-center">
//               {link}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cardd;


//main code

// import React from 'react';
// import iimg1 from '../assets/iimg1.jpg';
// import iimg2 from '../assets/iimg2.png';
// import iimg3 from '../assets/iimg3.webp';
// import iimg4 from '../assets/iimg4.jpg';

// function Cardd() {
//   const cardItems = [
//     {
//       id: 1,
//       img: iimg1,
//       type: "Industry News",
//       title: "Tech Industry Sees Rapid Growth in AI Innovations",
//       description: "The technology sector is witnessing a surge in artificial intelligence advancements, with new applications being developed across various industries.",
//       link: "https://dig.watch/?gad_source=1&gclid=CjwKCAjwko21BhAPEiwAwfaQCAJOvD4SO_HLqN3tOv5zvrp98GgoUCSugBLTPE4SF7Mz5bhpN3bAXhoCh8wQAvD_BwE",
//       date: "July 26, 2024",
//     },
//     {
//       id: 2,
//       img: iimg2,
//       type: "Blog Updates",
//       title: "Introducing Our New Blog Layout",
//       description: "We are excited to unveil a fresh look for our blog! The new layout features a cleaner design, improved navigation, and enhanced readability.",
//       date: "July 25, 2024",
//       link: "https://www.livemint.com/opinion/blogs",     
    
      
//     },
//     {
//       id: 3,
//       img: iimg3,
//       type: "Event Announcements",
//       title: "Join Our Upcoming Webinar on Digital Marketing",
//       description: "Don't miss our upcoming webinar on the latest trends in digital marketing. Register now to secure your spot!",
//       date: "August 5, 2024",
//       link: "https://www.eventindustrynews.com/"
//     },
//     {
//       id: 4,
//       img: iimg4,
//       type: "Industry News",
//       title: "New Data Privacy Regulations in the EU",
//       description: "The European Union has introduced new data privacy regulations aimed at enhancing consumer protection and data security. Businesses operating in the region must comply with these changes by the end of the year.",
//       date: "July 24, 2024",
//       link: "https://www.project-syndicate.org/?utm_term=today%27s%20economic%20news&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=1220154768&hsa_cam=18396741313&hsa_grp=141985559736&hsa_ad=623244829635&hsa_src=g&hsa_tgt=kwd-296062207419&hsa_kw=today%27s%20economic%20news&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwko21BhAPEiwAwfaQCIJfkktTpIHm4w5pWY8o2ZaeDzARWDAHgnXU3-8dUH3v4He7p4QOkBoC6-8QAvD_BwE"

//     },
//   ];

//   return (
//     <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-12">
//       <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Announcemnts</h2>
//       <p className="text-center mb-12 text-lg text-gray-600">
//       What's New in the Blogosphere
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {cardItems.map(({ id, img, title,type,date, description, link }) => (
//           <div
//             className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
//             key={id}
//           >
//             <div className="relative">
//               <img
//                 src={img}
//                 className="w-full h-60 object-cover"
//                 alt={`Project ${id}`}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
//             </div>
//              <div className="flex items-center justify-between">
//               <h3 className="text-xl font-bold text-blue-600">{type}</h3>
//               <p className="text-gray-500">{date}</p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//               <p className="text-gray-600 mb-4">{description}</p>
//               <a
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-800 font-medium"
//               >
//                 Visit→
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cardd;




import React from 'react';
import iimg1 from '../assets/iimg1.jpg';
import iimg2 from '../assets/iimg2.png';
import iimg3 from '../assets/iimg3.webp';
import iimg4 from '../assets/iimg4.jpg';

function Cardd() {
  const cardItems = [
    {
      id: 1,
      img: iimg1,
      type: "Industry News",
      title: "Tech Industry Sees Rapid Growth in AI Innovations",
      description: "The technology sector is witnessing a surge in artificial intelligence advancements, with new applications being developed across various industries.",
      link: "https://dig.watch/?gad_source=1&gclid=CjwKCAjwko21BhAPEiwAwfaQCAJOvD4SO_HLqN3tOv5zvrp98GgoUCSugBLTPE4SF7Mz5bhpN3bAXhoCh8wQAvD_BwE",
      date: "July 26, 2024",
    },
    {
      id: 2,
      img: iimg2,
      type: "Blog Updates",
      title: "Introducing Our New Blog Layout",
      description: "We are excited to unveil a fresh look for our blog! The new layout features a cleaner design, improved navigation, and enhanced readability.",
      date: "July 25, 2024",
      link: "https://www.livemint.com/opinion/blogs",
    },
    {
      id: 3,
      img: iimg3,
      type: "Event Announcements",
      title: "Join Our Upcoming Webinar on Digital Marketing",
      description: "Don't miss our upcoming webinar on the latest trends in digital marketing. Register now to secure your spot!",
      date: "August 5, 2024",
      link: "https://www.eventindustrynews.com/"
    },
    {
      id: 4,
      img: iimg4,
      type: "Industry News",
      title: "New Data Privacy Regulations in the EU",
      description: "The European Union has introduced new data privacy regulations aimed at enhancing consumer protection and data security. Businesses operating in the region must comply with these changes by the end of the year.",
      date: "July 24, 2024",
      link: "https://www.project-syndicate.org/?utm_term=today%27s%20economic%20news&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=1220154768&hsa_cam=18396741313&hsa_grp=141985559736&hsa_ad=623244829635&hsa_src=g&hsa_tgt=kwd-296062207419&hsa_kw=today%27s%20economic%20news&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwko21BhAPEiwAwfaQCIJfkktTpIHm4w5pWY8o2ZaeDzARWDAHgnXU3-8dUH3v4He7p4QOkBoC6-8QAvD_BwE"
    },
  ];

  return (
    <div name="NewsUpdates" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Latest News & Updates</h2>
      <p className="text-center mb-12 text-lg text-gray-600">
        Stay updated with the latest trends, blog updates, and upcoming events.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardItems.map(({ id, img, type, title, date, description, link }) => (
          <div
            className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
            key={id}
          >
            <div className="relative">
              <img
                src={img}
                className="w-full h-60 object-cover"
                alt={`News item ${id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="font-semibold text-blue-600">{type}</span>
                <span>{date}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardd;

