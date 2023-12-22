import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home";
import Admin from "./components/layouts/Admin";
import Login from "./components/Login";
import About from "./components/layouts/About";
import Main from "./components/Main";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Quiz from "./components/Quiz";
import Result from "./components/Score";
import Error from "./components/layouts/Error";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Error />} />

        </Routes>
        <div className="mt-5">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
