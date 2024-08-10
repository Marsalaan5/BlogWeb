
import React, { useState } from "react";
import { Container, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import pic from "../../assets/iimg.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { 
      name: "Home", 
      slug: "/home", 
      active: true 
    },
    { 
      name: "Login", 
      slug: "/login", 
      active: !authStatus 
      
    },
    { 
      name: "Signup", 
      slug: "/signup", 
      active: !authStatus 
      
    },
    { 
      name: "Contact Us", 
      slug: "/contactus", 
      active: true 
      
    },
    { 
      name: "All Post", 
      slug: "/all-post", 
      active: authStatus 
      
    },
    { 
      name: "Add Post", 
      slug: "/add-post", 
      active: authStatus 
      
    },
  ];

  const handleNavigation = (slug) => {
    setMenuOpen(false);
    navigate(slug);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4 px-6 md:px-12">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <div className="flex items-center space-x-2">
                <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
                <h1 className="font-bold text-xl cursor-pointer flex items-center">
                  ThoughtsOfHeaven
                  <span className="text-green-500 text-2xl ml-1">l</span>
                  <p className="text-sm text-gray-600">Blog</p>
                </h1>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.slug)}
                  className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ) : null
            )}
            {authStatus && (
              <LogoutBtn />
            )}
          </div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </nav>
        {menuOpen && (
          <div className="fixed inset-0 top-16 left-0 right-0 bg-white shadow-lg z-40">
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.slug)}
                      className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
