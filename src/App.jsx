// import React, { useState, useEffect } from "react";

// import { useDispatch } from "react-redux";
// import "./App.css";
// import authService from "./appwrite/auth";
// import { login, logout } from "./store/authSlice";
// import { Header, Footer } from "./components";
// import Home from "./components/Home/Home";
// import { Outlet } from "react-router-dom";
// import Caro from "./components/Carousel";
// import Cardd from "./components/Card";
// import CardLayout from "./components/Card";
// import Contact from "./components/Contact";
// import { Toaster } from "react-hot-toast";

// function App() {
//   const [loading, setloading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     authService
//       .getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }
//       })
//       .finally(() => setloading(false));
//   }, []);

//   return !loading ? (
//     <div className="min-h-sc flex flex-wrap bg-gray-400">
//       <div className="w-full h-full">
//         <Header />
//         <Caro />

//         <CardLayout />

//         <Home />
//         <Footer />
//         <Contact />

//         <main>
//           TODO:
//           <Outlet />
//         </main>
//       </div>
//       <Toaster />
//     </div>
//   ) : null;
// }

// export default App;



import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer, Home } from "./components";
import { Outlet } from "react-router-dom";
import Caro from "./components/Carousel";
import CardLayout from "./components/Card";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
  <>
      <Header />
      <Home/>
      <main className="flex-grow">
        <Caro />
        <CardLayout />
      </main>
      <Footer />
      <Outlet />
      <Toaster />
    </>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <p>Loading...</p>
    </div>
  );
}

export default App;
