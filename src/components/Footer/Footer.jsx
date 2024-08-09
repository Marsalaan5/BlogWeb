
import React from "react";
import { Link } from "react-router-dom";
import pic from '../../assets/iimg.jpg'; 

function Footer() {
  return (
    <section className="bg-gray-50 py-8 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-4/12 mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <img src={pic} alt="Decorative" className="w-32 h-32 rounded-full shadow-md" />
            </div>
            <p className="text-gray-600">
              Crafting exceptional experiences through innovative design and technology.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/12 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Features</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Pricing</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Affiliate Program</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Press Kit</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/12 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Account</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Help</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Contact Us</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Customer Support</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-gray-900" to="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-600">
          Mohammad Rashid &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;


