import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import "./MyReview.css";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, [user?.email]);
  return (
    <div className="review-container">
      {reviews.map((review) => (
        <div key={review._id} class="card my-3" style={{ width: "18rem" }}>
          <img src={review.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2>{review.name}</h2>
            <h4>{review.email}</h4>
            <p class="card-text">{review.description}</p>
            <div>
              <button className="btn rounded-circle px-3 py-2 btn-success">
                +
              </button>
              <button className="btn rounded-circle ms-2 px-3 py-2 btn-danger">
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReview;