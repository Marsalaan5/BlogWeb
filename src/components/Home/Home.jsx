
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <>
    <div className=" py-20">
      <div className="bg-gray-100  py-20">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xl font-medium text-gray-600">Welcome to Our Blog</span>
            <h1 className="text-3xl md:text-5xl font-extrabold my-4 text-gray-900">
              Hello, I'm a BlogWriter
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
              Welcome to our blog, your go-to destination for insightful articles and fresh perspectives on technology, lifestyle, and beyond. Whether you're looking to stay updated on the latest trends, discover new ideas, or simply find inspiration, we've got something for everyone. Join our community of readers and dive into a world of knowledge, stories, and engaging discussions. Explore our latest posts, leave your comments, and share your favorite articles with friends. Happy reading!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
              <h2 className="text-xl font-semibold text-gray-900 py-4">Available On</h2>
              <p className="text-base text-gray-600">
                Explore our blog on various platforms and stay connected with our latest updates.
              </p>
              <ul className="flex justify-center md:justify-start space-x-6 p-2 ml-20 my-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                    <FaTwitter size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                    <FaFacebook size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                    <FaLinkedin size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                    <FaInstagram size={24} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-right">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Currently Working On</h2>
              <p className="text-base text-gray-600">
                We are constantly working on new and exciting content. Stay tuned for more updates and engaging articles. Your feedback and participation are always welcome.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />
      </div>
    </>
  );
}

export default Home;
