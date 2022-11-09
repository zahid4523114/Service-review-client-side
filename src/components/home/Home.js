import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaUser, FaHeart, FaImage, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import UseTitle from "../useTitle/UseTitle";

const Home = () => {
  UseTitle("Home");
  const [photos, SetPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/photoCount")
      .then((res) => res.json())
      .then((data) => {
        SetPhotos(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <section className="banner-container">
        <div className="banner-text text-center ">
          <h1 className="text-white">
            Discover <br /> and <br /> Share Your{" "}
            <span className="text-warning">Best Photos</span> from Here.
          </h1>
          <Link to="/register">
            <button className="btn btn-warning text-success fw-bold  rounded-5 ">
              SIGN UP
            </button>
          </Link>
        </div>
      </section>
      <section className="home-card-container mt-5">
        <PhotoProvider>
          {photos.map((p) => (
            <div key={p._id} className="card" style={{ width: "18rem" }}>
              <PhotoView src={p.serviceThumb}>
                <img src={p.serviceThumb} class="card-img-top" alt="..." />
              </PhotoView>
              <div class="card-body">
                <p className="card-title fw-bold">{p.serviceTitle}</p>
                <p class="card-text">Price: ${p.servicePrice}</p>
                <p class="card-text">Ratings: {p.serviceRatings}</p>
                <p class="card-text"></p>
              </div>
            </div>
          ))}
        </PhotoProvider>
      </section>
      <div>
        <Link to="/services">
          <button className="btn btn-primary d-block mx-auto mt-4 rounded-5">
            Sell All <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>
      <section className="container-fluid about-me bg-body shadow-lg rounded-2 text-center p-5 my-5 shadow-lg">
        <h2>ABOUT ME</h2>
        <p>
          “The long story short is that I'm just a guy lucky enough to pick up a
          camera. How that went down is quite a tale, and the fact that I get to
          do what I love every day is something that I'll always cherish and be
          forever grateful for.”
        </p>
        <button className="btn btn-primary rounded-5">See More</button>
      </section>
      <section className="user-experience text-center shadow-lg rounded-2 my-5 p-5 ">
        <h1 className="text-center">User Experience</h1>
        <div className="mx-auto my-5 w-75 d-lg-flex justify-content-between align-items-center flex-lg-row">
          <div className="text-center">
            <FaUser className="text-secondary fs-1 text-success"></FaUser>
            <p className="fw-bold fs-5">Users: 3000</p>
          </div>
          <div className="text-center">
            <FaHeart className="text-danger fs-1"></FaHeart>
            <p className="fw-bold fs-5">Loved: 1000</p>
          </div>
          <div className="text-center">
            <FaImage className=" fs-1 text-warning"></FaImage>
            <p className="fw-bold fs-5">Photos: 5000</p>
          </div>
        </div>
        <p>
          Responding to positive reviews increases their value. When you respond
          to a positive review, the customer who left the review feels
          appreciated, which increases the chance for repeat business. Review
          responses also show that you value customer feedback and care to
          improve your customer experience.
        </p>
      </section>
    </>
  );
};

export default Home;
