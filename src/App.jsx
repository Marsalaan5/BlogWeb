
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
      <Outlet />
      <Home/>
      <main className="flex-grow">
        <Caro />
        <CardLayout />
      </main>
      <Footer />
      <Toaster />
    </>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <p>Loading...</p>
    </div>
  );
}

export default App;
