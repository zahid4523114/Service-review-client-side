import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaUser, FaHeart, FaImage, FaArrowRight } from "react-icons/fa";
const Home = () => {
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
          <button className="btn btn-warning text-success fw-bold  rounded-5 ">
            SIGN UP
          </button>
        </div>
      </section>
      <section className="home-card-container mt-5">
        {photos.map((p) => (
          <div key={p._id} className="card" style={{ width: "18rem" }}>
            <img src={p.serviceThumb} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className="card-title">{p.serviceTitle}</p>
              <p class="card-text">Price: ${p.servicePrice}</p>
              <p class="card-text">Ratings: {p.serviceRatings}</p>
              <p class="card-text"></p>
            </div>
          </div>
        ))}
      </section>
      <div>
        <button className="btn btn-primary d-block mx-auto mt-4 rounded-5">
          Sell All <FaArrowRight></FaArrowRight>
        </button>
      </div>
      <section className="container-fluid about-me bg-primary text-center text-white p-5 my-5 shadow-lg">
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
