import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import "./MyReview.css";
import swal from "sweetalert";
import UseTitle from "../useTitle/UseTitle";
import { Link } from "react-router-dom";

const MyReview = () => {
  const alertForDelete = () => {
    swal("Warning", "Review deleted successfully", "warning");
  };
  UseTitle("My Review");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch(
      `https://b6-assignment-11-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, [user?.email]);

  const handleReviewDelete = (id) => {
    fetch(`https://b6-assignment-11-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingReview = reviews.filter((review) => review._id !== id);
          setReviews(remainingReview);
          alertForDelete();
        }
        console.log(data);
      });
  };

  //update review
  //   const handleReviewUpdate = (id) => {
  //     fetch(`https://b6-assignment-11-server.vercel.app/reviews/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(reviews),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };
  return (
    <div>
      {reviews.length > 0 ? (
        <div className="review-container">
          {reviews.map((review) => (
            <div key={review._id} class="card my-3" style={{ width: "18rem" }}>
              <img src={review.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2>{review.name}</h2>
                <h4>{review.email}</h4>
                <p class="card-text">{review.description}</p>
                <div>
                  <Link to={`/review/${review._id}`}>
                    <button className="btn rounded-circle px-3 py-2 btn-success">
                      +
                    </button>
                  </Link>
                  <button
                    onClick={() => handleReviewDelete(review._id)}
                    className="btn rounded-circle ms-2 px-3 py-2 btn-danger"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-danger w-100 my-5 text-center">
          No reviews were added..!
        </h1>
      )}
    </div>
  );
};

export default MyReview;
