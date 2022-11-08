import React from "react";
import "./Home.css";
import { FaUser, FaHeart, FaImage, FaPhotoVideo } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <section className="banner-container">
        <div className="banner-text text-center ">
          <h1 className="text-white">
            Discover <br /> and <br /> Share Your{" "}
            <span className="text-warning">Best Photos</span> from Here.
          </h1>
          <button className="btn btn-warning text-success fw-bold  rounded-5 ">
            SIGN UP
          </button>
        </div>
      </section>
      <section className="container-fluid about-me bg-dark text-center text-white p-5 my-5 shadow-lg">
        <h2>ABOUT ME</h2>
        <p>
          “The long story short is that I'm just a guy lucky enough to pick up a
          camera. How that went down is quite a tale, and the fact that I get to
          do what I love every day is something that I'll always cherish and be
          forever grateful for.”
        </p>
        <button className="btn btn-primary rounded-5">See More</button>
      </section>
      <section className="user-experience mb-5 p-5 ">
        <div className="mx-auto w-75 d-lg-flex justify-content-between align-items-center flex-lg-row">
          <div className="text-center">
            <FaUser className="text-secondary fs-1"></FaUser>
            <p>Users:3000</p>
          </div>
          <div className="text-center">
            <FaHeart className="text-danger fs-1"></FaHeart>
            <p>Loved:1000</p>
          </div>
          <div className="text-center">
            <FaImage className="text-dark fs-1"></FaImage>
            <p>Photos:5000</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
